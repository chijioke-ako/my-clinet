import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/001.jpg';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

function Nvabart() {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        style={{
          borderBottom: 'solid 3px blue',
          marginBottom: '4px',
          position: 'fixed',
          zIndex: 100,
          width: '100%',
        }}
      >
        <Container>
          <Navbar.Brand to="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <div>
              <Nav className="me-auto">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'hef'
                  }
                >
                  HOME
                </NavLink>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    COMPANY
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="About">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/OurTeam">
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Partners">
                        Partners
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Carrers">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    PRODUCTS
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/OpenbravoERP">
                        Openbravo ERP
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Pcms">
                        Pcms
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SERVICES
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/Software development"
                      >
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/GIS Techology & Property Valuation"
                      >
                        GIS Technology & Property Valuation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/E Business & IT Consulting"
                      >
                        E Business & IT Consulting
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    <Link className="dropdown-item" to="/CustomerZone">
                      Customer Zone
                    </Link>
                  </ul>
                </li>
                <NavLink
                  to="/Publictions"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'hef'
                  }
                >
                  PUBLICATIONS
                </NavLink>
                <NavLink
                  to="/ContactUs"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'hef'
                  }
                >
                  CONTACT US
                </NavLink>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Nvabart;
