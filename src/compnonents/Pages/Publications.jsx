import { Link } from 'react-router-dom';
import './Public.css';
import Tweets from '../Helper/Tweets';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';
import PublicationList from './PublicationList';

const style = {
  fontSize: '24px',
  marginTop: '-15px',
  borderLeft: 'solid 12px #E1F0FF',
  fontWeight: 'bold',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};

function Publications() {
  return (
    <>
      <div className="jumbotron-banner">
        <div className="publiction-background">
          <div
            style={{
              textAlign: 'start',
              color: 'white',
              fontFamily: ['Miriam Libre '].join(','),
            }}
          >
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '3rem',
                padding: '8rem',
                color: '#fff',
              }}
            >
              Publications.
            </div>
          </div>
        </div>
      </div>
      <div
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
        <Container>
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
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Publications </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
              <div>
                <PublicationList />
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

export default Publications;
