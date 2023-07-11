import React from 'react';
import Tweets from '../Helper/Tweets';
import { Link } from 'react-router-dom';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';
import emake from '../../assets/055.jpg';
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

function IkemOkoyedike() {
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
                  Ikem Okoyedike
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
                Senior AUMENTUM® Cadastre Specialist & GIS Analyst
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
                    <Breadcrumb.Item active>Ikem Okoyedike</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
              <div
                style={{
                  fontFamily: [
                    'ubunturegular',
                    'open_sansregular',
                    'sans - serif',
                  ].join(','),
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                <Container>
                  <div>
                    <img
                      src={emake}
                      alt="chimeka"
                      style={{
                        border: 'solid thin #ccc',
                        borderRadius: '20px 0',
                      }}
                    />

                    <div>
                      <Container style={{ marginTop: '2rem' }}>
                        <p>
                          Ikem is an Experienced GIS analyst and survey
                          practices with considerable expertise in mapping,
                          survey practices Cadastral survey, engineering survey
                          etc). He has a good knowledge of and working
                          experience in image processing, software analyses,
                          database management, surveying, cartography,
                          animation. In addition to his software experience, Mr
                          Okoyedike participated in software comparison and
                          execution of several GIS projects: Early Warning for
                          Food Security in Nigeria(NARSDA), Map updating of
                          topographical map of Nigeria standard sheets, Erosion
                          analyses, Street mapping projects etc.
                        </p>

                        <>
                          <img
                            src={social}
                            alt="social"
                            style={{ width: '2%' }}
                          />
                          <span style={{ color: '#bbb', marginLeft: '5px' }}>
                            iokoyedike@teqbridgeltd.com
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
                            okoyedike
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

export default IkemOkoyedike;
