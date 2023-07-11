import { Link, useParams } from 'react-router-dom';
import './Publication.css';
import Tweets from '../Helper/Tweets';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';
import { useEffect } from 'react';
import { BsFillCalendarEventFill, BsPerson } from 'react-icons/bs';
import LoadingBox from '../Helper/LoadingBox';
import MessageBox from '../Helper/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { detailedPublication } from '../../action/publicationAction';
import moment from 'moment';

const style = {
  fontSize: '24px',
  marginTop: '-15px',
  borderLeft: 'solid 12px #E1F0FF',
  fontWeight: 'bold',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};
function LastPublicationsViwe() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const publicationDelails = useSelector((state) => state.detailedPublication);
  const { loading, error, publication } = publicationDelails;

  useEffect(() => {
    dispatch(detailedPublication(id));
  }, [dispatch, id]);

  return (
    <>
      <>
        <div className="jumbotron-banner">
          <div className="publication">
            <div
              style={{
                textAlign: 'start',
                color: '#3a3535',
              }}
            >
              <div
                style={{
                  fontWeight: 'bold',
                  fontSize: '42px',
                  // padding: '3rem',
                  fontFamily: ['Miriam Libre '].join(','),
                }}
              >
                {publication && publication.title}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            fontFamily: [
              'ubunturegular',
              'open_sansregular',
              'OpenSans - Regular',
              'Helvetica Neue',
              'Helvetica',
              'Arial',
              'sans - serif',
            ].join(','),
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          <Container>
            <Row>
              <Col sm={8}>
                <div
                  style={{
                    backgroundColor: '#E1F0FF',
                    marginBottom: '20px',
                    marginTop: '-13px',
                    borderRadius: '9px',
                    paddingTop: '4px',
                    paddingLeft: '12px',
                    height: '2rem',
                  }}
                >
                  <div>
                    <Breadcrumb>
                      <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                        Home
                      </Breadcrumb.Item>

                      <Breadcrumb.Item
                        linkAs={Link}
                        linkProps={{ to: '/Publictions' }}
                      >
                        Publications
                      </Breadcrumb.Item>
                      <Breadcrumb.Item active>
                        {publication && publication.title}
                      </Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                </div>

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
                        <div>
                          <img
                            src={`http://localhost:8000/${publication.feature_image} `}
                            alt=""
                          />
                        </div>
                        <div></div>
                        <div>
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
                            {moment(publication.date_created).format(
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
                            {publication.author}
                          </strong>

                          <hr />
                          <div
                            style={{
                              fontSize: '14px',
                              width: '100%',
                              fontFamily: [
                                'ubunturegular',
                                'open_sansregular',
                                'OpenSans - Regular',
                                'Helvetica Neue',
                                'Helvetica',
                                'Arial',
                                'sans - serif',
                              ].join(','),
                              lineHeight: 1.42857143,
                              color: '#333',
                            }}
                            dangerouslySetInnerHTML={{
                              __html: publication.body,
                            }}
                          ></div>
                        </div>

                        <div
                          style={{ padding: '12px', textDecoration: 'none' }}
                        >
                          <a
                            href="{publication.title}"
                            http={publication.title}
                          >
                            {publication.title}
                          </a>
                        </div>
                      </Container>
                    </>
                  )}
                </Container>
              </Col>
              <Col sm={4}>
                <div style={style}>
                  <h4 style={{ marginLeft: '1rem', fontWeight: 'bold' }}>
                    Latest Publication
                  </h4>
                </div>
                <div style={{ width: '86%', marginLeft: '29px' }}>
                  <PublicationDatabase />
                  <div
                    style={{
                      width: '90%',
                      marginLeft: '120px',
                      textAlign: 'start',
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: '#f4faff',
                        border: ' 1px solid #E1F0FF',
                        padding: '10px 15px',
                        fontSize: ' 11px',
                        marginLeft: '-8rem',
                        marginBottom: '2rem',
                        width: '19rem',
                        textAlign: 'center',
                        fontFamily: ['Miriam Libre '].join(','),
                      }}
                    >
                      <Link to="/Publictions">Click to View publication</Link>
                    </Button>
                  </div>
                </div>
                <div style={{ width: '19rem', marginLeft: '29px' }}>
                  <Tweets />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    </>
  );
}

export default LastPublicationsViwe;
