import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from 'react-bootstrap';
import './Caress.css';
import Tweets from '../../Helper/Tweets';
import { Link } from 'react-router-dom';
import PublicationDatabase from '../../Backend/Pasges/PublicationDatabase';
import JoditEditor from 'jodit-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import Api from '../../Helper/Api';

const SUPPORTED_FORMATS = [
  // 'image/jpg',
  // 'image/jpeg',
  // 'image/png',
  'application/pdf',
];

const style = {
  fontSize: '24px',
  marginTop: '-15px',
  borderLeft: 'solid 12px #E1F0FF',
  fontWeight: 'bold',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};

const validationSchame = Yup.object({
  surname: Yup.string()
    .min(5, 'Please enter you at list 5 character')
    .required('surnname is required !'),
  firstname: Yup.string()
    .min(3, 'Please enter your name')
    .required('firstname is required !'),
  email: Yup.string().email().required(),
  resume: Yup.mixed()
    .nullable()
    .required('Please upload a pdf only!')
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
  placeholder: ' Cover letter.......',
  limitWords: '450',
  maxWidth: '600',
};

const uploadTile = {
  margin: '0 20px',
  lineHeight: '1.5',
  fontFamily: ['Miriam Libre ', 'sans-serif'].join(','),
  fontWeight: 'initial',
  fontSize: '16px',
};

const resumupload = {
  border: 'solid thin #eee',
  borderRadius: '0 0 25px 25px',
  textAlign: 'center',
  backgroundColor: ' #fafafa',
  width: '16rem',
};

function Careers() {
  const [toggle, setToggle] = useState(false);

  const editor = useRef(null);
  const [coverletter, setCoverletter] = useState('');

  const onSubmit = async (values) => {
    formik.resetForm();

    const formData = new FormData();

    formData.append('surname', formik.values.surname);
    formData.append('firstname', formik.values.firstname);
    formData.append('email', formik.values.email);
    formData.append('resume', formik.values.resume);
    formData.append('coverletter', coverletter);

    const response = await Api.post('/resume', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).catch((err) => {
      if (err && err.response) console.log('Error: ', err);
    });
    if (response) {
      toast.success(response.data.status);
    }
    setCoverletter('');
  };

  const formik = useFormik({
    initialValues: {
      surname: '',
      firstname: '',
      email: '',
      resume: null,
    },

    onSubmit,

    validationSchema: validationSchame,
  });

  const handleRest = (values) => {
    formik.resetForm();
    setCoverletter('');
  };

  return (
    <>
      <div className="jumbotron-banner">
        <div className="careers-background">
          <div
            style={{
              textAlign: 'start',
              padding: '3rem',
            }}
          >
            <div>
              <h3
                style={{
                  padding: '12px',
                  fontWeight: 'bold',
                  fontSize: '3rem',
                }}
              >
                Careers
              </h3>
            </div>
            <p style={{ width: '55%', fontSize: '20px' }}>
              Success lies in the combination of both talent and business savvy,
              and the magic comes through partnership between both.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <div
                style={{
                  backgroundColor: '#E1F0FF',
                  marginBottom: '20px',
                  marginTop: '-13px',
                  borderRadius: '9px',
                  paddingTop: '4px',
                  paddingLeft: '12px',
                  height: '2rem',
                }}
              >
                <div>
                  <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/Home' }}>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Company</Breadcrumb.Item>
                    <Breadcrumb.Item active>Careers </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>

              <div>
                <Container>
                  <p>
                    Teqbridge Limited is growing, and we're seeking top-notch
                    talent to join our team of highly skilled and energetic
                    engineers, developers, experts and personnel. We use
                    state-of the-art technology and have a passion for
                    excellence, innovation and community participation. As a
                    member of our core team, you will have a rare opportunity to
                    use and expand your skills in creative ways.
                  </p>
                  <p>
                    Teqbridge Limited offers competitive benefits, as well as an
                    industry-leading practice of performance-based bonuses for
                    all employees. We believe that global innovation demands
                    diverse employees and attractive work/life initiatives that
                    sustain, and retain, them. Teqbridge Limited gives you the
                    power to design your workday, and your life, according to
                    your unique styles and needs.
                  </p>
                  <Row>
                    <Col sm={4}>
                      <Card style={resumupload}>
                        <h1 style={{ fontSize: '49px', fontWeight: '700' }}>
                          No current Vacancy Now!
                        </h1>
                        <p style={uploadTile}>
                          However, you may upload you resume for furture
                          consideration. Goodluck!
                        </p>
                        <a
                          className="upload_image"
                          onClick={() => setToggle(!toggle)}
                        ></a>
                      </Card>
                    </Col>
                    {toggle && (
                      <Col sm={8}>
                        <Form
                          className="neeeds-validation"
                          onSubmit={formik.handleSubmit}
                        >
                          <Row>
                            <Col md>
                              <Form.Group className="was-validated">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Surname"
                                  name="surname"
                                  value={formik.values.surname}
                                  onChange={formik.handleChange}
                                  required
                                  onBlur={formik.handleBlur}
                                />
                                <div className="invalid-feedback">
                                  <span style={{ color: 'red' }}>
                                    {formik.touched.surname &&
                                    formik.errors.surname
                                      ? formik.errors.surname
                                      : ''}
                                  </span>
                                </div>
                              </Form.Group>

                              <Form.Group className="was-validated">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="firstname"
                                  required
                                  name="firstname"
                                  onBlur={formik.handleBlur}
                                  value={formik.values.firstname}
                                  onChange={formik.handleChange}
                                />
                                <div className="invalid-feedback">
                                  <span style={{ color: 'red' }}>
                                    {formik.touched.firstname &&
                                    formik.errors.firstname
                                      ? formik.errors.firstname
                                      : ''}
                                  </span>
                                </div>
                              </Form.Group>
                              <Form.Group className="was-validated">
                                <Form.Label>Email Address</Form.Label>
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
                              <Form.Group className="was-validated">
                                <Form.Label>Upload Resumé/CV </Form.Label>
                                <Form.Control
                                  type="file"
                                  id="customFile"
                                  name="resume"
                                  onChange={(event) => {
                                    formik.setFieldValue(
                                      'resume',

                                      event.target.files[0]
                                    );
                                  }}
                                />

                                <div>
                                  <span style={{ color: 'red' }}>
                                    {formik.touched.resume &&
                                    formik.errors.resume
                                      ? formik.errors.resume
                                      : ''}
                                  </span>
                                </div>
                              </Form.Group>
                            </Col>
                          </Row>

                          <Row>
                            <Col md>
                              <div
                                style={{
                                  fontWeight: 'bold',
                                  marginTop: '2rem',
                                }}
                              >
                                <label>
                                  Message/Letter of Intention/Cover Letter
                                  <span
                                    style={{ color: 'red', fontWeight: 'bold' }}
                                  >
                                    *
                                  </span>
                                </label>
                              </div>

                              <JoditEditor
                                ref={editor}
                                value={coverletter}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onChange={(newContent) =>
                                  setCoverletter(newContent)
                                }
                              />
                              <span style={{ color: 'red', fontSize: '11px' }}>
                                Not more then 450 words
                              </span>
                            </Col>
                          </Row>
                          <Button
                            type="submit"
                            variant="primary"
                            style={{ marginBottom: '12px' }}
                          >
                            submit
                          </Button>
                          <Button
                            type="rest"
                            variant="primary"
                            style={{
                              marginBottom: '12px',
                              marginLeft: '1rem',
                            }}
                            onClick={() => handleRest()}
                          >
                            Cancel
                          </Button>
                        </Form>
                      </Col>
                    )}
                  </Row>
                </Container>
              </div>
            </Col>
            <Col sm={4}>
              <div style={style}>
                <h4 style={{ marginLeft: '1rem', fontWeight: 'bold' }}>
                  Latest Publication
                </h4>
              </div>
              <div style={{ width: '86%', marginLeft: '29px' }}>
                <PublicationDatabase />
                <div
                  style={{
                    width: '90%',
                    marginLeft: '120px',
                    textAlign: 'start',
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: '#f4faff',
                      border: ' 1px solid #E1F0FF',
                      padding: '10px 15px',
                      fontSize: ' 11px',
                      marginLeft: '-8rem',
                      marginBottom: '2rem',
                      width: '19rem',
                      textAlign: 'center',
                      fontFamily: ['Miriam Libre '].join(','),
                    }}
                  >
                    <Link to="/Publictions">Click to View publication</Link>
                  </Button>
                </div>
              </div>
              <div style={{ width: '19rem', marginLeft: '29px' }}>
                <Tweets />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Careers;
