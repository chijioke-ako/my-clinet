import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import { Link } from 'react-router-dom';
import Tweets from '../../Helper/Tweets';
import PublicationDatabase from '../../Backend/Pasges/PublicationDatabase';

const style = {
  // padding: '5px 0 5px 10px',
  fontSize: '24px',
  marginTop: '-15px',
  borderLeft: 'solid 12px #E1F0FF',
  fontWeight: 'bold',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '82%',
};

function AboutUs() {
  return (
    <>
      <div className="jumbotron-banner">
        <div className="about-us-background">
          <div
            style={{
              color: 'white',
              padding: '4rem',
              fontFamily: ['Miriam Libre '].join(','),
            }}
          >
            <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>About us</div>
            One Company. One Team. One Goal.
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col sm={8}>
            <div
              style={{
                backgroundColor: '#E1F0FF',
                marginBottom: '20px',
                marginTop: '-13px',
                borderRadius: '9px',
                paddingTop: '4px',
                paddingLeft: '12px',
                height: '2rem',
                // paddingBottom: '1px',
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

            <div
              style={{
                fontFamily: [
                  'ubunturegular',
                  'open_sansregular',
                  'OpenSans - Regular',
                  'Helvetica Neue',
                  'Helvetica',
                  'Arial',
                  'sans - serif',
                ].join(','),
                fontSize: '13px',
                fontWeight: 'bold',
              }}
            >
              <p>
                TEQBRIDGE LIMITED was founded as a privately owned Information
                Technology company providing integrated end-to-end solutions,
                government and businesses’ need to efficiently manage and
                deliver information anytime, anywhere. Our core competencies are
                in the areas of Software Development, Software Implementation &
                Support, GIS & Property Valuation Implementation and E-business
                & IT Consulting.
              </p>
              <p>
                As a solution-inspired company we offer our clients infinite
                possibilities of using Information Technology to grow their
                businesses. In this world of real-time enterprises, our
                solutions connect people to business processes.
              </p>
              <p>
                What we stand for can be located around the following core
                values:
              </p>
              <ul>
                <li>To ensure outstanding customer satisfaction</li>
                <li>
                  That our employees are our greatest assets - they must be
                  empowered to innovate, self-improve and share in our success
                </li>
                <li>
                  To promote fanatical pursuit of service excellence and quality
                </li>
                <li>To contribute to the good cause of the community</li>
              </ul>
              <p>
                TEQBRIDGE overall strategy is focused on achieving a primary
                objective of becoming Nigeria’s foremost Information Technology
                solutions and services supplier.
              </p>
              <h3>Our Business Strategy</h3>
              <p>Our current strategy is summarised as follows:</p>
              <ul>
                <li>
                  Empower small and medium scale enterprises through the
                  deployment of solutions that will assist them rev-up
                  productivity and enhance efficiency
                </li>
                <li>
                  Enable large organisations maximise the flexibility,
                  reach-ability and effectiveness of its potential through
                  unrivalled system and application integration and support
                </li>
                <li>
                  Extend existing and future services to the public sector given
                  the resolve of the Federal and State Governments to improve
                  efficiency and responsiveness especially in the light of the
                  current government sweeping reforms.
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={4}>
            <div style={style}>Latest Publication</div>

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
    </>
  );
}

export default AboutUs;
