import { useEffect, useState } from 'react';
import Api from '../../Helper/Api';
import { Breadcrumb, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaEye, FaPhabricator } from 'react-icons/fa';
import { toast } from 'react-toastify';

const style = {
  marginTop: '20px',
  marginBottom: '20px',
  border: 0,
};

const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

function UsersUpdate() {
  const { id } = useParams();
  const Navigate = useNavigate();

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    role: '',
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (id) {
      getOneUsers(id);
    }
  }, [id]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSuccess) {
    }
  }, [formErrors]);

  const getOneUsers = async (id) => {
    try {
      const response = await Api.get(`/users/${id}`);
      setFormValues({ ...response.data });
      console.log({ ...response.data });
    } catch (err) {
      // not in 200 response range
      toast.error(err.message);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSuccess(true);

  //   const fd = new FormData();

  //   fd.append('firstname', formValues.firstname);
  //   fd.append('', formValues.lastname);
  //   fd.append('lastname', formValues.email);
  //   fd.append('email', formValues.email);
  //   fd.append('role', formValues.role);

  //   const response = await Api.put(`/users/${id}`, formValues, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   }).catch((err) => {
  //     if (err && err.response) console.log('Error: ', err);
  //   });
  //   if (response === 200) {
  //     toast.success(response.data.status);
  //     console.log(response.data.status);
  //   }

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSuccess(true);

    const fd = new FormData();

    fd.append('firstname', formValues.firstname);
    fd.append('lastname', formValues.lastname);
    fd.append('email', formValues.email);
    fd.append('role', formValues.role);

    const response = await Api.put(`/users/${id}`, fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).catch((err) => {
      if (err && err.response) console.log('Error: ', err);
    });
    if (response) {
      toast.success(response.data.status);
    }

    Navigate('/HomeB/users');
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = 'Please enter firstname !';
    } else if (values.firstname.length < 4) {
      errors.firstname = 'must be more 4 characters';
    }

    if (!values.lastname) {
      errors.lastname = 'Please enter lastname !';
    } else if (values.lastname.length < 4) {
      errors.lastname = 'must be more 4 characters';
    }
    if (!values.email) {
      errors.email = 'Please enter lastname !';
    } else if (values.email.length < 4) {
      errors.email = 'must be more 4 characters';
    }
    if (!values.role) {
      errors.role = 'Please enter role !';
    } else if (values.role.length < 4) {
      errors.role = 'must be more 4 admin or users';
    }

    return errors;
  };

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
        <div className="wrapper d-flex align-items-center justify-content-center w-100">
          <div className="login">
            <h1
              className="mb-1"
              style={{
                textAlign: 'center',
                color: 'GrayText',
                fontWeight: 'bold',
              }}
            >
              Edit Users
            </h1>
            <Form className="neeeds-validation" onSubmit={handleSubmit}>
              {/* <div className="form-group was-validated mb-2">
                <label
                  htmlFor="firstname"
                  className="form-label"
                  style={{ fontWeight: 'bold' }}
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  autoComplete="off"
                  placeholder="John"
                  className="form-control"
                  name="firstname"
                  value={formValues.firstname}
                  onChange={handleChange}
                  required
                />
                <span style={{ color: 'red' }}>{formErrors.firstname}</span>
              </div> */}

              <Row>
                <Col md>
                  <Form.Group className="was-validated">
                    <Form.Label style={{ fontWeight: 'bold' }}>
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="firstname of Publication"
                      required
                      name="firstname"
                      value={formValues.firstname}
                      onChange={handleChange}
                    />
                    <span style={{ color: 'red' }}>{formErrors.firstname}</span>
                  </Form.Group>
                  <Form.Group className="was-validated">
                    <Form.Label style={{ fontWeight: 'bold' }}>
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="lastname of Publication"
                      required
                      name="lastname"
                      value={formValues.lastname}
                      onChange={handleChange}
                    />
                    <span style={{ color: 'red' }}>{formErrors.lastname}</span>
                  </Form.Group>
                  <Form.Group className="was-validated">
                    <Form.Label style={{ fontWeight: 'bold' }}>
                      Email
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="email of Publication"
                      required
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <span style={{ color: 'red' }}>{formErrors.email}</span>
                  </Form.Group>
                  <Form.Group className="was-validated">
                    <Form.Label style={{ fontWeight: 'bold' }}>Role</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="role of Publication"
                      required
                      name="role"
                      value={formValues.role}
                      onChange={handleChange}
                    />
                    <span style={{ color: 'red' }}>{formErrors.role}</span>
                  </Form.Group>
                </Col>
              </Row>

              <div className="form-group was-validated mb-2">
                <label
                  htmlFor="role"
                  className="form-label"
                  style={{ fontWeight: 'bold' }}
                >
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  autoComplete="off"
                  placeholder="Users / Admin "
                  className="form-control"
                  name="role"
                  value={formValues.role}
                  onChange={handleChange}
                  required
                />
                <span style={{ color: 'red' }}>{formErrors.role}</span>
              </div>
              <button
                className="btn btn-primary block w-100 mt-2"
                type="submit"
              >
                register
              </button>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default UsersUpdate;
