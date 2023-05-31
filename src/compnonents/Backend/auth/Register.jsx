import './register.css';
import {
  FaPhabricator,
  FaEye,
  FaTimes,
  FaInfoCircle,
  FaCheck,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Api from '../../Helper/Api';
import { Link, useNavigate } from 'react-router-dom';
import { Breadcrumb, Container } from 'react-bootstrap';
import { useState } from 'react';

const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

const validationSchame = Yup.object().shape({
  firstname: Yup.string()
    .required('First name is required')
    .min(8, 'Minimum Required length is 8')
    .max(20, 'Maximum Required length 20'),
  lastname: Yup.string()
    .required('Last name is required')
    .min(8, 'Minimum Required length is 8')
    .max(20, 'Maximum Required length 20'),
  role: Yup.string().required('First name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter a valid email')
    .matches(emailRegExp, 'Please enter a valid email'),

  password: Yup.string()
    .required('password is required')
    .min(8, 'Minimum Required length is 8')
    .max(20, 'Maximum Required length 20')
    .matches(
      passwordRegExp,
      'password must be at least one uppercase letter, one lowercase letter, one number and one special character 8.'
    ),
  confirmPassword: Yup.string()
    .required('confirm Password required')
    .oneOf(
      [Yup.ref('password'), null],
      ' Must match the the first password input'
    ),
});

const style = {
  marginTop: '20px',
  marginBottom: '20px',
  border: 0,
};

function Register({ setAuth }) {
  const Navigate = useNavigate();

  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  const onSubmit = async (values) => {
    formik.resetForm();
    const { firstname, lastname, email, role, password, confirmPassword } =
      values;
    const res = await Api.post(
      '/register',
      {
        firstname,
        lastname,
        role,
        email,
        password,
        confirmPassword,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    ).catch((err) => {
      if (err && err.response) toast.error(err.response.data.data);
    });
    if (res) {
      // setAuth(true);
      toast.success(res.data.data);
    }

    Navigate('/HomeB/users');
  };

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      password: '',
      role: '',
      confirmPassword: '',
      email: '',
    },
    onSubmit,
    validationSchema: validationSchame,
  });
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
              Register
            </h1>
            <form className="neeeds-validation" onSubmit={formik.handleSubmit}>
              <div className="form-group was-validated mb-2">
                <label
                  htmlFor="fistname"
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
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  required
                />
                <span style={{ color: 'red' }}>
                  {formik.touched.firstname && formik.errors.firstname
                    ? formik.errors.firstname
                    : ''}
                </span>
              </div>

              <div className="form-group was-validated mb-2">
                <label
                  htmlFor="lastname"
                  className="form-label"
                  style={{ fontWeight: 'bold' }}
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  autoComplete="off"
                  placeholder="SunName"
                  className="form-control"
                  name="lastname"
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  required
                />
                <span style={{ color: 'red' }}>
                  {formik.touched.lastname && formik.errors.lastname
                    ? formik.errors.lastname
                    : ''}
                </span>
              </div>
              <div className="form-group was-validated mb-2">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ fontWeight: 'bold' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="email@gmail.com"
                  className="form-control"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required
                />

                <span style={{ color: 'red' }}>
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ''}
                </span>
              </div>
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
                  onBlur={formik.handleBlur}
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  required
                />
                <span style={{ color: 'red' }}>
                  {formik.touched.role && formik.errors.role
                    ? formik.errors.role
                    : ''}
                </span>
              </div>
              <div className="form-group was-validated mb-4">
                <label
                  htmlFor="password"
                  className="form-label"
                  style={{ fontWeight: 'bold' }}
                >
                  Password
                </label>
                <input
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="password"
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type={passwordEye === false ? 'password' : 'text'}
                  required
                />
                <span style={{ color: 'red' }}>
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ''}
                </span>
                <div
                  style={{
                    marginTop: '-57px',
                    display: 'relative',
                    marginLeft: '13rem',
                    fontSize: '20px',
                  }}
                >
                  {passwordEye === false ? (
                    <FaPhabricator onClick={handlePasswordClick} />
                  ) : (
                    <FaEye onClick={handlePasswordClick} />
                  )}
                </div>
              </div>
              <div className="form-group was-validated mb-4">
                <label
                  htmlFor="confirm_pwd"
                  className="form-label"
                  style={{ fontWeight: 'bold' }}
                >
                  Confirm Password
                </label>
                <input
                  id="confirm_pwd"
                  className="form-control"
                  placeholder="confirm Password"
                  type={confirmPasswordEye === false ? 'password' : 'text'}
                  name="confirmPassword"
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  required
                />
                <span style={{ color: 'red' }}>
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : ''}
                </span>
                <div
                  style={{
                    marginTop: '-57px',
                    display: 'relative',
                    marginLeft: '13rem',
                    fontSize: '20px',
                  }}
                >
                  {confirmPasswordEye === false ? (
                    <FaPhabricator onClick={handleConfirmPasswordClick} />
                  ) : (
                    <FaEye onClick={handleConfirmPasswordClick} />
                  )}
                </div>
              </div>

              <button
                className="btn btn-primary block w-100 mt-2"
                type="submit"
                disabled={!formik.isValid}
              >
                register
              </button>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Register;
