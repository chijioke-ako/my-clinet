import { Breadcrumb, Button, Col, Container, Form, Row } from 'react-bootstrap';
import classes from './contact.module.css';
import Tweets from '../Helper/Tweets';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';
import Map from '../Helper/Map';
import { FaPhone, FaRegEnvelopeOpen } from 'react-icons/fa';
import JoditEditor from 'jodit-react';
import { useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Api from '../Helper/Api';
import AppConfig from '../Helper/App.config';

const style = {
  fontSize: '24px',
  marginTop: '1rem',
  borderLeft: 'solid 12px #E1F0FF',
  fontWeight: 'bold',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};
const h5 = {
  fontFamily: ['Miriam Libre ', 'sans-serif'].join(','),
  fontWeight: '700',
  borderBottom: 'solid thin #eee',
  paddingBottom: '16px',
};

const config = {
  placeholder: 'Message....',
  limitWords: '450',
};

const phoneRegExp =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const schema = Yup.object().shape({
  fullname: Yup.string()
    .min(5, 'Please enter you name at list 5 character')
    .max(50, 'Too Long!')
    .required(' Name is required !'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter eg: email@gmail.com'),
  telephone: Yup.string()
    .required('Phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(11, 'to short must be list 11 numbers')
    .max(11, 'to long must be 11 numbers'),
});

function Contact() {
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const editor = useRef(null);
  const reCaptcha = useRef();

  const {
    register,
    handleSubmit,

    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    if (!message) {
      toast.error('Please fill in message box');
      return;
    }

    if (!token) {
      toast.info('You must verify the captcha');
      return;
    }

    const { fullname, telephone, email } = data;

    const response = await Api.post('/contact', {
      fullname,
      telephone,
      email,
      message,
    }).catch((err) => {
      toast.error(response.msg.error);
      if (err && err.response) console.log('Error: ', err);
    });
    if (response) {
      toast.success(response.data.status);
      setMessage('');
      reset({});
    }

    const res = await Api.post('/mailcontact', {
      fullname,
      telephone,
      email,
      message,
    }).catch((err) => {
      if (err && err.res) console.log('Error: ', err);
    });
    if (res) {
      toast.success(res.data.status);
    }

    Api.post('/recap', {
      token,
    });
    try {
      reCaptcha.current.reset();
      setToken('');
    } catch (err) {
      toast.error(err.data.msg);
    }
  };

  return (
    <>
      <div>
        <div className={classes.background}>
          <div
            style={{
              fontWeight: 'bold',
              color: 'white',
              position: 'absolute',
              display: 'block',
              fontFamily: ['Miriam Libre '].join(','),
            }}
          >
            <div
              style={{
                marginTop: '-4rem',
                padding: '10rem',
                color: '#ffff',
              }}
            >
              <h3
                style={{
                  fontSize: '50px',
                  fontFamily: ['Miriam Libre '].join(','),
                  marginLeft: '6rem',
                  color: '#ffff',
                }}
              >
                Contact Us
              </h3>

              <p
                style={{
                  fontSize: '17px',
                  color: '#ffff',
                  padding: '12px',
                  marginLeft: '6rem',
                  fontFamily: ['Miriam Libre '].join(','),
                }}
              >
                Give us a Call or send us an Email. We are always here to help
                out in whatever way you can.
              </p>
            </div>
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
                  marginTop: '1rem',
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
                    <Breadcrumb.Item active>About Teqbridge</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
              <div>
                <Container>
                  <Map />
                </Container>
                <Container>
                  <div
                    style={{
                      marginBottom: '2rem',
                      marginTop: '2rem',
                    }}
                  >
                    <h5 style={h5}>HEAD OFFICE:</h5>
                  </div>
                  <address
                    style={{
                      fontSize: '17px',
                    }}
                  >
                    Suite 400, 3rd & 4th Floor, Edo House
                    <br />
                    Plot 1225, Bishop Oluwole Street
                    <br />
                    Victoria Island, Lagos
                    <br />
                    101241
                    <br />
                    Nigeria.
                    <br />
                    <span
                      style={{
                        lineHeight: '1',
                        fontFamily: 'Glyphicons Halflings',
                      }}
                    >
                      <FaPhone /> Tel: +234 915 558 8080
                    </span>
                    <br />
                    <span>
                      <FaRegEnvelopeOpen /> Email: contactus@teqbridgeltd.com
                    </span>
                  </address>
                  <h3
                    style={{
                      fontFamily: ['Miriam Libre ', 'sans-serif'].join(','),
                      fontWeight: '700',
                    }}
                  >
                    Contact Us Form
                  </h3>
                  <hr
                    style={{
                      marginBottom: '20px',
                      border: 0,
                      borderTop: '1px solid #eee',
                    }}
                  />

                  <div
                    style={{
                      marginLeft: '12px',
                    }}
                  >
                    <Form
                      className="neeeds-validation"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                          Full name
                          <span style={{ color: 'red', fontSize: '17px' }}>
                            *
                          </span>
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="type"
                            required
                            placeholder="Enter Full name"
                            {...register('fullname')}
                          />
                          <span style={{ color: 'red' }}>
                            {errors.fullname?.message}
                          </span>
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label column sm="2">
                          email
                          <span style={{ color: 'red', fontSize: '17px' }}>
                            *
                          </span>
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="email"
                            placeholder="john@gmail.com"
                            {...register('email')}
                            required
                          />{' '}
                          <span style={{ color: 'red' }}>
                            {errors.email?.message}
                          </span>
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label column sm="2">
                          Telephone
                          <span style={{ color: 'red', fontSize: '17px' }}>
                            *
                          </span>
                        </Form.Label>
                        <Col sm="10">
                          <Form.Control
                            type="telephone"
                            required
                            placeholder="Telephone"
                            {...register('telephone')}
                          />
                          <span style={{ color: 'red' }}>
                            {errors.telephone?.message}
                          </span>
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label column sm="2">
                          Massage
                          <span style={{ color: 'red', fontSize: '17px' }}>
                            *
                          </span>
                        </Form.Label>
                        <Col sm="10">
                          <JoditEditor
                            config={config}
                            ref={editor}
                            value={message}
                            onChange={(newContent) => setMessage(newContent)}
                          />
                          <span style={{ color: 'red', fontSize: '11px' }}>
                            Not more then 450 words
                          </span>
                        </Col>
                      </Form.Group>
                      <Form.Group
                        as={Row}
                        className="mb-3"
                        controlId="formPlaintextPassword"
                      >
                        <Form.Label column sm="2">
                          reCaptcha
                          <span style={{ color: 'red', fontSize: '17px' }}>
                            *
                          </span>
                        </Form.Label>
                        <Col sm="10">
                          <ReCAPTCHA
                            sitekey={AppConfig.GOOGLE.reCaptcha}
                            onChange={(token) => {
                              setToken(token);
                            }}
                            onExpired={(e) => setToken('')}
                          />
                        </Col>
                      </Form.Group>

                      <Col>
                        <div className={classes.buttonTag}>
                          <Button
                            type="button"
                            variant="primary"
                            style={{
                              marginBottom: '12px',
                              marginLeft: '2rem',
                            }}
                            onClick={() => {
                              reset();
                            }}
                          >
                            Rest
                          </Button>
                          <Button
                            type="submit"
                            variant="primary"
                            disabled={!isDirty || !isValid} // here
                            style={{
                              marginBottom: '12px',
                            }}
                          >
                            submit
                          </Button>
                        </div>
                      </Col>
                    </Form>
                  </div>
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

export default Contact;
