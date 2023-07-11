import { Container, Breadcrumb, Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import AddBox from '@material-ui/icons/AddBox';
import { useState } from 'react';
import Api from '../../Helper/Api';
import { useEffect } from 'react';
import { FaCaretDown, FaCaretUp, FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import { useMemo } from 'react';
import GlobalFilter from '../../Helper/GlobalFilter';
import LoadingBox from '../../Helper/LoadingBox';
import MessageBox from '../../Helper/MessageBox';

const style = {
  marginTop: '20px',
  marginBottom: '20px',
  border: 0,
};

function Users() {
  const navigate = useNavigate();

  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await Api.get('/users');
      setLoading(false);
      setUser(response.data);
    } catch (err) {
      // not in 200 response range
      setError(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteHeader = async (id) => {
    if (window.confirm('Are you sure that you want to delete this User!'))
      try {
        const response = await Api.delete(`/users/${id}`);
        setUser(
          user.filter((user) => {
            return user.id !== response.id;
          })
        );
        toast.success('Users was successfully deleted ! ');
      } catch (err) {
        toast.error(err);
      }
  };

  const handlerUpdate = async (id) => {
    // e.stopPropagation();
    console.log(id);
    navigate(`/HomeB/users/${id}/Update`);
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'First Name',
        accessor: 'firstname', // accessor is the "key" in the data
      },
      {
        Header: 'Last Name',
        accessor: 'lastname', // accessor is the "key" in the data
      },
      {
        Header: ' Email',
        accessor: 'email',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
    ],
    []
  );
  const tableHook = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,

      {
        id: 'delete',
        Header: 'Delete',
        Cell: ({ row }) => (
          <FaTrash
            onClick={() => deleteHeader(row.values.id)}
            style={{ color: 'red', cursor: 'pointer' }}
          />
        ),
      },

      {
        id: 'view',
        Header: 'view',
        Cell: ({ row }) => (
          <FaEye
            onClick={() => handlerView(row.values.id)}
            style={{ color: 'red', cursor: 'pointer' }}
          />
        ),
      },
      {
        id: 'edit',
        Header: 'Edit',
        Cell: ({ row }) => (
          <FaPen
            onClick={() => handlerUpdate(row.values.id)}
            style={{ color: 'red', cursor: 'pointer' }}
          />
        ),
      },
    ]);
  };

  const Users = useMemo(() => [...user], [user]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    setGlobalFilter,
    setPageSize,
    gotoPage,

    state,
    prepareRow,
  } = useTable(
    { columns, data: Users },

    useGlobalFilter,
    useSortBy,
    tableHook,
    usePagination
  );

  const handlerView = async (id) => {
    navigate(`/HomeB/users/${id}`);
  };

  const { pageIndex, pageSize } = state;
  const { globalFilter } = state;

  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: '#E1F0FF',
          height: '120px',
          marginTop: '-4px',
        }}
      >
        <div
          style={{
            fontSize: '28px',
            fontWeight: '700',
            marginLeft: '4rem',
            padding: '53px',
            fontFamily: ['Miriam Libre ', 'sans-serif'],
          }}
        >
          Users
        </div>
      </Container>
      <Container
        style={{
          backgroundColor: '#E1F0FF',
          marginBottom: '20px',
          marginTop: '20px',
          borderRadius: '9px',
          paddingTop: '4px',
          paddingLeft: '12px',
          paddingBottom: '1px',
        }}
      >
        <div>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/HomeB' }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Admin</Breadcrumb.Item>
            <Breadcrumb.Item active> Users</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
      <Container>
        <hr style={style} />
      </Container>
      <Container>
        <Button style={{ background: '#337ab7', height: '34px' }}>
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            to="/HomeB/register"
          >
            Register
            <AddBox />
          </Link>
        </Button>
      </Container>
      <Container>
        <hr style={style} />
      </Container>
      <Container>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>
            <h>No users available !!</h>
            {error}
          </MessageBox>
        ) : (
          <Container style={{ marginTop: '12px' }}>
            <div>
              <div style={{ textAlign: 'end' }}>
                <GlobalFilter
                  filter={globalFilter}
                  setFilter={setGlobalFilter}
                />
              </div>
              <span>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 25, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show:{pageSize}
                    </option>
                  ))}
                </select>
              </span>
            </div>

            <Table {...getTableProps()} style={{ border: 'solid 1px gray' }}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        style={{
                          border: 'solid 1px black',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          padding: '10px',
                          cursor: 'pointer',
                        }}
                      >
                        {column.render('Header')}
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <FaCaretDown />
                          ) : (
                            <FaCaretUp />
                          )
                        ) : (
                          ''
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: '10px',
                              border: 'solid 1px gray',
                              textAlign: 'center',
                            }}
                          >
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <div>
              <strong>
                <span>
                  {' '}
                  page {pageIndex + 1} of {pageOptions.length}
                </span>{' '}
                <span>
                  | Go to Page:{' '}
                  <input
                    type="number"
                    className="form-control"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const pageNumber = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(pageNumber);
                    }}
                    style={{ width: '50px', marginRight: '2px' }}
                  />
                </span>
              </strong>

              <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </Button>
              <Button
                style={{}}
                variant="primary"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous
              </Button>
              <Button
                style={{ marginLeft: '1px' }}
                variant="primary"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </Button>
              <Button onClick={() => gotoPage(1)} disabled={!canNextPage}>
                {'>>'}
              </Button>
            </div>
          </Container>
        )}
      </Container>

      <br />
    </>
  );
}

export default Users;
