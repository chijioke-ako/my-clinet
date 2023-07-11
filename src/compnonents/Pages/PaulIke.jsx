import React from 'react';
import Tweets from '../Helper/Tweets';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';
import social from '../../assets/053.png';
import name from '../../assets/046.png';

const style = {
  fontSize: '24px',
  marginTop: '-15px',
  borderLeft: 'solid 12px #E1F0FF',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};

function PaulIke() {
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
                  Paul Ike
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
                Head, Infrastructure & Network Support
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
                    <Breadcrumb.Item active>Paul Ike</Breadcrumb.Item>
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
                      src=""
                      alt="Paul"
                      style={{
                        border: 'solid thin #ccc',
                        borderRadius: '20px 0',
                      }}
                    />

                    <div>
                      <Container style={{ marginTop: '2rem' }}>
                        <p>
                          Paul is a graduate of University of Nigeria, Nsukka
                          with a degree in Computer Science with Statistics.
                          Paul is a Cisco Certified Network Associate, Cisco
                          Certified Network Professional, Microsoft Certified
                          Professional, Microsoft Certified Engineer, Microsoft
                          Certified IT Professional and a Certified Wireless
                          Network Administrator
                        </p>
                        <p>
                          He has about 14 year's experience in operating system
                          and networks. He is also a certified
                          Cisco/Microsoft/Planet 3 Engineer and has worked
                          several companies both in Nigeria and Europe. He is a
                          career driven professional.
                        </p>
                        <p>
                          Paul was trained by Sagem, Paris after his graduation
                          from the University and deployed to oversee the
                          National Identity card project in his Local Government
                          Area. He has worked for Direct-On PC and Netcom as a
                          supervisor.
                        </p>
                        <p>Some of the projects handled by Paul include;</p>
                        <p>
                          The installation, configuration and integration of all
                          branches / ATM locations of First City Monument Bank
                          (FCMB) using radio/ VSAT link and the installation of
                          2MB link (E1 line) for voice & data traffic for her
                          data centre. FCMB is a full service bank of Nigeria,
                          providing consumer, commercial and investment banking.
                        </p>
                        <p>
                          The installation and configuration of VSAT/Microwave
                          radio link for data centre backup & regional offices
                          via SAT 3 for Diamond Bank, a full-service
                          international bank based in Nigeria. Also the
                          installation & configuration of radio/VSAT link for
                          ATM and regional office data centres of Sterling Bank,
                          Nigeria, including the installation & configuration of
                          Radio link for data center back up. Installation &
                          Configuration & Integration of Chams Access, a service
                          of one of Nigerias leading ICT Solutions provider,
                          Chams Plc. Tntegration of various sites of Nigeria's
                          oldest energy company, Shell in Nigeria and also all
                          ValuCard ATM locations in Lagos via Radio link.
                        </p>
                        <p>
                          The installation, configuration and integration of all
                          branches / ATM locations of First City Monument Bank
                          (FCMB) using radio/ VSAT link and the installation of
                          2MB link (E1 line) for voice & data traffic for her
                          data centre. FCMB is a full service bank of Nigeria,
                          providing consumer, commercial and investment banking.
                        </p>
                        <p>
                          Paul also played an integral part in the design and
                          implementation of Uninterrupted Power Supply System /
                          Data / Voice network infrastructure, structured
                          cabling for UPS/Data/voice points for the Nigerian
                          Communications Commissions, Ikoyi. The installation
                          and configuration of advanced MITEL PABX Units for 50
                          users (VOIP phone). Configuration of Cisco 3950 series
                          switches, 2800 series router and Pix 506 firewall,
                          plan implementation and maintenance of Microsoft
                          Windows server 2003 Active directory Infrastructure
                          including the installation, configuration and
                          administering Microsoft Internet security and
                          Acceleration (ISA) server 2000 Enterprise Edition.
                        </p>
                        <>
                          <img
                            src={social}
                            alt="social"
                            style={{ width: '2%' }}
                          />
                          <span style={{ color: '#bbb', marginLeft: '5px' }}>
                            pike@teqbridgeltd.com
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
                            Paul.Ike
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

export default PaulIke;
