import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Api from '../../Helper/Api';
import { Container } from 'react-bootstrap';

const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validationSchame = Yup.object({
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter a valid email')
    .matches(emailRegExp, 'Please enter a valid email'),
});

function PasswordRest() {
  const onSubmit = async (values) => {
    formik.resetForm();
    const { email } = values;
    const res = await Api.post('/forgetpassword', {
      email,
    }).catch((err) => {
      if (err && err.response) toast.error(err.response.data.data);
      console.log('Error: ', err);
    });
    if (res.data) {
      toast.success(res.data);
    }
  };

  const formik = useFormik({
    initialValues: {
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
    </>
  );
}

export default PasswordRest;
