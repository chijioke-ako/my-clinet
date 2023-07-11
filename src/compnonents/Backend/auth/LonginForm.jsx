import { Link, useNavigate, useLocation } from 'react-router-dom';
import './login.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { FaPhabricator, FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../../action/userAction';
import LoadingBox from '../../Helper/LoadingBox';
import MessageBox from '../../Helper/MessageBox';

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

function LonginFrom() {
  const [passwordEye, setPasswordEye] = useState(false);
  const history = useNavigate();
  const location = useLocation();

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const redirect = location.search ? location.search.split('=')[1] : '/HomeB';

  const userSiginin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSiginin;

  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    formik.resetForm();
    const { email, password } = values;
    dispatch(signin(email, password));
  };

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    onSubmit,
    validationSchema: validationSchame,
  });

  useEffect(() => {
    if (userInfo) {
      history(redirect);
      toast.success('User sign successfully 💇');
    }
  }, [history, userInfo, redirect]);

  return (
    <>
      <div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <div>
            <h1>Sign In</h1>
          </div>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
              required
              placeholder="Enter Email"
            />
            <span style={{ color: 'red' }}>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ''}
            </span>
          </div>
          <div>
            <label htmlFor="password"> Password</label>
            <input
              placeholder="Enter password"
              id="password"
              required
              type={passwordEye === false ? 'password' : 'text'}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <span style={{ color: 'red' }}>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ''}
            </span>
            <div
              style={{
                marginTop: '-44px',
                textAlign: 'end',
                fontSize: '20px',
              }}
            >
              {passwordEye === false ? (
                <FaPhabricator size={30} onClick={handlePasswordClick} />
              ) : (
                <FaEye size={30} onClick={handlePasswordClick} />
              )}
            </div>
          </div>
          <div>
            <label />
            <button className="primary" type="submit">
              Sign In
            </button>
          </div>
          <div>
            <div>
              Forget password <Link to="/rest-password">Click here</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LonginFrom;
