import { Link } from 'react-router-dom';
import Tweets from '../Helper/Tweets';
import './Software.css';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';
import soft from '../../assets/023.jpg';
const style = {
  fontSize: '24px',
  marginTop: '1rem',
  borderLeft: 'solid 12px #E1F0FF',
  fontWeight: 'bold',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};

function Software() {
  return (
    <>
      <br /> <br /> <br />
      <div className="software-background">
        <h1 className="software">Software Development</h1>
      </div>
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <div
                style={{
                  backgroundColor: '#E1F0FF',
                  marginBottom: '20px',
                  marginTop: '1rem',
                  borderRadius: '9px',
                  paddingTop: '4px',
                  paddingLeft: '12px',
                  height: '2rem',
                }}
              >
                <div>
                  <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/Home' }}>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Services</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                      Software Development
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: ['Miriam Libre ', 'sans - serif'].join(','),
                    fontWeight: '-moz-initial',
                  }}
                >
                  From the data modelling perspective TEQBRIDGE plans, designs,
                  and implements efficient data models. We develop customized
                  solutions for key industries, and offer expertise in
                  implementing strategies that ensure data integrity, security,
                  data recovery, and optimization of computing resources. We
                  design complete client/server and web solutions using various
                  suites of tools, including application development tools,
                  platforms, and databases. We utilize these suites of tools to
                  provide robust end-to-end solutions providing the ability and
                  technology to support diverse solutions, such as e-Commerce,
                  Business Intelligence, Knowledge Management, Mobility, and
                  Productivity.
                </p>
                <Row>
                  <Col sm={8}>
                    <p>
                      TEQBRIDGE’s Sun Certified Java developers and architects
                      design and develop n-Tier Enterprise Applications using
                      J2EE. We provide architectural and development services,
                      and also mentor our clients in the use of Java and related
                      APIs. Our Java practice team has expertise in industry
                      standard tools, and follows a rapid application
                      development methodology that is CMM Level 3 compliant.
                    </p>
                    <p>
                      We use structural design patterns for mission critical
                      applications and Tag Library for Rapid Application
                      Development. Additionally, we provide support for
                      developing infrastructure components such as Business
                      Process Wizards, Tickler/Reminder Services, and Dynamic
                      Form Generator, and for PDA and WAP applications.
                    </p>
                  </Col>

                  <Col sm={4}>
                    <img
                      src={soft}
                      alt="software"
                      style={{
                        height: '25vh',
                        width: '90%',
                        padding: '5px',
                        backgroundColor: '#fff',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        webkitTransition: 'all .2s ease-in-out',
                        oTransition: 'all .2s ease-in-out',
                        transition: 'all .2s ease-in-out',
                      }}
                    />
                  </Col>
                  <p>
                    At Teqbridge we have abundant skills in Microsoft .NET
                    technologies. Teqbridge's Microsoft Certified Solution's
                    Developers (MCSDs) specialize in building business centric
                    application on the Microsoft .Net Framework. Our services
                    take care of formal business requirement analysis, business
                    process re-engineering, architectural definition,
                    development, quality assurance and implementation of
                    enterprise software. We make use of the standard
                    Model-View-Controller (MVC) architecture which makes our
                    software scalable on different platforms (including the
                    Cloud) and integration to existing software quite seamless.
                  </p>
                </Row>
              </div>
            </Col>
            <Col sm={4}>
              <div style={style}>
                <h4 style={{ marginLeft: '1rem', fontWeight: 'bold' }}>
                  Latest Publication
                </h4>
              </div>
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
      </div>
    </>
  );
}

export default Software;
