import { useState } from 'react';
import { toast } from 'react-toastify';
import Api from '../../Helper/Api';
import fileDownload from 'js-file-download';
import {
  FaEye,
  FaTrash,
  FaLongArrowAltDown,
  FaCaretDown,
  FaCaretUp,
} from 'react-icons/fa';
import { Button, Container, Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import GlobalFilter from '../../Helper/GlobalFilter';
import parse from 'html-react-parser';
import moment from 'moment';
import LoadingBox from '../../Helper/LoadingBox';
import MessageBox from '../../Helper/MessageBox';

function ResumesList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getResumes = async () => {
    try {
      setLoading(true);
      const response = await Api.get('/resume');

      setData(response.data);
      setLoading(false);
    } catch (err) {
      // not in 200 response range
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getResumes();
  }, []);

  const deleteHeader = async (id) => {
    if (window.confirm('Are you sure that you want to delete this resume !'))
      try {
        const response = await Api.delete(`/resume/${id}`);
        setData(
          data.filter((data) => {
            return data.id !== response.id;
          })
        );
        toast.success('resumes was successfully deleted ! ');
        getResumes();
      } catch (err) {
        toast.error(err);
      }
  };

  const download = (id) => {
    // e.preventDefault();
    Api.get('/download', {
      responseType: 'blob',
    }).then((res) => {
      toast.error(res);
      fileDownload(res.data, 'pdf');
    });
  };

  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Cover Letter',
        accessor: 'coverletter', // accessor is the "key" in the data
        Cell: ({ value }) => {
          return parse(value);
        },
      },
      {
        Header: 'Date submitted	',
        accessor: 'datesubmitted', // accessor is the "key" in the data
        Cell: ({ value }) => {
          return moment(value).format('MMMM Do YYYY, h:mm:ss a');
          // moment(value).format('MMMM Do YYYY, h:mm:ss a');
        },
      },

      {
        Header: ' Email',
        accessor: 'email',
      },
      {
        Header: 'First name',
        accessor: 'firstname',
      },
      {
        Header: 'Surname',
        accessor: 'surname',
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
        id: 'Download Resume',
        Header: 'Download Resume',
        Cell: ({ row }) => (
          <FaLongArrowAltDown
            onClick={() => download(row.values.id)}
            style={{ color: 'blue', cursor: 'pointer' }}
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

  const datas = useMemo(() => [...data], [data]);

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
    { columns, data: datas },

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
      <Container>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>
            <h4> No currently resume available !</h4>
            {error}
          </MessageBox>
        ) : (
          <Container>
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

export default ResumesList;
