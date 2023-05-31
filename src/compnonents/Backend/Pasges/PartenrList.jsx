import React, { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Api from '../../Helper/Api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import JoditEditor from 'jodit-react';
import { toast } from 'react-toastify';
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from 'react-table';
import { FaCaretDown, FaCaretUp, FaTrash } from 'react-icons/fa';
import GlobalFilter from '../../Helper/GlobalFilter';
import parse from 'html-react-parser';
import { format } from 'react-string-format';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const editor = {
  width: '57rem',
  margin: '0rem auto',
  marginRight: '30rem',
};

const validationSchame = Yup.object().shape({
  name: Yup.string().required('Partners is required !'),
  url: Yup.string().required('url is required !'),
  logo: Yup.mixed()
    .nullable()
    .required()
    .test(
      'FILE_SIZE',
      'upload file is too big',
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      'FILE_FORMAT',
      'upload file has unsupported format',
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});

const config = {
  placeholder: 'write Profile.....',
  limitWords: '450',
};

function PartenrList({ initialValue }) {
  const [partner, setPartner] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(initialValue ?? '');

  const getPartners = async () => {
    try {
      setLoading(true);
      const response = await Api.get('/partner');
      setPartner(response.data);
      setLoading(false);
    } catch (err) {
      // not in 200 response range
      setPartner(err.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure that you want to delete this partner !'))
      try {
        const response = await Api.delete(`/partner/${id}`);

        setPartner(
          partner.filter((partner) => {
            return partner.id !== response.id;
          })
        );
        toast.success('partners was successfully deleted ! ');
        getPartners();
      } catch (err) {
        console.log(err);
      }
  };

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append('name', formik.values.name);
    formData.append('url', formik.values.url);
    formData.append('logo', formik.values.logo);
    formData.append('profile', profile);
    const response = await Api.post('/partner', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).catch((err) => {
      if (err && err.response) console.log('Error: ', err);
    });
    if (response) {
      toast.success(response.data.status);
      setPartner((current) => {
        return [...current, response.data];
      });
    }
    getPartners();
    setProfile('');
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: { name: '', url: '', logo: '' },
    onSubmit,
    validateOnBlur: true,
    validationSchema: validationSchame,
  });

  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Url',
        accessor: 'url', // accessor is the "key" in the data
        Cell: ({ value }) => {
          return format(<a href={value}>{value}</a>);
        },
      },
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Profile',
        accessor: 'profile',
        Cell: ({ value }) => {
          return parse(value);
        },
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
            onClick={() => handleDelete(row.values.id)}
            style={{ color: 'red', cursor: 'pointer' }}
          />
        ),
      },
    ]);
  };

  const Parterres = useMemo(() => [...partner], [partner]);

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
    { columns, data: Parterres },

    useGlobalFilter,
    useSortBy,
    tableHook,
    usePagination
  );

  const { pageIndex, pageSize } = state;
  const { globalFilter } = state;

  useEffect(() => {
    getPartners();
  }, []);

  return (
    <>
      <Container style={{ marginBottom: '2rem' }}>
        <Form className="neeeds-validation" onSubmit={formik.handleSubmit}>
          <Row>
            <Col md>
              <Form.Group className="was-validated">
                <Form.Label>Partner Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Partner's Official Business Name"
                  required
                  name="name"
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <div className="invalid-feedback">
                  <span style={{ color: 'red' }}>
                    {formik.touched.name && formik.errors.name
                      ? formik.errors.name
                      : ''}
                  </span>
                </div>
              </Form.Group>
            </Col>

            <Col md>
              <Form.Group>
                <Form.Label>Company/Partner URL</Form.Label>
                <Form.Control
                  type="url"
                  placeholder="Partner's URL"
                  required
                  name="url"
                  value={formik.values.url}
                  onChange={formik.handleChange}
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="was-validated">
                <Form.Label> Partner Logo</Form.Label>
                <Form.Control
                  type="file"
                  id="customFile"
                  name="logo"
                  onChange={(event) => {
                    formik.setFieldValue('logo', event.target.files[0]);
                  }}
                  required
                  style={{ height: '32px' }}
                />
                <span style={{ color: 'red', fontSize: '11px' }}>
                  Upload image of dimension 850 x 490px for optimum resolution.
                </span>
                <p style={{ color: 'red' }}>
                  {formik.touched.logo && formik.errors.logo
                    ? formik.errors.logo
                    : ''}
                </p>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md>
              <div
                style={{
                  fontSize: '17px',
                  marginBottom: '-9px',
                }}
              >
                <label>
                  Profile
                  <span style={{ color: 'red', fontSize: '24px' }}>*</span>
                  <div style={editor}>
                    <JoditEditor
                      value={profile}
                      onChange={(newContent) => setProfile(newContent)}
                      config={config}
                    />
                    <span style={{ color: 'red', fontSize: '11px' }}>
                      Not more then 450 words
                    </span>
                  </div>
                </label>
              </div>
            </Col>
          </Row>
          <Button
            type="submit"
            variant="primary"
            style={{
              marginTop: '1rem',
            }}
            disabled={!formik.isValid}
          >
            submit
          </Button>
        </Form>
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
                {page.map((row, i) => {
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

export default PartenrList;
