import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../assets/001.jpg';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BsCaretDown } from 'react-icons/bs';

function Navbar() {
  const [mobile, setMobile] = useState(true);

  return (
    <>
      {/* <nav className="navbar">
        <img src={logo} alt="" className="logo" />

        <ul className="nav-links">
          <Link className="links-tag">
            <li>home</li>
          </Link>
          <Link className="links-tag">
            <li>home</li>
          </Link>
          <Link className="links-tag">
            <li>home</li>
          </Link>
          <Link className="links-tag">
            <li>home</li>
          </Link>
          <Link className="links-tag">
            <li>home</li>
          </Link>
          <Link className="links-tag">
            <li>home</li>
          </Link>
        </ul>
      </nav> */}
      <header>
        <nav className="nav">
          <NavLink href="/" className="band">
            <img src={logo} alt="logo" />
          </NavLink>

          <ul
            className={mobile ? 'mobile-menu-icon' : 'nav-links'}
            onClick={() => setMobile(false)}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'link' : 'a')}
              >
                home
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className={({ isActive }) => (isActive ? 'link' : 'a')}
                to="/company"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                company
                <span>
                  <BsCaretDown color="blue" />
                </span>
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                className={({ isActive }) => (isActive ? 'link' : 'a')}
                to="/products"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                products
                <span>
                  <BsCaretDown color="blue" />
                </span>
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
                className={({ isActive }) => (isActive ? 'link' : 'a')}
                to="/services"
                // className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                services
                <span>
                  <BsCaretDown color="blue" />
                </span>
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
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
            <li>
              <NavLink
                to="/Publictions"
                className={({ isActive }) => (isActive ? 'link' : 'a')}
              >
                PUBLICATIONS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ContactUs"
                className={({ isActive }) => (isActive ? 'link' : 'a')}
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
