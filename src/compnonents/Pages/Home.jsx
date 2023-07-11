import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import Carouel from '../Pages/Carouel/Slider';
import aumentum from '../../assets/005.png';
import gis from '../../assets/009.jpg';
import esri from '../../assets/007.png';
import software from '../../assets/008.jpg';
import ebu from '../../assets/010.jpg';
import './Home.css';
import { Link } from 'react-router-dom';
import Proudction from '../proudction';

import LastestPublication from './LastestPublication';

const Home = () => {
  const imageStyle = {
    borderRadius: '118px',
    padding: '12px',
    marginLeft: '6rem',
    width: '54%',
  };

  return (
    <>
      <section>
        <Carouel />
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '4rem',
                }}
              >
                <img src={aumentum} alt="" style={{ height: '91px' }} />
                <img
                  src={esri}
                  alt=""
                  style={{ paddingLeft: '2rem', height: '91px' }}
                />
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    borderBottom: 'solid 1px blue',
                    marginBottom: '5rem',
                  }}
                ></div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container style={{ textAlign: 'center' }}>
          <Row>
            <Col sm={4}>
              <div>
                <Card
                  style={{
                    width: '24rem',
                    background: 'skyblue',
                    textAlign: 'center',
                    padding: '12px',
                  }}
                >
                  <Card.Img variant="top" src={software} style={imageStyle} />
                  <Card.Body>
                    <Card.Title>
                      Software <br /> Development
                    </Card.Title>
                    <Card.Text>
                      Our Sun Certified Java developers and architects design
                      and develop n-Tier Enterprise Applications using J2EE. Our
                      Java practice team has expertise in industry standard
                      tools, and follows a rapid application development
                      methodology that is CMM Level 5 compliant.
                    </Card.Text>
                    <Button
                      className="btn btn-primary btn-sm"
                      variant="primary"
                      style={{
                        color: '#fff',
                        background: '#337ab7',
                        borderColor: '#2e6da4',
                      }}
                    >
                      <Link
                        to="/Software development"
                        style={{ color: 'white', textDecoration: 'none' }}
                      >
                        View details »
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div>
                <Card
                  style={{
                    width: '24rem',
                    background: '#D1EEFC',
                    padding: '12px',
                  }}
                >
                  <Card.Img variant="top" src={gis} style={imageStyle} />
                  <Card.Body>
                    <Card.Title>
                      GIS Technology <br />
                      Implementation
                    </Card.Title>
                    <Card.Text>
                      Teqbridge implements Thomson Reuters' AUMENTUM which
                      simplifies revenue management lifecycle for governments
                      around the world. Our unique combination of technology
                      enhanced by deep experience enables governments to
                      optimize revenue, sustain growth and improve public
                      services.
                    </Card.Text>
                    <Button
                      className="btn btn-primary btn-sm"
                      variant="primary"
                      style={{
                        color: '#fff',
                        background: '#337ab7',
                        borderColor: '#2e6da4',
                      }}
                    >
                      <Link
                        to="/GIS Techology & Property Valuation"
                        style={{ color: 'white', textDecoration: 'none' }}
                      >
                        View details »
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div>
                <Card
                  style={{
                    width: '24rem',
                    background: '#E0F8D8',
                    padding: '12px',
                  }}
                >
                  <Card.Img variant="top" src={ebu} style={imageStyle} />
                  <Card.Body>
                    <Card.Title>
                      E-Business & <br />
                      IT Consulting
                    </Card.Title>
                    <Card.Text>
                      We also offer IT consulting by helping organization
                      streamline their processes and improve efficiencies
                      through the design and implementation of cost-effective
                      E-business solutions. Using different implementation
                      methodologies, we can help maximize IT investments.
                    </Card.Text>
                    <Button
                      className="btn btn-primary btn-sm"
                      variant="primary"
                      style={{
                        color: '#fff',
                        background: '#337ab7',
                        borderColor: '#2e6da4',
                      }}
                    >
                      <Link
                        to="/E Business & IT Consulting"
                        style={{ color: 'white', textDecoration: 'none' }}
                      >
                        View details »
                      </Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <div className="about-home">
                <p className="solution"> </p>
                <h1 className="about-providing">
                  ...providing integrated end-to-end solutions, <br />
                  government and businesses’ need to efficiently manage
                  <br />
                  and deliver information anytime, anywhere.
                </h1>

                <p className="solution">
                  As a solution-inspired company we offer our clients infinite
                  possibilities of using Information Technology to grow their
                  <br />
                  businesses. In this world of real-time enterprises, our
                  solutions connect people to business processes.
                </p>
                <p style={{ textAlign: 'start' }}>
                  <Button
                    className="btn btn-primary btn-large"
                    variant="primary"
                  >
                    <Link
                      to="/About"
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      About Us »
                    </Link>
                  </Button>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ marginTop: '6rem' }}>
        <Proudction />
      </section>

      <section style={{ marginTop: '-2rem', marginBottom: '2rem' }}>
        <LastestPublication />
      </section>
    </>
  );
};

export default Home;
