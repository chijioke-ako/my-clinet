import { Button, Col, Container, Row } from 'react-bootstrap';

import { FaAngleRight } from 'react-icons/fa';
import order from '../../../assets/040.png';
import procure from '../../../assets/041.png';
import project from '../../../assets/043.png';
import make from '../../../assets/039.png';
import Storage from '../../../assets/044.png';
import Accounting from '../../../assets/038.png';
import './feature.css';

function Feature() {
  return (
    <>
      <div>
        <Container>
          <h3
            style={{
              fontFamily: 'Miriam Libre',
              textAlign: 'center',
              fontWeight: '700',
              fontSize: '54px',
              paddingBottom: '10px',
              color: '#5f6062',
            }}
          >
            Features.
          </h3>
        </Container>
      </div>
      <section style={{ textAlign: 'center' }}>
        <Container>
          <Row>
            <Col sm={4}>
              <div>
                <h3
                  style={{
                    color: '#6eb43f',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    fontFamily: 'Miriam Libre ',
                    marginRight: '-2rem',
                  }}
                >
                  Order to Cash
                </h3>
                <div style={{ display: 'flex' }}>
                  <img src={order} alt="" style={{ marginTop: '-3rem' }} />
                  <h3
                    style={{
                      textAlign: 'start',
                      fontWeight: 'inherit',
                      fontSize: '17px',
                      padding: '1em',
                    }}
                  >
                    Increase sales orders processed daily, achieve faster time
                    to cash and improve operational cost savings.
                  </h3>
                </div>
                <Button
                  style={{
                    background: '#6eb43f',
                    border: 'none',
                    marginLeft: '-2rem',
                    '&:hover': {
                      background: 'red',
                    },
                  }}
                  href="http://www.openbravo.com/other-industries/product-features/order-to-cash/"
                >
                  read more
                  <FaAngleRight />
                </Button>
              </div>
            </Col>
            <Col sm={4}>
              <div>
                <h3
                  style={{
                    color: '#6eb43f',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    fontFamily: 'Miriam Libre ',
                    marginRight: '-2rem',
                  }}
                >
                  Procure To Pay
                </h3>
                <div style={{ display: 'flex' }}>
                  <img src={procure} alt="" style={{ marginTop: '-3rem' }} />
                  <h3
                    style={{
                      textAlign: 'start',
                      fontWeight: 'inherit',
                      fontSize: '17px',
                      padding: '1em',
                    }}
                  >
                    Gain better control over your end-to-end procurement process
                    to maximize return on invested capital.
                  </h3>
                </div>
                <Button
                  style={{
                    background: '#6eb43f',
                    border: 'none',
                    marginLeft: '-2rem',
                    '&:hover': {
                      background: 'red',
                    },
                  }}
                  href="http://www.openbravo.com/other-industries/product-features/procure-to-pay/"
                >
                  read more
                  <FaAngleRight />
                </Button>
              </div>
            </Col>
            <Col md sm={4}>
              <div>
                <h3
                  style={{
                    color: '#6eb43f',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    fontFamily: 'Miriam Libre ',
                    marginRight: '-2rem',
                  }}
                >
                  Project to Invoicing
                </h3>
                <div style={{ display: 'flex' }}>
                  <img src={project} alt="" style={{ marginTop: '-3rem' }} />
                  <h3
                    style={{
                      textAlign: 'start',
                      fontWeight: 'inherit',
                      fontSize: '17px',
                      padding: '1em',
                    }}
                  >
                    Take control and proactively manage project costs and
                    billing, from conception to completion.
                  </h3>
                </div>
                <Button
                  style={{
                    background: '#6eb43f',
                    border: 'none',
                    marginLeft: '-2rem',
                    '&:hover': {
                      background: 'red',
                    },
                  }}
                  href="http://www.openbravo.com/other-industries/product-features/project-to-invoicing/"
                >
                  read more
                  <FaAngleRight />
                </Button>
              </div>
            </Col>
            <Col sm={4}>
              <div style={{ marginTop: '4rem' }}>
                <h3
                  style={{
                    color: '#6eb43f',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    fontFamily: 'Miriam Libre ',
                    marginRight: '-2rem',
                  }}
                >
                  Make to Stock
                </h3>
                <div style={{ display: 'flex' }}>
                  <img src={make} alt="" style={{ marginTop: '-3rem' }} />
                  <h3
                    style={{
                      textAlign: 'start',
                      fontWeight: 'inherit',
                      fontSize: '17px',
                      padding: '1em',
                    }}
                  >
                    Gain control of your production process for better alignment
                    with your product demand.
                  </h3>
                </div>
                <Button
                  style={{
                    background: '#6eb43f',
                    border: 'none',
                    marginLeft: '-2rem',
                    '&:hover': {
                      background: 'red',
                    },
                  }}
                  href="http://www.openbravo.com/other-industries/product-features/make-to-stock/"
                >
                  read more
                  <FaAngleRight />
                </Button>
              </div>
            </Col>
            <Col sm={4}>
              {' '}
              <div style={{ marginTop: '4rem' }}>
                <h3
                  style={{
                    color: '#6eb43f',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    fontFamily: 'Miriam Libre ',
                    marginRight: '-2rem',
                  }}
                >
                  Storage to Distribution
                </h3>
                <div style={{ display: 'flex' }}>
                  <img src={Storage} alt="" style={{ marginTop: '-3rem' }} />
                  <h3
                    style={{
                      textAlign: 'start',
                      fontWeight: 'inherit',
                      fontSize: '17px',
                      padding: '1em',
                    }}
                  >
                    Gain efficiency and accuracy in all your warehouse and
                    inventory management activities.
                  </h3>
                </div>
                <Button
                  style={{
                    background: '#6eb43f',
                    border: 'none',
                    marginLeft: '-2rem',
                    '&:hover': {
                      background: 'red',
                    },
                  }}
                  href="http://www.openbravo.com/other-industries/product-features/storage-to-distribution/"
                >
                  read more
                  <FaAngleRight />
                </Button>
              </div>
            </Col>
            <Col sm={4}>
              <div style={{ marginTop: '4rem' }}>
                <h3
                  style={{
                    color: '#6eb43f',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    fontFamily: 'Miriam Libre ',
                    marginRight: '-2rem',
                  }}
                >
                  Accounting to Profit
                </h3>
                <div style={{ display: 'flex' }}>
                  <img src={Accounting} alt="" style={{ marginTop: '-3rem' }} />
                  <h3
                    style={{
                      textAlign: 'start',
                      fontWeight: 'inherit',
                      fontSize: '17px',
                      padding: '1em',
                    }}
                  >
                    Gain visibility into your financial performance and reduce
                    time during your closing period activities.
                  </h3>
                </div>
                <Button
                  style={{
                    background: '#6eb43f',
                    border: 'none',
                    marginLeft: '-2rem',
                    '&:hover': {
                      background: 'red',
                    },
                  }}
                  href="http://www.openbravo.com/other-industries/product-features/accounting-to-profit/"
                >
                  read more
                  <FaAngleRight />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Feature;
