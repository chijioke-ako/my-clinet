import { Link } from 'react-router-dom';
import Tweets from '../Helper/Tweets';
import './Ebus.css';
import { Breadcrumb, Button, Col, Container, Row } from 'react-bootstrap';
import PublicationDatabase from '../Backend/Pasges/PublicationDatabase';

const style = {
  fontSize: '24px',
  marginTop: '1rem',
  borderLeft: 'solid 12px #E1F0FF',
  fontWeight: 'bold',
  borderBottom: 'solid thin #E1F0FF',
  fontFamily: ['Miriam Libre '].join(','),
  width: '73%',
};

function EBusness() {
  return (
    <>
      <br />
      <br /> <br />
      <div className="ebus-background">
        <h1 className="ebus-header">E Business & IT Consulting</h1>
      </div>
      <div>
        <Container>
          <Row>
            <Col sm={8}>
              <div
                style={{
                  backgroundColor: '#E1F0FF',
                  marginBottom: '20px',
                  marginTop: '1rem',
                  borderRadius: '9px',
                  paddingTop: '4px',
                  paddingLeft: '12px',
                  height: '2rem',
                }}
              >
                <div>
                  <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/Home' }}>
                      Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Services</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                      E Business & IT Consulting
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
              </div>
              <div>
                <Container>
                  <Row>
                    <Col>
                      <p>
                        Our company appreciates the titanic shift in where
                        business is done, how business is done and who does
                        what. The worldwide expansion of the internet has
                        considerably contributed to the transformation of trade
                        and store transactions. E-commerce, or electronic
                        commerce, largely means buying and/or selling products
                        through the internet and is commonly associated with
                        online shopping. E-commerce according to Statistics and
                        Market Data state that 40 percent of worldwide internet
                        users have bought products or goods online via desktop,
                        mobile, tablet or other online devices as the world
                        shrinks. This amounts to more than 1 billion online
                        buyers and is projected to continuously grow. Businesses
                        are consciously or unconsciously part of it.
                      </p>
                      <p>
                        There are several different types of e-commerce, the
                        most prevalent being B2B (business-to-business), B2C
                        (business-to-consumer) and C2C (consumer-to-consumer)
                        e-commerce. Furthermore, mobile commerce in the shape of
                        buying and selling goods and content via mobile devices
                        such as smartphones is also on the rise. The growth of
                        Mobile commerce is another exciting trend to watch in
                        terms of e-commerce statistics, considering the
                        popularity and widespread use of smartphones and growing
                        usage of tablets.
                      </p>
                      <p>
                        In all there is no doubt that the internet is constantly
                        changing our lives and fundamentally changing the shape
                        of business. The use of internet is not only huge but
                        continues to grow at astounding rate. The opportunity to
                        increase revenue, improve customer satisfaction, reduce
                        cost and reach more people is immense.
                      </p>
                      <div>
                        <p>
                          Only companies that understand the business terrain
                          can offer solutions that digitise businesses. In this
                          period of growing cost and plummeting profit, you need
                          the edge - the solution edge.
                        </p>
                      </div>
                      <p>
                        We also offer IT consulting by helping organization
                        streamline their processes and improve efficiencies
                        through the design and implementation of cost-effective
                        E-business solutions. Using different implementation
                        methodologies, we can help maximize IT investments.
                      </p>
                      <p>
                        We help organizations and government agencies in the
                        provision and deployment of:
                      </p>
                      <ul>
                        <li>
                          Corporate IT Solutions & Strategy (Assessment,
                          Selection & Implementation)
                        </li>
                        <li>Content and document management solutions</li>
                        <li>
                          Provision of excellent IT advice and implementation
                          that help companies reduce risk and increase
                          potentials for success
                        </li>
                        <li>
                          Messaging and collaboration solutions - Microsoft
                          Exchange, Lotus Notes, etc.
                        </li>
                        <li>Workflow design & delivery</li>
                        <li>Portal design & deployment</li>
                      </ul>

                      <p>On the Consulting side, we can:</p>
                      <ul>
                        <li>Provide your e-business transformation</li>
                        <li>
                          Assist you with the ability to scale without
                          disruption
                        </li>
                        <li>Drive new revenue and accelerate time to market</li>
                        <li>
                          Differentiate your services from the competitors in
                          order to retain customer base
                        </li>
                        <li>
                          Provide excellent IT advice that helps companies
                          reduce risk and increase potential for success
                        </li>
                        <li>Leverage core and existing IT investments</li>
                        <li>
                          Enable single, role-based gateway to all your critical
                          information, including applications, those of other
                          vendors, external content, and more...
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
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
  );
}

export default EBusness;
