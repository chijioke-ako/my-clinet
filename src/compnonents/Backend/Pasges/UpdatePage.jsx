import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Api from '../../Helper/Api';
import { toast } from 'react-toastify';
import {
  Breadcrumb,
  Button,
  Col,
  Container,
  FloatingLabel,
  Row,
  Form,
} from 'react-bootstrap';
import JoditEditor from 'jodit-react';

const style = {
  marginTop: '20px',
  marginBottom: '20px',
  border: 0,
};

const config = {
  placeholder: ' Body letter.......',
  limitWords: '450',
};

function UpdatePage() {
  const editor = useRef(null);
  const { id } = useParams();
  const history = useNavigate();

  const initialValues = {
    title: '',
    sub_title: '',
    author: '',
    feature_image_caption: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [feature_image, setFeature_image] = useState('');

  const [body, setBody] = useState('');

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    setFeature_image(e.target.files[0]);
  };

  useEffect(() => {
    if (id) {
      getPublication(id);
    }
  }, [id]);

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSuccess) {
    }
  }, [formErrors]);

  const getPublication = async (id) => {
    try {
      const response = await Api.get(`/publications/${id}`);
      setFormValues({ ...response.data.data.publications });
      setBody(response.data.data.publications.body);
    } catch (err) {
      // not in 200 response range
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSuccess(true);

    const fd = new FormData();

    fd.append('feature_image', feature_image);

    fd.append('title', formValues.title);
    fd.append('sub_title', formValues.sub_title);
    fd.append('feature_image_caption', formValues.feature_image_caption);
    fd.append('author', formValues.author);
    fd.append('body', body);

    const response = await Api.put(`/publications/${id}`, fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).catch((err) => {
      if (err && err.response) console.log('Error: ', err);
    });
    if (response) {
      toast.success(response.data.status);
    }

    history('/HomeB/PublicationB');
    setBody('');
  };

  const validate = (values) => {
    // const MIN_FILE_SIZE = 1024; // 1MB

    const errors = {};
    if (!values.title) {
      errors.title = 'Please enter title !';
    } else if (values.title.length < 4) {
      errors.title = 'must be more 4 characters';
    }

    if (!values.author) {
      errors.author = 'Please enter author !';
    } else if (values.author.length < 4) {
      errors.author = 'must be more 4 characters';
    }
    if (!values.feature_image) {
      errors.feature_image = 'Please choose a file !';
    }
    const fileSizeKiloBytes = values.feature_image.size / 1024;

    if (fileSizeKiloBytes && values.feature_image.size) {
      errors.errors = 'File size is less than minimum limit';
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
            // fontFamily: ['Miriam Libre ', 'sans-serif'],
          }}
        >
          Publications
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
            <Breadcrumb.Item active>Publications</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
      <Container></Container>
      <Container>
        <hr style={style} />
      </Container>
      <Container>
        <Form className="neeeds-validation" onSubmit={handleSubmit}>
          <Row>
            <Col md>
              <Form.Group className="was-validated">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title of Publication"
                  required
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                />
                <span style={{ color: 'red' }}>{formErrors.title}</span>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group>
                <Form.Label>Caption</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter sub-title of publication"
                  required
                  name="sub_title"
                  value={formValues.sub_title}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md>
              <Form.Group className="was-validated">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Publisher's Name"
                  required
                  name="author"
                  value={formValues.author}
                  onChange={handleChange}
                />
                <span style={{ color: 'red' }}>{formErrors.author}</span>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="was-validated">
                <Form.Label>Feature Image</Form.Label>
                <Form.Control
                  type="file"
                  id="customFile"
                  name="feature_image"
                  onChange={handleFileChange}
                  placeholder="enter sub-title of publication"
                  required
                  style={{ height: '32px' }}
                />
                <span style={{ color: 'red', fontSize: '11px' }}>
                  Upload image of dimension 850 x 490px for optimum resolution.
                </span>

                <div>
                  <span style={{ color: 'red' }}>
                    {formErrors.feature_image}
                  </span>
                </div>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Label>Image Caption</Form.Label>

              <FloatingLabel
                controlId="floatingTextarea"
                // label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  name="feature_image_caption"
                  value={formValues.feature_image_caption}
                  onChange={handleChange}
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row>
            <Col md>
              <div
                style={{
                  fontWeight: 'bold',
                  marginRight: '73rem',
                  marginTop: '2rem',
                }}
              >
                <label>
                  Body
                  <span style={{ color: 'red', fontWeight: 'bold' }}>*</span>
                </label>
              </div>

              <JoditEditor
                ref={editor}
                value={body}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onChange={(newContent) => setBody(newContent)}
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
        </Form>
      </Container>
      <br />
    </>
  );
}

export default UpdatePage;
