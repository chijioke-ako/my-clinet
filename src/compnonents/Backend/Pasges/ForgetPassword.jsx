import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Api from '../../Helper/Api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaEye, FaPhabricator } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const passwordRegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

const validationSchame = Yup.object({
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
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function ForgetPassword() {
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const history = useNavigate();

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  const { id, token } = useParams();
  //   const param = useParams();

  useEffect(() => {
    getPassword();
  }, []);

  const getPassword = async () => {
    try {
      const response = await Api.get(
        `/forgetpassword/rest-password/${id}/${token}`
      );
      if (response) {
        toast.success(response.data.data);
      }
    } catch (err) {
      // not in 200 response range
      if (err && err.response.data) toast.error(err.response.data.data);
      console.log(err.response.data.data);
    }
  };

  const onSubmit = async (values) => {
    formik.resetForm();
    const { password, confirmPassword } = values;
    const res = await Api.post(`/forgetpassword/rest-password/${id}/${token}`, {
      password,
      confirmPassword,
    }).catch((err) => {
      if (err && err.response) toast.error(err.response.data);

      console.log('Error: ', err);
    });
    if (res.status) {
      toast.success(res.data);
    }
    history('/login');
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
      email: '',
    },
    onSubmit,
    validationSchema: validationSchame,
  });

  return (
    <>
      <Container>
        <div className="wrapper d-flex align-items-center justify-content-center w-100">
          <div className="login">
            <h6
              className="mb-1"
              style={{
                textAlign: 'center',
                color: 'GrayText',
                fontWeight: 'bold',
              }}
            >
              Reset Password
            </h6>
            <form className="neeeds-validation" onSubmit={formik.handleSubmit}>
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
                    marginTop: '-34px',
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
                    marginTop: '-34px',
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
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </Container>
      ForgetPassword
    </>
  );
}

export default ForgetPassword;
