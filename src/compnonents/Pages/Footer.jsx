import { Col, Container, Row } from 'react-bootstrap';
import linkend from '../../assets/045.png';
import facabook from '../../assets/052.png';
import twitter from '../../assets/047.png';

const Footer = () => {
  const style = {
    // color: 'rgb(4, 4, 244)',
    // fontSize: '30px',
    // padding: 2,
    // cursor: 'pointer',
    height: '32px',
    margin: '0 5px',
  };

  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <div>
        <Container style={{ borderTop: 'solid 2px blue' }}>
          <Row>
            <Col style={{ textAlign: 'start' }}>
              <p>
                <strong>© {year} TEQBRIDGE LIMITED.</strong>
              </p>
            </Col>
            <Col style={{ textAlign: 'end', marginTop: '1rem' }}>
              <a
                href="https://www.linkedin.com/company/teqbridge-limited"
                target="new"
              >
                <img src={linkend} alt="" style={style} />
              </a>
              <a href="https://twitter.com/Teqbridge" target="new">
                <img src={twitter} alt="" style={style} />
              </a>
              <a href="https://www.facebook.com/teqbridgelimited" target="new">
                <img src={facabook} alt="" style={style} />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
