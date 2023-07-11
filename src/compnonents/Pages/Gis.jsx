import { Link } from 'react-router-dom';
import Tweets from '../Helper/Tweets';
import './gis.css';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';
import gis from '../../assets/026.jpg';

const style = {
  fontSize: '24px',
  marginTop: '1rem',
  borderLeft: 'solid 12px #E1F0FF',
  fontWeight: 'bold',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};

function Gis() {
  return (
    <>
      <br />
      <br /> <br />
      <div className="gis-background ">
        <h1 className="gis-header">
          GIS Technology & Property Valuation Implementation
        </h1>
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
                      GIS Technology & Property Valuation Implementation
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: ['Miriam Libre '].join(','),
                    fontWeight: '-moz-initial',
                  }}
                >
                  Teqbridge in conjunction with our partner, Thomson Reuters
                  implement Aumentum Valuation which is a web based appraisal
                  system supporting a jurisdiction’s property valuation
                  procedures that feeds into the property tax process. Aumentum
                  Valuation leverages common Aumentum features such as flags,
                  notes, security, event processing and iFramework tools and
                  builds on the best features of the Thomson Reuters Core Market
                  CAMA systems including ProVal, CustomCAMA, MARS, Sigma and MVP
                  CAMA to deliver a rich set of end user tools creating a single
                  web platform that seamlessly integrates with the Aumentum
                  pack. GIS integration increases the consistency of analytical
                  data. All information can be overlaid on maps allowing users
                  to be better informed.
                </p>
                <p
                  style={{
                    fontFamily: ['Miriam Libre '].join(','),
                    fontWeight: '-moz-initial',
                  }}
                >
                  The Valuation software we implement is a fully configurable
                  workflow solution to meet a jurisdiction’s needs but is based
                  on a standardized data structure common to all
                  implementations. Aumentum Valuation supports multiple models
                  within each of the main valuation approaches, namely
                </p>
                <ul
                  style={{
                    fontFamily: ['Miriam Libre '].join(','),
                    fontWeight: '-moz-initial',
                  }}
                >
                  <li>Multiple Cost Approaches,</li>
                  <li>
                    Comparison Approaches such as Modelled, Interactive and
                    Sales / Assessment Comparables and
                  </li>
                  <li>
                    Income Approaches including Reported Income, Modelled Income
                    and Discounted Cash Flow.
                  </li>
                </ul>
                <p
                  style={{
                    fontFamily: ['Miriam Libre '].join(','),
                    fontWeight: '-moz-initial',
                  }}
                >
                  The use of modular valuation engines mitigates the risk of
                  modifications to an existing engine having an adverse effect
                  on a client’s data. Valuation engines supported include:
                </p>
                <Row>
                  <Col sm={8}>
                    <ul
                      style={{
                        fontFamily: ['Miriam Libre '].join(','),
                        fontWeight: '-moz-initial',
                      }}
                    >
                      <li>Land Valuation (Market & Agricultural Use),</li>
                      <li>
                        Market Stratified Cost (Supports Craftsman and Marshall
                        & Swift rate data),
                      </li>
                      <li>California BOE Residential Cost,</li>
                      <li>Marshall & Swift MVP Commercial Cost Engine,</li>
                      <li>
                        Comparable Sales, Modelled Income and Reported Income.
                      </li>
                      <li>
                        Aumentum Valuation’s rich statistical tools and use of
                        variables provide for robust, defensible valuations
                        being undertaken by a jurisdiction.
                      </li>
                    </ul>
                  </Col>
                  <Col sm={4}>
                    <img
                      src={gis}
                      alt="gis"
                      style={{
                        height: '25vh',
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

                  <Col>
                    <p
                      style={{
                        fontFamily: ['Miriam Libre '].join(','),
                        fontWeight: '-moz-initial',
                      }}
                    >
                      Other GIS Services we provide include the following;
                    </p>
                    <ul
                      style={{
                        fontFamily: ['Miriam Libre '].join(','),
                        fontWeight: '-moz-initial',
                      }}
                    >
                      <li>
                        Establishment of 1st, 2nd and 3rd order control points
                        and associated monuments across a State
                      </li>
                      <li>
                        Procurement configuration of modern GPS equipment.
                      </li>
                      <li>
                        Development of geodetic reference framework for the
                        states and appropriate transformation parameters to
                        convert the current coordinate system to Minna/UTM.
                      </li>
                      <li>
                        Procurement of ICT equipment required to support
                        modernization of land administration functions in the
                        Land, Survey and Town Planning (LSTP).
                      </li>
                      <li>
                        Establishment of a production line and scan, index, QA &
                        digitize property records/files and associated parcels
                        enabling the State to commence Certificate of Occupancy
                        Certification/Recertification exercise for digitized
                        records.
                      </li>
                      <li>
                        Implementation of Certificate of Occupancy
                        Recertification, Certification (First Registration),
                        Subsequent Registrations and Ground Rent workflows in
                        GRM Registry™ and GRM Cadastre™ software to configure
                        parcels.
                      </li>
                      <li>
                        Configuration of hundreds of fees in the system to
                        support land registration activities.
                      </li>
                      <li>Acquisition of high resolution Ortho photos.</li>
                      <li>
                        Aerial photography and associated Image and LIDAR
                        processing and Mapping.
                      </li>
                      <li>Offer trainings using some GIS Tools</li>
                    </ul>
                  </Col>
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

export default Gis;
