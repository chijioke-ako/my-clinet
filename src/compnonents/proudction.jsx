import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import porl from '../assets/013.jpg';

import gis from '../assets/009.jpg';
import pcms from '../assets/012.jpg';
import open from '../assets/011.png';

function Proudction() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Our Products</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <div>
              <Card
                style={{
                  width: '18rem',
                  textAlign: 'start',
                  padding: '-26px',
                  border: 'none',
                }}
              >
                <Card.Img variant="top" src={porl} style={{ width: '61%' }} />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontWeight: 'bold',
                      lineHeight: '1.0',
                      fontFamily: ['Miriam Libre ', 'sans-serif'],
                      fontSize: '27px',
                    }}
                  >
                    eREGISTRY
                    <br /> PORTAL
                  </Card.Title>
                  <Card.Text
                    style={{
                      padding: '12px',
                      fontFamily: ['Miriam Libre ', 'sans-serif'],
                    }}
                  >
                    An online and workflow-driven electronic land management
                    solution that allows public access to electronic
                    registration of land/property rights and transact land
                    businesses on the fly from the comfort of their
                    homes/offices and on any device without physically visiting
                    land offices or government agencies responsible for land
                    matters.
                  </Card.Text>
                  <Button
                    className="btn btn-primary btn-sm"
                    variant="primary"
                    style={{
                      color: '#fff',
                      background: '#337ab7',
                      borderColor: '#2e6da4',
                    }}
                  >
                    <Link style={{ color: 'white', textDecoration: 'none' }}>
                      View details »
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card
                style={{
                  width: '18rem',
                  textAlign: 'start',
                  padding: '6px',
                  border: 'none',
                }}
              >
                <Card.Img
                  variant="top"
                  src={gis}
                  style={{ width: '61%', borderRadius: '103px' }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontWeight: 'bold',
                      lineHeight: '1.0',
                      fontFamily: ['Miriam Libre ', 'sans-serif'],
                      fontSize: '23px',
                    }}
                  >
                    Crude Oil Commercial Information System (COCIS)
                  </Card.Title>
                  <Card.Text
                    style={{
                      padding: '12px',
                      fontFamily: ['Miriam Libre ', 'sans-serif'],
                    }}
                  >
                    A comprehensive, scalable, highly customizable web-based
                    solution that automates crude oil accounting and reports
                    processes; used to deliver the core objectives of crude oil
                    commercial.
                  </Card.Text>
                  <Button
                    className="btn btn-primary btn-sm"
                    variant="primary"
                    style={{
                      color: '#fff',
                      background: '#337ab7',
                      borderColor: '#2e6da4',
                    }}
                  >
                    <Link
                      to="/Cocis"
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      View details »
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card
                style={{
                  width: '18rem',
                  textAlign: 'start',
                  padding: '12px',
                  border: 'none',
                }}
              >
                <Card.Img
                  variant="top"
                  src={pcms}
                  style={{ width: '79%', padding: '12px' }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontWeight: 'bold',
                      lineHeight: '1.0',
                      fontFamily: ['Miriam Libre ', 'sans-serif'],
                    }}
                  >
                    Procurement & Contract Management Suite (PCMS)
                  </Card.Title>
                  <Card.Text
                    style={{
                      padding: '12px',
                      fontFamily: ['Miriam Libre ', 'sans-serif'],
                    }}
                  >
                    A workflow-driven electronic application used to automate
                    forms for material requisition and vendor registration. This
                    solution is good for large organizations with record number
                    of material requisitions.
                  </Card.Text>
                  <Button
                    className="btn btn-primary btn-sm"
                    variant="primary"
                    style={{
                      color: '#fff',
                      background: '#337ab7',
                      borderColor: '#2e6da4',
                    }}
                  >
                    <Link
                      to="/Pcms"
                      style={{ color: 'white', textDecoration: 'none' }}
                    >
                      View details »
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div>
              <Card
                style={{
                  width: '18rem',
                  textAlign: 'center',
                  border: 'none',
                  background: 'beige',
                  padding: '12px',
                }}
              >
                <Card.Img
                  variant="top"
                  src={open}
                  style={{ width: '61%', padding: '12px', marginLeft: '3rem' }}
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      fontWeight: 'bold',
                      lineHeight: '1.0',
                      fontFamily: ['Miriam Libre ', 'sans-serif'],
                    }}
                  >
                    Openbravo ERP Implementation
                  </Card.Title>
                  <Card.Text
                    style={{
                      padding: '12px',
                      fontFamily: ['Miriam Libre ', 'sans-serif'],
                    }}
                  >
                    We are certfied experts in evaluatiing if Openbravo ERP is
                    the right solution for you, implementating Openbravo in your
                    organization and adapting Openbravo ERP to your business'
                    unique needs. Openbravo is a web-based ERP solution for
                    small and medium-sized companies that can automate and
                    register most common business processes.
                  </Card.Text>
                  <Button
                    className="btn btn-primary btn-sm"
                    variant="primary"
                    style={{
                      color: '#fff',
                      background: '#337ab7',
                      borderColor: '#2e6da4',
                    }}
                  >
                    <Link style={{ color: 'white', textDecoration: 'none' }}>
                      View details »
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <div
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            borderBottom: 'solid 1px blue',
            marginBottom: '5rem',
          }}
        ></div>
      </Container>
    </>
  );
}

export default Proudction;
