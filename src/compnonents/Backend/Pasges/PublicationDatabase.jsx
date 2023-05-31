import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Api from '../../Helper/Api';
import { Link } from 'react-router-dom';

function PublicationDatabase() {
  const [data, setData] = useState([]);

  const getPubliction = async () => {
    try {
      const response = await Api.get('/lastPublications');
      setData(response.data);
    } catch (err) {
      // not in 200 response range
      toast.error(err.message);
    }
  };

  useEffect(() => {
    getPubliction();
  }, []);

  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + '...';
    }
    return str;
  };
  return (
    <>
      <div>
        {data.length === 0 && (
          <div style={{ marginBottom: '50px' }}>
            <h1
              style={{
                fontSize: '15px',
                fontFamily: 'Miriam Libre, sans-serif',
                fontWeight: 'bold',
                marginTop: '12px',
                width: '82%',
                background: '#93bbe3',
                borderRadius: '4PX',
              }}
            >
              No Latest Publications available ! !
            </h1>
          </div>
        )}
      </div>

      {data.map((pubcantion, index) => {
        return (
          <Row key={index}>
            {/* <h></h> */}
            <Col>
              <img
                src={`http://localhost:8000/${pubcantion.feature_image}`}
                alt=""
                style={{
                  height: '191px',
                  marginTop: '12px',
                  paddingBottom: '6px',
                  borderBottom: 'solid thin #E1F0FF',
                  width: '17rem',
                  textAlign: 'center',
                }}
              />
              <div>
                <strong
                  style={{
                    marginLeft: '-1rem',
                    padding: '0px 29px 20px',
                    display: 'flex',
                    textAlign: 'start',
                    fontSize: '13px',
                  }}
                >
                  <strong style={{ marginLeft: '-1rem' }}>
                    {excerpt(pubcantion.title)}
                    <Link href="#"> read more »</Link>
                  </strong>
                </strong>
              </div>
            </Col>
          </Row>
        );
      })}
    </>
  );
}

export default PublicationDatabase;
