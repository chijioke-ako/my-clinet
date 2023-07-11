import { useEffect, useState } from 'react';
import Api from '../../Helper/Api';
import { Breadcrumb, Button, Container, ListGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const style = {
  marginTop: '20px',
  marginBottom: '20px',
  border: 0,
};

function ViewUsers() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPublication(id);
    }
  }, [id]);

  const getPublication = async (id) => {
    try {
      const response = await Api.get(`/users/${id}`);
      setUsers(response.data);
    } catch (err) {
      // not in 200 response range
      //  setError(err.message);
      console.log(err, err);
    }
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
            fontFamily: ['Miriam Libre ', 'sans-serif'],
          }}
        >
          Users
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
            <Breadcrumb.Item active> Users</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>
      <Container>
        <hr style={style} />
      </Container>
      <Container>
        <div style={{ width: '50%' }}>
          <ListGroup>
            <ListGroup.Item>
              <strong>First name:</strong> {users.firstname}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Last name:</strong> {users.lastname}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Email:</strong> {users.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Role:</strong> {users.role}
            </ListGroup.Item>
          </ListGroup>
        </div>
        <Button>
          <Link
            to="/HomeB/usersDetails"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            back to users Users
          </Link>
        </Button>
      </Container>
      <br />
    </>
  );
}

export default ViewUsers;
