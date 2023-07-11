import { Container, Breadcrumb } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ResumesList from './ResumesList';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const style = {
  marginTop: '20px',
  marginBottom: '5rem',
  border: 0,
};

function Resumes() {
  const navigate = useNavigate();
  const userSiginin = useSelector((state) => state.userSignin);
  const { userInfo } = userSiginin;

  useEffect(() => {
    if (!userInfo) {
      navigate('/signin');
    }
  }, []);
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
          Resumes
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
            <Breadcrumb.Item active>Resumes </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>

      <Container>
        <hr style={style} />
      </Container>
      <Container>
        <ResumesList />
      </Container>
    </>
  );
}

export default Resumes;
