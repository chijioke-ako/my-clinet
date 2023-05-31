import { Col, Container } from 'react-bootstrap';
import './contact.css';

function Contact() {
  return (
    <>
      <div>
        <div className="contact-background">
          <div
            style={{
              fontWeight: 'bold',
              color: 'white',
              position: 'absolute',
              fontFamily: ['Miriam Libre '].join(','),
            }}
          >
            <div
              style={{
                marginTop: '-5rem',
                padding: '10rem',
              }}
            >
              <h3> Contact Us</h3>

              <p
                style={{
                  fontSize: '17px',
                  fontFamily: ['Miriam Libre '].join(','),
                }}
              >
                Give us a Call or send us an Email. We are always here to help
                out in whatever way you can.
              </p>
            </div>
          </div>
        </div>
      </div>
      Contact
    </>
  );
}

export default Contact;
