import { Container, Breadcrumb, Button, Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleRight, FaEye, FaPen } from 'react-icons/fa';

import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from 'react-table';
import { FaCaretDown, FaCaretUp, FaTrash } from 'react-icons/fa';
import GlobalFilter from '../Helper/GlobalFilter';
import { useEffect, useMemo, useState } from 'react';
import Api from '../Helper/Api';
import { toast } from 'react-toastify';
import moment from 'moment';

const style = {
  marginTop: '20px',
  marginBottom: '20px',
  border: 0,
};

function PublicationB() {
  const [publication, setPublication] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useNavigate();

  const getPublication = async () => {
    try {
      setLoading(false);
      const response = await Api.get('/publications');
      setPublication(response.data);
    } catch (err) {
      // not in 200 response range
      toast.error(err.message);
    }
  };

  const handlerView = async (id) => {
    history(`/HomeB/PublicationView/${id}`);
  };

  const deleteHeader = async (id) => {
    if (
      window.confirm('Are you sure that you want to delete this publication !')
    )
      try {
        const response = await Api.delete(`/publications/${id}`);
        setPublication(
          publication.filter((publication) => {
            return publication.id !== response.id;
          })
        );
        toast.success('publication was successfully deleted ! ');
        getPublication();
      } catch (err) {
        toast.error(err);
      }
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Title',
        accessor: 'title', // accessor is the "key" in the data
      },
      {
        Header: 'Date Created',
        accessor: 'date_created', // accessor is the "key" in the data
        Cell: ({ value }) => {
          return moment(value).format('dddd, l, h:mm a');
        },
      },
      {
        Header: 'Last Date Updated',
        accessor: 'last_date_updated',
        Cell: ({ value }) => {
          return moment(value).format('dddd, l, h:mm a');
        },
      },
      {
        Header: 'Author',
        accessor: 'author',
      },
    ],
    []
  );
  const tableHook = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: 'edit',
        Header: 'edit',
        Cell: ({ row }) => (
          <FaPen
            onClick={() => handlerUpdate(row.values.id)}
            style={{ color: 'red', cursor: 'pointer' }}
          />
        ),
      },
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
    ]);
  };

  const Publication = useMemo(() => [...publication], [publication]);

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
    { columns, data: Publication },

    useGlobalFilter,
    useSortBy,
    tableHook,
    usePagination
  );

  useEffect(() => {
    getPublication();
  }, []);

  const handlerUpdate = async (id) => {
    // e.stopPropagation();
    console.log(id);
    history(`/HomeB/publication/${id}/Update`);
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
          Publications
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
            <Breadcrumb.Item active>Publications</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
      <Container>
        <Button style={{ background: '#337ab7', height: '34px' }}>
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            to="/HomeB/AddNewPublication"
          >
            Add New Publication
            <FaAngleRight />
          </Link>
        </Button>
      </Container>

      <Container>
        <hr style={style} />
      </Container>

      <Container>
        {loading ? (
          <span>Loading Partners </span>
        ) : (
          <>
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
          </>
        )}
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
    </>
  );
}

export default PublicationB;
