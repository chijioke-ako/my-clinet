import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Backtop from '../Helper/BackTop';
import { Link } from 'react-router-dom';

function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>
      <div>
        <Container style={{ borderTop: 'solid 2px blue' }}>
          <Row>
            <Col style={{ textAlign: 'start' }}>
              <p style={{ marginBottom: '20px', marginTop: '20px' }}>
                <strong>© {year} TEQBRIDGE LIMITED.</strong>
                <span style={{ paddingLeft: '12px' }}>
                  <Link>. Privacy </Link>
                </span>
                <span style={{ paddingLeft: '12px' }}>
                  <Link>. Terms </Link>
                </span>
              </p>
            </Col>
            <Col
              style={{
                textAlign: 'end',
                marginBottom: '20px',
                marginTop: '20px',
              }}
            >
              <Backtop />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
