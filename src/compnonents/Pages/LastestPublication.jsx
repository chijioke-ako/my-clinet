import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Tweets from '../Helper/Tweets';
import { Link } from 'react-router-dom';
import LoadingBox from '../Helper/LoadingBox';
import MessageBox from '../Helper/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPublication } from '../../action/publicationAction';

function LastestPublication() {
  const dispatch = useDispatch();
  const publicationList = useSelector((state) => state.listPublication);
  const { loading, error, publications } = publicationList;

  const excerpt = (content, length, delian, appendInx) => {
    if (content.length <= length) return content;

    let trimerStr = content.substr(0, length + delian.length);

    let lastDelimIndex = trimerStr.lastIndexOf(delian);
    if (lastDelimIndex >= 0) trimerStr = trimerStr.substr(0, lastDelimIndex);

    if (trimerStr) trimerStr += appendInx;

    return trimerStr;
  };

  useEffect(() => {
    dispatch(listPublication());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>
            {error}
            <h4>No currently publications available !</h4>
          </MessageBox>
        ) : (
          <>
            <Container>
              <div
                style={{
                  fontSize: '24px',
                  fontFamily: 'Miriam Libre, sans-serif',
                  fontWeight: 'bold',
                }}
              >
                <strong>
                  <h1
                    style={{
                      textAlign: 'start',
                      fontSize: '29px',
                      marginBottom: '58px',
                      fontWeight: 'bold',
                      fontFamily: ['Miriam Libre '].join(','),
                    }}
                  >
                    Latest Publications !
                  </h1>
                </strong>

                <div>
                  <hr
                    style={{
                      width: '66%',
                    }}
                  />
                </div>
              </div>
              <Row>
                {publications.map((item, index) => (
                  <Col md key={index}>
                    <Card
                      style={{
                        padding: '2px',
                        marginTop: '3rem',
                        background: '#DAEDFC',
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={`http://localhost:8000/${item.feature_image} `}
                      />
                    </Card>
                    <div>
                      <h4>{item.title}</h4>
                    </div>
                    <hr />

                    <div
                      style={{
                        width: '100%',
                        padding: '-8px',
                        textAlign: 'start',
                      }}
                    >
                      <div
                        style={{ fontSize: '16px', width: '100%' }}
                        dangerouslySetInnerHTML={{
                          __html: excerpt(item.body, 150, ' ', '...'),
                        }}
                      ></div>

                      <strong style={{ fontSize: '16px' }}>
                        <Link
                          to={`/lastPublicationsViwe/${item.id}`}
                          style={{ textDecoration: 'none' }}
                        >
                          read more »
                        </Link>
                      </strong>
                    </div>
                  </Col>
                ))}
                <Col md={4}>
                  <Tweets />
                </Col>
              </Row>
            </Container>
          </>
        )}
      </Container>
    </>
  );
}

export default LastestPublication;
