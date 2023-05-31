import {
  Container,
  Breadcrumb,
  Row,
  Col,
  Button,
  Form,
  FloatingLabel,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { useState } from 'react';
import { useFormik } from 'formik';
import JoditEditor from 'jodit-react';
import * as Yup from 'yup';
import Api from '../../Helper/Api';
import { toast } from 'react-toastify';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const style = {
  marginTop: '20px',
  marginBottom: '20px',
  border: 0,
};

const editor = {
  width: '57rem',
  margin: '0rem auto',
  marginRight: '30rem',
};

const validationSchame = Yup.object().shape({
  title: Yup.string()
    .min(5, 'Please enter you at list 5 character')
    .required('Please enter you, Title is required !'),
  author: Yup.string()
    .min(3, 'Please enter your name')
    .required('author is required !'),
  feature_image: Yup.mixed()
    .nullable()
    .required()
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
  placeholder: 'write Profile.....',
  limitWords: '450',
};

function PublicationAdd({ initialValue }) {
  const history = useNavigate();
  const [body, setBody] = useState(initialValue ?? '');

  const onSubmit = async (values) => {
    formik.resetForm();
    const formData = new FormData();
    formData.append('title', formik.values.title);
    formData.append('sub_title', formik.values.sub_title);
    formData.append('author', formik.values.author);
    formData.append('feature_image', formik.values.feature_image);
    formData.append(
      'feature_image_caption',
      formik.values.feature_image_caption
    );
    formData.append('body', body);
    const response = await Api.post('/publications', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).catch((err) => {
      if (err && err.response) console.log('Error: ', err);
    });
    if (response) {
      toast.success(response.data.status);
    }

    history('/HomeB/ViewAllPublication');
    setBody('');
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      sub_title: '',
      author: '',
      feature_image: '',
      feature_image_caption: '',
    },
    onSubmit,
    validateOnBlur: true,
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
      <Container>
        <Button style={{ background: '#337ab7', height: '34px' }}>
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            to="/HomeB/ViewAllPublication"
          >
            <FaAngleLeft />
            View All Publication
          </Link>
        </Button>
      </Container>

      <Container>
        <hr style={style} />
      </Container>

      <Container>
        <Form className="neeeds-validation" onSubmit={formik.handleSubmit}>
          <Row>
            <Col md>
              <Form.Group className="was-validated">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title of Publication"
                  required
                  name="title"
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <div className="invalid-feedback">
                  <span style={{ color: 'red' }}>
                    {formik.touched.title && formik.errors.title
                      ? formik.errors.title
                      : ''}
                  </span>
                </div>
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
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
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <div className="invalid-feedback">
                  <span style={{ color: 'red' }}>
                    {formik.touched.author && formik.errors.author
                      ? formik.errors.author
                      : ''}
                  </span>
                </div>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="was-validated">
                <Form.Label>Feature Image</Form.Label>
                <Form.Control
                  type="file"
                  id="customFile"
                  name="feature_image"
                  onChange={(event) => {
                    formik.setFieldValue(
                      'feature_image',
                      event.target.files[0]
                    );
                  }}
                  placeholder="enter sub-title of publication"
                  required
                  style={{ height: '32px' }}
                />
                <span style={{ color: 'red', fontSize: '11px' }}>
                  Upload image of dimension 850 x 490px for optimum resolution.
                </span>
                <div>
                  <span style={{ color: 'red' }}>
                    {formik.touched.feature_image && formik.errors.feature_image
                      ? formik.errors.feature_image
                      : ''}
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
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
    </>
  );
}

export default PublicationAdd;
