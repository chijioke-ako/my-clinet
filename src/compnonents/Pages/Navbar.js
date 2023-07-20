import './Navbarfont.css';
import logo from '../../assets/001.jpg';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md p-0"
        style={{
          borderBottom: 'solid 3px blue',
          position: 'fixed',
          width: '100%',
          zIndex: '100',
          background: '#fff',
        }}
      >
        <div className="container">
          <img src={logo} alt="logo" className="navbar-brand" />
        </div>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-label="Expand Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'links' : 'nav-link')}
              >
                home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'links' : 'nav-link dropdown-toggle'
                }
                to="/company"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                company
              </NavLink>
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/company/About">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/company/OurTeam">
                    Our Team
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/company/Partners">
                    Partners
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/company/Carrers">
                    Careers
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'links' : 'nav-link dropdown-toggle'
                }
                to="/products"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                products
              </NavLink>
              <ul class="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/products/OpenbravoERP">
                    Openbravo ERP
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/products/Pcms">
                    Pcms
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'links' : 'nav-link dropdown-toggle'
                }
                to="/services"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                services
              </NavLink>
              <ul class="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/services/Software development"
                  >
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/services/GIS Techology & Property Valuation"
                  >
                    GIS Technology & Property Valuation
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/services/E Business & IT Consulting"
                  >
                    E Business & IT Consulting
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <Link className="dropdown-item" to="/services/CustomerZone">
                  Customer Zone
                </Link>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink
                to="/Publictions"
                className={({ isActive }) => (isActive ? 'links' : 'nav-link')}
              >
                Publication
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ContactUs"
                className={({ isActive }) => (isActive ? 'links' : 'nav-link')}
              >
                ContactUs
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
