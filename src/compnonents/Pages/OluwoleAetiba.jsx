import React from 'react';
import { Link } from 'react-router-dom';
import Tweets from '../Helper/Tweets';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';
import social from '../../assets/053.png';
import name from '../../assets/046.png';
import woal from '../../assets/056.jpg';
import In from '../../assets/045.png';
import twer from '../../assets/047.png';

const style = {
  fontSize: '24px',
  marginTop: '-15px',
  borderLeft: 'solid 12px #E1F0FF',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};

function OluwoleAdetiba() {
  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="jumbotron-banner">
          <div className="our-Term-background">
            <div className="about-title">
              <div
                style={{
                  backgroundColor: ' #e1f0ff',
                  display: 'flex',
                  width: '100%',
                  color: 'black',
                  fontFamily: ['Miriam Libre '].join(','),
                }}
              >
                <h2 style={{ fontWeight: 'bold', fontSize: '45px' }}>
                  Oluwole Adetiba
                </h2>
              </div>
              <p
                style={{
                  backgroundColor: 'rgba(0,102,204,0.5)',
                  display: 'inline-block',
                  padding: '5px 30px 5px 15px',
                  fontSize: '20px',
                  color: '#151111',
                  fontWeight: 'inherit',
                  fontFamily: ['Miriam Libre '].join(','),
                }}
              >
                Chief Software Architect.
              </p>
            </div>
          </div>
        </div>
        <Container
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
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
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
                }}
              >
                <div>
                  <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/Home' }}>
                      Home
                    </Breadcrumb.Item>

                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/About' }}>
                      About us
                    </Breadcrumb.Item>
                    <Breadcrumb.Item
                      linkAs={Link}
                      linkProps={{ to: '/OurTeam' }}
                    >
                      The Team
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Oluwole Adetiba</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
              <div
                style={{
                  fontFamily: [
                    'ubunturegular',
                    'open_sansregular',
                    // 'OpenSans - Regular',
                    // 'Helvetica Neue',
                    // 'Helvetica',
                    // 'Arial',
                    'sans - serif',
                  ].join(','),
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                <Container>
                  <div>
                    <img
                      src={woal}
                      alt="woal"
                      style={{
                        border: 'solid thin #ccc',
                        borderRadius: '20px 0',
                      }}
                    />

                    <div>
                      <Container style={{ marginTop: '2rem' }}>
                        <p>
                          Oluwole Adetiba is a seasoned Information Technology
                          consultant of more than 16 years experience. His
                          experience as application architect and developer
                          spanned various industries from Banking, Finance,
                          Telecommunications, Payments, Governments and Lottery.
                          At Teqbridge Limited, Oluwole currently works as the
                          Chief Technical Architect.
                        </p>
                        <p>
                          Oluwole is versed in technologies (open source and
                          proprietary) and their applications for solving
                          business problems. Before he took his current
                          position, Oluwole worked at Royal Bank of Canada (RBC)
                          and Toronto Dominion Bank (TD Bank) before he took his
                          present position. At the banks, he worked on
                          implementation and delivery of different applications
                          among which were multi-channel client delivery using
                          Websphere Portal Server (WPS), development of services
                          and setting up of the Service Oriented Architecture
                          (SOA) infrastructure using Java based technology.
                        </p>
                        <p>
                          He is a process person and skilled in integrating and
                          adapting organization processes to fit into SOA
                          technologies. Oluwole is an Integration expert. He is
                          also an Openbravo ERP specialist. He has worked with
                          different of Application Servers such ( Websphere
                          Application Server, JBoss, Weblogic), Databases
                          (Oracle, Sybase, MS SQL Server, MySQL, Postgres),
                          Process Servers (Websphere Process Server) and
                          Enterprise Service Bus (Mule and ServiceMix), Search
                          Engine (Solr and Lucene), and Enterprise Content
                          Management (Alfresco). He also has GIS experience. He
                          has developed and deployed different applications for
                          Windows, Linux, and Mainframe environments.
                        </p>
                        <p>
                          Although Oluwole is trained and has worked with the
                          IBM Technology stack (IBM Web Server, Websphere
                          Application Server, Tivoli, Websphere Portal Server,
                          DB2 Database, Websphere Process Server, IBM Data Power
                          and others, presently at Teqbridge Limited, Oluwole
                          focuses on leveraging open-source solutions for
                          solving IT related problems for businesses and
                          organizations. He oversees all the software
                          development efforts at the company.
                        </p>
                        <p>
                          Oluwole studied Computer Science with Economics at
                          Obafemi Awolowo University, Ile Ife and graduated with
                          First Class Honors. He has certifications in various
                          IBM technology stack such as Websphere Portal
                          Development, Websphere Application Server
                          Administration, Websphere Portal Server Administration
                          and Deployment. He is a Sun Certified Java Developer
                          and Programmer. He is also an Openbravo Certified
                          Profession.
                        </p>

                        <>
                          <img
                            src={social}
                            alt="social"
                            style={{ width: '2%' }}
                          />
                          <span style={{ color: '#bbb', marginLeft: '5px' }}>
                            wadetiba@teqbridgeltd.com
                          </span>
                        </>
                        <h1></h1>
                        <>
                          <img
                            src={In}
                            alt="In"
                            style={{
                              width: '2%',
                              color: '#bbb',
                            }}
                          />
                          <span
                            style={{
                              color: '#bbb',
                              marginLeft: '5px',
                            }}
                          >
                            <Link
                              color="inherit"
                              href="http://ca.linkedin.com/pub/wole-adetiba/2/292/449"
                            >
                              Oluwole Adetiba
                            </Link>
                          </span>
                        </>
                        <h1></h1>
                        <>
                          <img
                            src={name}
                            alt="name"
                            style={{
                              width: '2%',
                              color: '#bbb',
                            }}
                          />
                          <span
                            style={{
                              color: '#bbb',
                              marginLeft: '5px',
                            }}
                          >
                            wadetiba
                          </span>
                        </>
                        <h1></h1>
                        <>
                          <img
                            src={twer}
                            alt="twer"
                            style={{
                              width: '2%',
                              color: '#bbb',
                            }}
                          />
                          <span
                            style={{
                              color: '#bbb',
                              marginLeft: '5px',
                            }}
                          >
                            <Link
                              color="inherit"
                              href="https://twitter.com/WoleAdetiba"
                            >
                              wadetiba
                            </Link>
                          </span>
                        </>
                      </Container>
                    </div>
                  </div>
                </Container>
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

export default OluwoleAdetiba;
