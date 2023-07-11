import React from 'react';
import { Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Terms.css';
import { Link } from 'react-router-dom';
import Tweets from '../../Helper/Tweets';
import PublicationDatabase from '../../Backend/Pasges/PublicationDatabase';

import chimeka from '../../../assets/029.jpg';
import woal from '../../../assets/056.jpg';
import pual from '../../../assets/033.jpg';
import emake from '../../../assets/055.jpg';

const style = {
  fontSize: '24px',
  marginTop: '-15px',
  borderLeft: 'solid 12px #E1F0FF',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};

const imageBody = {
  width: '150px',
  height: '200px',
  float: 'left',
  margin: '0 10px 0 0',
  border: 'solid thin #ccc',
  borderRadius: '20px 0',
};

function OurTerms() {
  return (
    <>
      <div className="jumbotron-banner">
        <div className="our-Term-background">
          <div className="about-title">
            <div
              style={{
                backgroundColor: ' #e1f0ff',
                display: 'flex',
                width: '35%',
                color: 'black',
                fontFamily: ['Miriam Libre '].join(','),
              }}
            >
              <h2 style={{ fontWeight: 'bold', fontSize: '45px' }}>Our Core</h2>
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
              Each team member's commitment is what makes Teqbridge work.
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
                  <Breadcrumb.Item href="#">Company</Breadcrumb.Item>
                  <Breadcrumb.Item active>The Team</Breadcrumb.Item>
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
              <p>
                Our people are the best. Our future depends on it. Some of the
                best minds and talent are a part of our team. They comprise of
                software engineers, programmers, web developers, business
                analysts and graphic designers, with supplementing skills as
                customer service representatives, sales & marketing
                professionals and management gurus
              </p>
              <p>
                Pioneering our leading-edge technological solutions are cream of
                seasoned IT specialist whose combine profile spans through all
                spheres of IT consulting. Presently, we have compact technical
                personnel in outsourcing, core design, development and
                implementation.
              </p>
              <p>
                Teqbridge as a company creates relationship that helps develop,
                retain, and motivate its employees. Our experiences and
                certifications cut across numerous IT fields with combined
                experience from over 200 customer engagements and 120 man-years
                of consulting for blue chip companies, public and private
                sectors, international organizations and NGOs, etc. We usually
                bring these experiences to bear on all projects.
              </p>
            </div>

            <Row>
              <Col md>
                <Card style={{ width: '27rem', border: 'none' }}>
                  <Card.Img variant="top" src={chimeka} style={imageBody} />
                  <Card.Body
                    style={{
                      textAlign: 'end',
                      marginTop: '-15rem',
                    }}
                  >
                    <Card.Title style={{ padding: '-1rem' }}>
                      <h1
                        style={{
                          fontWeight: 'bold',
                          fontSize: '20px',
                          marginRight: '3rem',
                        }}
                      >
                        Chiemeka Ngwu
                      </h1>

                      <span
                        style={{
                          marginTop: ' 10px',
                          color: '#999',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          marginRight: '10rem',
                        }}
                      >
                        MD/CEO
                      </span>
                    </Card.Title>
                    <Card.Text
                      style={{
                        width: '116%',
                        padding: '-22px',
                        paddingLeft: '11rem',
                        textAlign: 'start',
                      }}
                    >
                      Chiemeka is the Chief Executive Officer and founder of
                      Teqbridge Limited. He possesses well-rounded and
                      concentrated information technology experiences...
                      spanned...
                    </Card.Text>
                    <Link
                      color="primary"
                      to="/Chiemeka_Ngwu"
                      style={{ marginRight: '8rem', textDecoration: 'none' }}
                    >
                      read more »
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md>
                <Card style={{ width: '23rem', border: 'none' }}>
                  <Card.Img variant="top" src={woal} style={imageBody} />
                  <Card.Body
                    style={{
                      textAlign: 'end',
                      marginTop: '-16rem',
                    }}
                  >
                    <Card.Title style={{ padding: '-1rem' }}>
                      <h1
                        style={{
                          fontWeight: 'bold',
                          fontSize: '20px',
                          marginRight: '-31px',
                        }}
                      >
                        Oluwole Adetiba
                      </h1>

                      <span
                        style={{
                          marginTop: ' 10px',
                          color: '#999',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          marginRight: '-34px',
                        }}
                      >
                        Chief Software Architect
                      </span>
                    </Card.Title>
                    <Card.Text
                      style={{
                        width: '116%',
                        padding: '-22px',
                        paddingLeft: '11rem',
                        textAlign: 'start',
                      }}
                    >
                      Oluwole Adetiba is a seasoned Information Technology
                      consultant of more than 16 years experience. His
                      experience as application architect and developer
                      spanned...
                    </Card.Text>
                    <Link
                      color="primary"
                      to="/Oluwole_Adetiba"
                      style={{ marginRight: '4rem', textDecoration: 'none' }}
                    >
                      read more »
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Card style={{ width: '23rem', border: 'none' }}>
                  <Card.Img variant="top" src="" style={imageBody} />
                  <Card.Body
                    style={{
                      textAlign: 'end',
                      marginTop: '-16rem',
                    }}
                  >
                    <Card.Title style={{ padding: '-1rem' }}>
                      <h1
                        style={{
                          fontWeight: 'bold',
                          fontSize: '20px',
                          marginRight: '4rem',
                        }}
                      >
                        Paul Ike
                      </h1>

                      <span
                        style={{
                          marginTop: ' 10px',
                          color: '#999',
                          fontSize: '14px',
                          fontWeight: 'bold',
                        }}
                      >
                        Head, Infrastructure
                        <br />& Network Support
                      </span>
                    </Card.Title>
                    <Card.Text
                      style={{
                        width: '116%',
                        padding: '-22px',
                        paddingLeft: '11rem',
                        textAlign: 'start',
                      }}
                    >
                      Paul is a graduate of University of Nigeria, Nsukka with a
                      degree in Computer Science with Statistics. Paul is a
                      Cisco Certified...
                    </Card.Text>
                    <Link
                      color="primary"
                      to="/Paul_Ike"
                      style={{ marginRight: '4rem', textDecoration: 'none' }}
                    >
                      read more »
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col md>
                <Card style={{ width: '23rem', border: 'none' }}>
                  <Card.Img variant="top" src={pual} style={imageBody} />
                  <Card.Body
                    style={{
                      textAlign: 'end',
                      marginTop: '-15rem',
                    }}
                  >
                    <Card.Title style={{ padding: '-1rem' }}>
                      <h1
                        style={{
                          fontWeight: 'bold',
                          fontSize: '20px',
                          marginRight: '1rem',
                        }}
                      >
                        Vincent Okeke
                      </h1>

                      <span
                        style={{
                          marginTop: ' 10px',
                          color: '#999',
                          fontSize: '14px',
                          fontWeight: 'bold',

                          marginRight: '-7rpx',
                        }}
                      >
                        Senior AUMENTUM®
                        <br />
                        Registry & GIS Analyst
                      </span>
                    </Card.Title>
                    <Card.Text
                      style={{
                        width: '116%',
                        padding: '-22px',
                        paddingLeft: '11rem',
                        textAlign: 'start',
                      }}
                    >
                      Vincent is a Surveyor and Geo-information specialist with
                      good experience in both Cadastral and GIS computation,
                      modelling and..
                    </Card.Text>
                    <Link
                      color="primary"
                      to="/Vincent_Okeke"
                      style={{ marginRight: '4rem', textDecoration: 'none' }}
                    >
                      read more »
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Card style={{ width: '23rem', border: 'none' }}>
                  <Card.Img variant="top" src={emake} style={imageBody} />
                  <Card.Body
                    style={{
                      textAlign: 'end',
                      marginTop: '-15rem',
                    }}
                  >
                    <Card.Title style={{ padding: '-1rem' }}>
                      <h1
                        style={{
                          fontWeight: 'bold',
                          fontSize: '20px',
                          marginRight: '-7px',
                        }}
                      >
                        Ikem Okoyedike
                      </h1>

                      <span
                        style={{
                          marginTop: ' 10px',
                          color: '#999',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          marginRight: '-73px',
                          width: '100%',
                        }}
                      >
                        Senior AUMENTUM®
                        <br />
                        Cadastre Specialist & GIS Analyst
                      </span>
                    </Card.Title>
                    <Card.Text
                      style={{
                        width: '116%',
                        padding: '-22px',
                        paddingLeft: '11rem',
                        textAlign: 'start',
                      }}
                    >
                      Ikem is an Experienced GIS analyst and survey practices
                      with considerable expertise in mapping, survey practices
                      Cadastral survey, engineering survey etc)...
                    </Card.Text>
                    <Link
                      color="primary"
                      to="/Ikem_Okoyedike"
                      style={{ marginRight: '4rem', textDecoration: 'none' }}
                    >
                      read more »
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
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
    </>
  );
}

export default OurTerms;
