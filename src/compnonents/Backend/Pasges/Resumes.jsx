import { Container, Breadcrumb, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ResumesList from './ResumesList';

const style = {
  marginTop: '20px',
  marginBottom: '5rem',
  border: 0,
};

function Resumes() {
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
