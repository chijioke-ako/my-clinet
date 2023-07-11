import './Pcms.css';
import vid from '../../assets/video/Aloha-Mundo.mp4';
import vida from '../../assets/video/Aloha-Mundo.webm';
import { FaAngleRight, FaEnvelope } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Api from '../Helper/Api';
import paper from '../../assets/037.jpg';
import { Link } from 'react-router-dom';

const coverh3pcms = {
  fontWeight: 'bold',
  padding: '20px 10px 0px',
  fontSize: '42px',
  lineHeight: '1',
  fontFamily: ['Miriam Libre ', 'sans-serif'].join(','),
  color: '#ffff',
};

const coverppcms = {
  paddingLeft: '10px',
  fontSize: '20px',
  width: '54%',
  fontFamily: [
    'ubunturegular',
    'open_sansregular',
    'OpenSans - Regular',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans - serif',
  ].join(','),
  color: '#ffff',
};

const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const validationSchame = Yup.object({
  name: Yup.string()
    .min(5, 'Please enter you name at list 5 character')
    .max(50, 'Too Long!')
    .required(' Name is required !'),
  email: Yup.string().email('Invalid email').required('Please enter  email'),
  telephone: Yup.string()
    .required('Phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(11, 'to short')
    .max(11, 'to long'),
});

function Pcms() {
  const onSubmit = async (values) => {
    formik.resetForm();

    const { name, company, telephone, email } = values;
    const response = await Api.post('/pcms', {
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
      if (err && err.response) console.log('Error: ', err);
    });
    if (res) {
      toast.success(res.data.status);
      console.log(res.data);
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
    validationSchema: validationSchame,
  });
  return (
    <>
      <br /> <br /> <br /> <br />
      <div className="pcms-backgrond">
        <div className="container-v">
          <video width={1499} autoPlay loop muted style={{ width: '100%' }}>
            <source src={vid} type="video/mp4"></source>
            <source src={vida} type="video/webm"></source>
          </video>
          <div className="pmcs-header">
            <h3 style={coverh3pcms}>
              Procurement & Contracts <br /> Management Suite
            </h3>
            <p style={coverppcms}>
              A workflow-driven enterprise application for automation of
              Material requisition, Vendor Registration and Materials Technical
              Query.
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <Container>
        <p style={{ marginTop: '4rem', fontSize: '22px', fontWeight: 'bold' }}>
          PCMS is a web-based electronic workflow solution that automates and
          simplifies material procurement processes, vendor and manufacturer
          registration processes, and finally provides platform for monitoring
          and reporting goods delivered, purchasing orders created, and
          purchasing orders not created.
        </p>
        <p style={{ fontSize: '22px', fontWeight: 'bolder', color: '#666' }}>
          In large corporations, deivisions/departments are responsible for the
          provision of goods and services to the various entities within the
          organization, it not unexpected that the division will be inundated
          with large amount of jobs or services requests that need not just be
          attended to but discharged in efficient and timely manner. In some
          organizations, such processes are done manually by requesting entities
          through the use of paper-based forms which ae then filled by the
          requester and hand-carried from one hierarchy to another until such a
          time the request was either treated or discarded. The resulting
          consequence of such practice was the difficulty in tracking the
          location of the requests during their lifecycles, with complaints that
          internal customers (requesters and their hierarchies) lacked
          information on the progress of their requests and associated orders.
        </p>
        <p
          style={{
            fontSize: '22px',
            fontWeight: 'bolder',
            marginBottom: '7rem',
          }}
        >
          Thus, the need for this evolutionary technology suite... PCMS
        </p>
      </Container>
      <section>
        <div className="backgroundPcms"></div>
      </section>
      <Container>
        <div style={{ textAlign: 'center', marginTop: '7rem' }}>
          <Row>
            <Col sm={6}>
              <img src="ok" alt="" />
              pic
            </Col>
            <Col sm={6}>
              <div>
                <p
                  style={{
                    fontSize: '22px',
                    fontWeight: 'bolder',
                    textAlign: 'start',
                  }}
                >
                  Go through a guided and interactive tour to get a first
                  impression of the product. If you have not yet experimented
                  with our products, we recommend that you{' '}
                  <Link>contact us</Link> to go through this tour first as you
                  will be able to:
                </p>
              </div>
              <p
                style={{
                  textAlign: 'start',
                  color: '#666',
                  fontWeight: 'bolder',
                  fontSize: '17px',
                }}
              >
                <FaAngleRight />
                Have a first hand experience with the product
              </p>
              <p
                style={{
                  textAlign: 'start',
                  color: '#666',
                  fontWeight: 'bolder',
                  fontSize: '17px',
                }}
              >
                <FaAngleRight />
                Explore some of the main product features
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <section style={{ marginTop: '5rem' }}>
        <div className="backgroundPcmsa"></div>
      </section>
      <section style={{ marginTop: '5rem', marginBottom: '3rem' }}>
        <Container>
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
                        <strong style={{ fontWeight: 'bold' }}>
                          Telephone
                        </strong>
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
                <img src={paper} alt="paper" height={300} />
              </div>
              <h4 style={{ marginTop: '2rem' }}>
                <strong>OR you can send us a mail at...</strong>
              </h4>

              <a
                style={{
                  textDecoration: 'none',
                }}
                color="primary"
                href="mailto:wadetiba@teqbridgeltd.com"
              >
                <FaEnvelope style={{ color: 'black' }} />
                wadetiba@teqbridgeltd. com
              </a>
              <br />
              <a
                style={{
                  textDecoration: 'none',
                }}
                color="primary"
                href="mailto:oojekwe@teqbridgeltd.com"
              >
                <FaEnvelope style={{ color: 'black' }} />
                oojekwe@teqbridgeltd.com
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Pcms;
