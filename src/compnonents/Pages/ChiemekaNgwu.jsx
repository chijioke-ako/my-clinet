import React from 'react';
import { Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../../compnonents/Pages/Sub_pages/Terms.css';
import { Link } from 'react-router-dom';
import Tweets from '../Helper/Tweets';

import chimeka from '../../assets/029.jpg';
import social from '../../assets/053.png';
import name from '../../assets/046.png';

import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';

const style = {
  fontSize: '24px',
  marginTop: '-15px',
  borderLeft: 'solid 12px #E1F0FF',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};

function ChiemekaNgwu() {
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
                  Chiemeka Ngwu
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
                MD/CEO.
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
                    <Breadcrumb.Item active>Chiemeka Ngwu</Breadcrumb.Item>
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
                      src={chimeka}
                      alt="chimeka"
                      style={{
                        border: 'solid thin #ccc',
                        borderRadius: '20px 0',
                      }}
                    />

                    <div>
                      <Container style={{ marginTop: '2rem' }}>
                        <p>
                          Chiemeka is the Chief Executive Officer and founder of
                          Teqbridge Limited. He possesses well-rounded and
                          concentrated information technology experiences
                          spanning over 23 years with speciality in emerging
                          technologies. After graduating from the University of
                          Nigeria with a degree in Computer Sciences, he started
                          his career at the Nigerian Gas Company (a subsidiary
                          of NNPC). Chiemeka left NGC after a year to join an IT
                          consulting firm called Ideal Concepts as a Network
                          Specialist.
                        </p>
                        <p>
                          He later joined Tara Systems Limited as an Oracle
                          Product Analyst and gradually rose to Oracle Products
                          Manager for Nigeria. While at Tara he traversed all
                          the Oracle products, covering Databases, Development
                          Tools, Connectivity Tools and ERP – Financials, HR,
                          Supply Chain, etc.
                        </p>
                        <p>
                          Chiemeka left Tara for Computer Systems Associates
                          Limited (CSA) as Sybase Products Development Manager
                          for West Africa. He held this position before moving
                          to Solix Technologies Limited as the General Manager,
                          IT Solution Designs & Delivery and was responsible for
                          all technology solutions of the company. He later left
                          Solix Technologies as Executive Director to midwife
                          Teqbridge Limited as the pioneer and current Chief
                          Executive Officer.
                        </p>
                        <p>
                          Chiemeka is a solution finder. He has extensively
                          consulted for both local and international
                          organisations. In the course of discharging his
                          responsibilities he has consulted for numerous
                          organizations either directly or indirectly (at
                          implementation level or project management and
                          provision of true leadership).
                        </p>
                        <>
                          <img
                            src={social}
                            alt="social"
                            style={{ width: '2%' }}
                          />
                          <span style={{ color: '#bbb', marginLeft: '5px' }}>
                            cngwu@teqbridgeltd.com
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
                            chiemeka.ngwu
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

export default ChiemekaNgwu;
