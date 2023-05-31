import { useNavigate, useParams, Link } from 'react-router-dom';
import Api from '../../Helper/Api';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight, FaPen } from 'react-icons/fa';

const style = {
  marginTop: '20px',
  marginBottom: '20px',
  border: 0,
};

function PublicationView() {
  const [publications, setPublications] = useState([]);
  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPublication(id);
    }
  }, [id]);

  const getPublication = async (id) => {
    try {
      const response = await Api.get(`/publications/${id}`);
      setPublications(response.data.data.publications);
      console.log(response);
    } catch (err) {
      // not in 200 response range
      //  setError(err.message);
      console.log(err, err);
    }
  };

  const handleUpdate = async (e, id) => {
    e.stopPropagation();
    history(`/HomeB/publication/${id}/Update`);
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
            <Breadcrumb.Item active> {publications.title}</Breadcrumb.Item>
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
        <Button
          style={{
            background: '#337ab7',
            height: '34px',
            marginLeft: '0.5rem',
          }}
        >
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            to="/HomeB/ViewAllPublication"
          >
            <FaPen />
            Edit
          </Link>
        </Button>
      </Container>
      <Container>
        <hr style={style} />
      </Container>
      <Container>
        <h5 style={{ fontWeight: 'bold' }}>Publication Title.</h5>

        <h3>{publications.title}</h3>
      </Container>
      <Container>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
        </Row>
      </Container>
      <div>
        {/* {publications.map((item, index) => (
          <div key={index}>
            <div>{item.sub_title}</div>
          </div>
        ))} */}
      </div>
      {publications.body}PublicationView
    </>
  );
}

export default PublicationView;
