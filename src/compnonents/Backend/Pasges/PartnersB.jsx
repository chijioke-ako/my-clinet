import { Container, Breadcrumb } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PartenrList from './PartenrList';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const style = {
  marginTop: '20px',
  marginBottom: '20px',
  border: 0,
};

function PartnersB() {
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
          Global Partners
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
            <Breadcrumb.Item active>Global Partners</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </Container>

      <Container>
        <hr style={style} />
      </Container>
      <Container>
        <div className="md-2">
          <PartenrList />
        </div>
      </Container>
    </>
  );
}

export default PartnersB;
