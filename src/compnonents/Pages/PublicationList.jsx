import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillCalendarEventFill, BsPerson } from 'react-icons/bs';
import moment from 'moment';
import { Link } from 'react-router-dom';
import LoadingBox from '../Helper/LoadingBox';
import MessageBox from '../Helper/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { publications } from '../../action/publicationsAction';

function PublicationList() {
  const dispatch = useDispatch();
  const publicationDe = useSelector((state) => state.publications);
  const { loading, error, publication } = publicationDe;

  useEffect(() => {
    dispatch(publications());
  }, [dispatch]);

  const excerpt = (content, length, delian, appendInx) => {
    if (content.length <= length) return content;

    let trimerStr = content.substr(0, length + delian.length);

    let lastDelimIndex = trimerStr.lastIndexOf(delian);
    if (lastDelimIndex >= 0) trimerStr = trimerStr.substr(0, lastDelimIndex);

    if (trimerStr) trimerStr += appendInx;

    return trimerStr;
  };

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
              <Row>
                {publication.map((item, index) => (
                  <div key={index}>
                    <Container>
                      <Row>
                        <Col>
                          <div
                            style={{
                              marginBottom: '12px',
                            }}
                          >
                            <img
                              src={`http://localhost:8000/${item.feature_image} `}
                              alt=""
                              style={{
                                height: '131px',
                              }}
                            />
                          </div>
                        </Col>
                        <Col sm={8}>
                          <div>
                            <h1
                              style={{
                                fontWeight: 'bold',
                                fontSize: '23px',
                              }}
                            >
                              {item.title}
                            </h1>
                          </div>
                          <span
                            style={{
                              backgroundColor: '#5cb85c',
                              color: 'white',
                              borderRadius: '5px',
                            }}
                          >
                            <BsFillCalendarEventFill
                              style={{ fontSize: '12px' }}
                            />
                            {moment(item.date_created).format(
                              'MMMM Do YYYY, h:mm:ss a'
                            )}
                          </span>
                          <span
                            style={{
                              fontSize: '19px',
                              marginLeft: '12px',
                            }}
                          >
                            |
                          </span>
                          <span style={{ marginTop: '7px', marginLeft: '4px' }}>
                            Published by
                          </span>
                          <BsPerson />
                          <strong style={{ fontSize: '19px' }}>
                            {item.author}
                          </strong>

                          <hr />
                          <div
                            style={{
                              fontSize: '14px',
                              width: '100%',
                            }}
                            dangerouslySetInnerHTML={{
                              __html: excerpt(item.body, 150, ' ', '...'),
                            }}
                          ></div>
                          <strong>
                            <Link
                              to={`/lastPublicationsViwe/${item.id}`}
                              style={{ textDecoration: 'none' }}
                            >
                              read more »
                            </Link>
                          </strong>
                          <hr style={{ marginLeft: '-18rem', width: '157%' }} />
                        </Col>
                      </Row>
                    </Container>
                  </div>
                ))}
              </Row>
            </Container>
          </>
        )}
      </Container>
    </>
  );
}

export default PublicationList;
