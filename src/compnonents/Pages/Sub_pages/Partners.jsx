import { Container } from 'react-bootstrap';
import './Partners.css';

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
            <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>
              <h2>Our Global Partners</h2>
            </div>
            <p style={{ width: '54%', fontSize: '21px' }}>
              Success lies in the combination of both talent and business savvy,
              and the magic comes through partnership between both.
            </p>
          </div>
        </div>
      </div>
      Partenrs
    </>
  );
}

export default Partners;
