import { useEffect } from 'react';
import { Container, Stack } from 'react-bootstrap';
import parser from 'html-react-parser';
import LoadingBox from '../Helper/LoadingBox';
import MessageBox from '../Helper/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPartners } from '../../action/partnersAction';

function PartnersList() {
  const dispatch = useDispatch();
  const partnerList = useSelector((state) => state.listPartners);
  const { loading, error, partners } = partnerList;

  useEffect(() => {
    dispatch(listPartners());
  }, [dispatch]);

  return (
    <>
      <Container>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>
            {error}
            <h4> No currently partner available !</h4>
          </MessageBox>
        ) : (
          <>
            <Container>
              {partners.map((result, index) => (
                <div key={index}>
                  <Container>
                    <Stack direction="horizontal" gap={3}>
                      <div
                        className=" border"
                        style={{
                          marginBottom: '12px',
                        }}
                      >
                        <a href={result.url}>
                          <img
                            src={`http://localhost:8000/${result.logo} `}
                            alt={result.url}
                            style={{
                              height: '131px',
                            }}
                          />
                        </a>
                      </div>
                      <div className="  ms-auto" style={{ fontSize: '13px' }}>
                        <div>{parser(result.profile)}</div>
                        <div>
                          <a href={result.url}> {result.url}</a>
                        </div>
                      </div>
                    </Stack>
                  </Container>
                </div>
              ))}
            </Container>
          </>
        )}
      </Container>
    </>
  );
}

export default PartnersList;
