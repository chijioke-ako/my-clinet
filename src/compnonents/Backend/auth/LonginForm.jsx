import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { FaPhabricator, FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Api from '../../Helper/Api';

const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

const validationSchame = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter a valid email')
    .matches(emailRegExp, 'Please enter a valid email'),

  password: Yup.string()
    .required('password is required')
    .min(4, 'Minimum Required length is 4')
    .max(8, 'Maximum Required length 8')
    .matches(
      passwordRegExp,
      'password must be at least one uppercase letter, one lowercase letter, one number and one special character 8.'
    ),
});

function LonginFrom({ setAuth }) {
  const [passwordEye, setPasswordEye] = useState(false);

  const Navigate = useNavigate();

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const onSubmit = async (values) => {
    formik.resetForm();
    const { email, password } = values;
    const res = await Api.post('/login', {
      email,
      password,
    }).catch((err) => {
      if (err && err.response) toast.error(err.response.data.data);
      console.log('Error: ', err);
    });
    if (res.data) {
      localStorage.setItem('token', res.data.token);

      setAuth(true);

      toast.success(res.data.status);
    }
    Navigate('/HomeB');
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    onSubmit,
    validationSchema: validationSchame,
  });

  return (
    <>
      <div className="wrapper d-flex align-items-center justify-content-center w-100">
        <div className="login">
          <h1
            className="mb-3"
            style={{
              textAlign: 'center',
              color: 'GrayText',
              fontWeight: 'bold',
            }}
          >
            Login
          </h1>
          <form className="neeeds-validation" onSubmit={formik.handleSubmit}>
            <div className="form-group was-validated mb-2">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example.gmail.com"
                className="form-control"
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
                required
              />
              <div className="invalid-feedback">
                <span style={{ color: 'red' }}>
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ''}
                </span>
              </div>
            </div>
            <div className="form-group was-validated mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                name="password"
                id="password"
                className="form-control"
                placeholder="password"
                type={passwordEye === false ? 'password' : 'text'}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                required
              />
              <div
                style={{
                  marginTop: '-40px',
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

              <div style={{ marginTop: '1rem' }}>
                <span style={{ color: 'red' }}>
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ''}
                </span>
              </div>
            </div>

            <div className="form-group form-check mb-2">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="form-check-input"
              />
              <label htmlFor="check" className="form-check-label">
                Remember me
              </label>
            </div>
            <button
              className="btn btn-primary block w-100 mt-2"
              type="submit"
              disabled={!formik.isValid}
            >
              SIGN IN
            </button>
          </form>

          <div className="form-group mb-2">
            <label htmlFor="password" className="form-label">
              Forget password <Link>Click here</Link>
            </label>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default LonginFrom;
