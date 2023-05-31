import { Container } from 'react-bootstrap';

const style = {
  marginTop: '20px',
  marginBottom: '5rem',
  border: 0,
};

function HomeB() {
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
          Backend
        </div>
      </Container>

      <Container
        style={{
          backgroundColor: '#E1F0FF',
          marginBottom: '20px',
          marginTop: '20px',
          borderRadius: '5px',
          padding: '7px',
        }}
      >
        <div style={{ paddingLeft: '12px' }}>Home</div>
      </Container>
      <Container>
        <hr style={style} />
      </Container>
    </>
  );
}

export default HomeB;
