import { Link } from 'react-router-dom';
import Tweets from '../Helper/Tweets';
import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import vin from '../../assets/033.jpg';
import social from '../../assets/053.png';
import name from '../../assets/046.png';
import In from '../../assets/045.png';

const style = {
  fontSize: '24px',
  marginTop: '-15px',
  borderLeft: 'solid 12px #E1F0FF',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};
function VincentOkeke() {
  return (
    <>
      {' '}
      VincentOkeke
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
                  Vincent Okeke
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
                Senior AUMENTUM® Registry & GIS Analyst
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
                    <Breadcrumb.Item active> Vincent Okeke</Breadcrumb.Item>
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
                      src={vin}
                      alt="chimeka"
                      style={{
                        border: 'solid thin #ccc',
                        borderRadius: '20px 0',
                      }}
                    />

                    <div>
                      <Container style={{ marginTop: '2rem' }}>
                        <p>
                          Vincent is a Surveyor and Geo-information specialist
                          with good experience in both Cadastral and GIS
                          computation, modelling and analysis in a Geo-database
                          system. He was part of the team that modelled the
                          Geo-Spatial Database of Guinea Current Large Marine
                          Ecosystem (GCLME) for UNIDO/UNDP GCLME centre at
                          Unilag, Lagos, Nigeria, building analysis on
                          industrial pollution hot spots in the zone using
                          ArcGIS 9.2 and AutoCAD. He equally served as a trainer
                          for the GCLME centre on GIS ArcGIS/AutoCAD
                          usage/tools.
                        </p>
                        <p>
                          He has demonstrable ability in modelling using ArcGIS
                          9.2 and was in a team that modelled the International
                          Market (AHIA NKWO and ASANNETU) Aba for the Government
                          of Abia State. He also modelled Tourism development
                          and marketing template using ArcGIS 9.2 which the
                          Anambra State Government Adopted for Tourism
                          development and marketing.
                        </p>
                        <p>
                          eCurrently on RIVGIS project, Mr Okeke processes the
                          Parcel Mutation of the Cadastral Plan Using ArcGIS
                          based ILS Multi Cadastral softwar for the Region being
                          modelled and provides additinnel on issues arising day
                          by day. He also has a onal support in LRS, Scanning
                          and Indexing to the persogood knowledge of other GIS
                          software (Elwis, Idrisi, Survey analyst, Map-info) and
                          Oracle 10g database engine.
                        </p>

                        <>
                          <img
                            src={social}
                            alt="social"
                            style={{ width: '2%' }}
                          />
                          <span style={{ color: '#bbb', marginLeft: '5px' }}>
                            vokeke@teqbridgeltd.com
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
                              href=" http://ng.linkedin.com/pub/vince-okeke/36/834/817"
                            >
                              Vince Okeke
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
                            vincoblast
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

export default VincentOkeke;
