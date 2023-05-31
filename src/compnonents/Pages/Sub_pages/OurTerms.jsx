import React from 'react';
import { Container } from 'react-bootstrap';
import './Terms.css';

function OurTerms() {
  return (
    <>
      <div className="jumbotron-banner">
        <div className="our-Term-background">
          <div className="about-title">
            <div
              style={{
                fontWeight: 'bold',
                fontSize: '2rem',
                backgroundColor: ' #e1f0ff',
                display: 'flex',
                width: '29%',
                color: 'black',
                fontFamily: ['Miriam Libre '].join(','),
              }}
            >
              <h2>Our Core</h2>
            </div>
            <p
              style={{
                backgroundColor: 'rgba(0, 102, 204, 0.5)',
                display: 'inline-block',
                padding: '5px 30px 5px 15px',
                fontFamily: ['Miriam Libre '].join(','),
              }}
            >
              Each team member's commitment is what makes Teqbridge work.
            </p>
          </div>
        </div>
      </div>
      Our Terms
    </>
  );
}

export default OurTerms;
