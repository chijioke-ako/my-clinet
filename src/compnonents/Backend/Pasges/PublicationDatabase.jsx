import React, { useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import LoadingBox from '../../Helper/LoadingBox';
import MessageBox from '../../Helper/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPublication } from '../../../action/publicationAction';
import { Link } from 'react-router-dom';

function PublicationDatabase() {
  const dispatch = useDispatch();
  const publicationList = useSelector((state) => state.listPublication);
  const { loading, error, publications } = publicationList;
  // const [data, setData] = useState([]);

  // const getPubliction = async () => {
  //   try {
  //     const response = await Api.get('/lastPublications');
  //     setData(response.data);
  //   } catch (err) {
  //     // not in 200 response range
  //     toast.error(err.message);
  //   }
  // };

  useEffect(() => {
    dispatch(listPublication());
  }, [dispatch]);

  const excerpt = (str) => {
    if (str.length > 50) {
      str = str.substring(0, 50) + '...';
    }
    return str;
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
              {publications.map((item, index) => (
                <Row key={index}>
                  <Col>
                    <img
                      src={`http://localhost:8000/${item.feature_image}`}
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
                          width: '19rem',
                          display: 'flex',
                          padding: '12px',
                          textAlign: 'start',
                          fontSize: '13px',
                        }}
                      >
                        <strong style={{ marginLeft: '-1rem' }}>
                          {excerpt(item.title)}
                          <Link href="#" style={{ textDecoration: 'none' }}>
                            read more »
                          </Link>
                        </strong>
                      </strong>
                    </div>
                  </Col>
                </Row>
              ))}
            </Container>
          </>
        )}
      </Container>
    </>
  );
}

export default PublicationDatabase;
