import vid from '../../assets/video/Aloha-Mundo.mp4';
import vida from '../../assets/video/Aloha-Mundo.webm';

import prod from '../../assets/042.jpg';
import Feature from '../Pages/Sub_pages/feature';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Api from '../Helper/Api';
import { toast } from 'react-toastify';

import { Breadcrumb, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Openbravo.css';

const heading = {
  marginTop: '20px',
  marginBottom: '20px',
  border: 0,
  borderTop: '1px solid #eee',
};

const strongH3 = {
  fontFamily: 'Miriam Libre ',
  color: '#6eb43f',
  textAlign: 'center',
  fontSize: '2rem',
};

const openbraTitle = {
  fontSize: '22px',
  fontWeight: 'bold',
  margin: '0 0 10px',
  fontFamily: [
    'ubunturegular ',
    'open_sansregular',
    'Helvetica Neue',
    'Helvetica ',
    'Arial',
    'sans-serif',
  ].join(','),
  textAlign: 'start',
  marginTop: '5rem',
};

const coverText = {
  position: 'absolute',
  borderLeft: 'solid 8px #6db43f',
  backgroundColor: 'rgba(109, 180, 63, 0.3)',
  top: '8%',
  left: '20%',
  textAlign: 'start',
  color: '#fff',
  paddingRight: '50px',
  paddingBottom: '20px',
};

const coverh3 = {
  fontWeight: 'bold',
  padding: '20px 10px 0px',
  fontSize: '42px',
  color: '#fff',
  fontFamily: ['Miriam Libre ', 'sans-serif'].join(','),
};

const coverp = {
  paddingLeft: '10px',
  fontSize: '14px',
  margin: '9px 0 10px',
  color: '#fff',
  fontFamily: ['Miriam Libre ', 'sans-serif'].join(','),
};

const phoneRegExp = /^([0]{1})[0-9]{10}$/;
// const phoneRegExp =
//   /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const validationSchame = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Please enter you name at list 5 character')
    .max(50, 'Too Long!'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter real email'),

  telephone: Yup.string()
    .required('Phone is required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(11),
});
// const validationSchame = Yup.object().shape({
//   name: Yup.string()
//     .min(5, 'Please enter you name at list 5 character')
//     .max(50, 'Too Long!')
//     .required(' Name is required !'),
//   email: Yup.string()
//     .email('Invalid email')
//     .required('Please enter real email'),
//   telephone: Yup.string()
//     .required('Phone is required')
//     .matches(phoneRegExp, 'Phone number is not valid')
//     .min(11),
// });

function OpenbravoERP() {
  const onSubmit = async (values) => {
    formik.resetForm();

    const { name, company, telephone, email } = values;
    const response = await Api.post('/openbravo', {
      name,
      company,
      telephone,
      email,
    }).catch((err) => {
      if (err && err.response) console.log('Error: ', err);
    });
    if (response) {
      toast.success(response.data.status);
    }

    const res = await Api.post('/mail', {
      name,
      company,
      telephone,
      email,
    }).catch((err) => {
      if (err && err.response) toast.error('Error: email not send! ', err);
    });
    if (res) {
      toast.success(res.messages);
      console.log(res);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      company: '',
      telephone: '',
      email: '',
    },
    onSubmit,
    validateOnBlur: true,
    validationSchema: validationSchame,
  });

  return (
    <>
      <br />
      <div style={{ marginTop: '4rem', background: 'white' }}>
        <div className="openbravo-backgrond">
          <div className="container-v">
            <video width={1499} autoPlay loop muted style={{ width: '100%' }}>
              <source src={vid} type="video/mp4"></source>
              <source src={vida} type="video/webm"></source>
            </video>
            <div style={coverText}>
              <h3 style={coverh3}>Openbravo Business Suite</h3>
              <p style={coverp}>
                A global management solution built on top of a truly modular,
                mobile-enabled and cloud-ready technology platform that
                <br />
                allows organizations to deliver business process improvements
                faster, be more focused on business differentiation and
                <br />
                business process innovation, doing so with lower risks.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={openbraTitle}>
        <Container>
          The Openbravo Business Suite offers a comprehensive business
          management solution with built-in ERP, CRM and BI capabilities, which
          can be easily integrated with legacy corporate systems to create
          highly differentiating or innovating solutions or scale up to the
          entire business management. All on a single product. The Openbravo
          Business Suite was launched in mid-last year, replacing the previous
          Openbravo ERP Platform.
        </Container>
      </div>

      <section style={{ marginTop: '5rem' }}>
        <div className="backgroundOpen"></div>
      </section>

      <section style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <Feature />
      </section>

      <section>
        <div className="backgroundOpenS"></div>
      </section>
      <section>
        <Container>
          <h1
            style={{
              textAlign: 'center',
              color: '#5f6062',
              marginTop: '5rem',
              fontFamily: '600',
              fontSize: '3rem',
            }}
          >
            Do you have any questions?
          </h1>
          <div style={{ textAlign: 'center' }}>
            <strong style={strongH3}>
              Let us help you to choose the right edition for your business
            </strong>
          </div>
          <hr style={heading} />
        </Container>
      </section>
      <Container style={{ marginBottom: '3rem' }}>
        <Row>
          <Col>
            <div>
              <h3>
                <strong
                  style={{
                    fontWeight: 'bold',
                    fontFamily: 'Miriam Libre ',
                    fontSize: '29px',
                  }}
                >
                  Request for a demo and one of our guys will contact you!
                </strong>
              </h3>
            </div>
            <div>
              <Form
                className="neeeds-validation"
                onSubmit={formik.handleSubmit}
              >
                <Col md>
                  <Form.Group className="was-validated">
                    <Form.Label>
                      <strong style={{ fontWeight: 'bold' }}> Name</strong>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Full Name here"
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

                  <Form.Group className="was-validated">
                    <Form.Label>
                      <strong style={{ fontWeight: 'bold' }}> Company</strong>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Company Name"
                      name="company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="was-validated">
                    <Form.Label>
                      <strong style={{ fontWeight: 'bold' }}> Telephone</strong>
                    </Form.Label>
                    <Form.Control
                      placeholder="e.g. 070x-xxx-xx-xx"
                      type="phonenumber"
                      required
                      name="telephone"
                      onBlur={formik.handleBlur}
                      value={formik.values.telephone}
                      onChange={formik.handleChange}
                    />
                    <div className="invalid-feedback">
                      <span style={{ color: 'red' }}>
                        {formik.touched.telephone && formik.errors.telephone
                          ? formik.errors.telephone
                          : ''}
                      </span>
                    </div>
                  </Form.Group>
                  <Form.Group className="was-validated">
                    <Form.Label>
                      <strong style={{ fontWeight: 'bold' }}>
                        Email Address
                      </strong>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="e.g. john.smith@example.com"
                      required
                      name="email"
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    <div className="invalid-feedback">
                      <span style={{ color: 'red' }}>
                        {formik.touched.email && formik.errors.email
                          ? formik.errors.email
                          : ''}
                      </span>
                    </div>
                  </Form.Group>
                </Col>
                <Button
                  type="submit"
                  variant="primary"
                  style={{ width: '100%', marginTop: '12px' }}
                >
                  submit
                </Button>
              </Form>
            </div>
          </Col>
          <Col>
            <div>
              <img src={prod} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default OpenbravoERP;
