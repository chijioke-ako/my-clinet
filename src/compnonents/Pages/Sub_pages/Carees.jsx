import { Container } from 'react-bootstrap';
import './Caress.css';

function Careers() {
  return (
    <>
      <div className="jumbotron-banner">
        <div className="careers-background">
          <div
            style={{
              textAlign: 'start',
              padding: '3rem',
              fontFamily: ['Miriam Libre '].join(','),
            }}
          >
            <div>
              <h3
                style={{
                  padding: '12px',
                  fontWeight: 'bold',
                  fontSize: '3rem',
                }}
              >
                Careers
              </h3>
            </div>
            <p style={{ width: '55%', fontSize: '20px' }}>
              Success lies in the combination of both talent and business savvy,
              and the magic comes through partnership between both.
            </p>
          </div>
        </div>
      </div>
      Careers
    </>
  );
}

export default Careers;
