import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import './Partners.css';
import { Link } from 'react-router-dom';
import Tweets from '../../Helper/Tweets';
import PublicationDatabase from '../../Backend/Pasges/PublicationDatabase';
import PartnersList from '../PartnersList';

const style = {
  // padding: '5px 0 5px 10px',
  fontSize: '24px',
  marginTop: '-15px',
  borderLeft: 'solid 12px #E1F0FF',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};

function Partners() {
  return (
    <>
      <div className="jumbotron-banner">
        <div className="partners-background">
          <div
            style={{
              textAlign: 'start',
              color: 'white',
              padding: '4rem',
              fontFamily: ['Miriam Libre '].join(','),
            }}
          >
            <div>
              <h2
                style={{ fontWeight: 'bold', fontSize: '2rem', color: 'white' }}
              >
                Our Global Partners
              </h2>
            </div>
            <p style={{ width: '54%', fontSize: '21px', color: 'white' }}>
              Success lies in the combination of both talent and business savvy,
              and the magic comes through partnership between both.
            </p>
          </div>
        </div>
      </div>
      <div>
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
            fontSize: '15px',
            fontWeight: 'bolder',
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
                    <Breadcrumb.Item active>Global Partners</Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
              <p>
                We understand that to deliver the right business solutions that
                meet our customers need, there is the need for strategic
                business alliances. That is why we have chosen to with the right
                organizations/tools that differentiate our solutions. The
                following is the non-exhaustive list of companies we currently
                partner with or work with their products:
              </p>
              <div>
                <PartnersList />
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

export default Partners;
