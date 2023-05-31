import logo from '../../assets/001.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Navbar.css';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from '../Helper/Api';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';

function Header({ setAuth }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      setAuth(false);
      toast.success('Logout Successfully');
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getName();
    getRoles();
  }, []);

  const getName = async () => {
    try {
      const response = await Api.get('/dashbroad', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response) {
        setName(response.data.firstname);
      }
    } catch (err) {
      // not in 200 response range
      console.log(err.message);
    }
  };

  const getRoles = async () => {
    try {
      const response = await Api.get('/admin', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.data === true) console.log(response.data.user);
      setRole(response.data.user);
    } catch (err) {
      // not in 200 response range
      console.log(err.message);
    }
  };

  return (
    <>
      <>
        <Navbar
          bg="light"
          expand="lg"
          style={{
            borderBottom: 'solid 3px blue',
            marginBottom: '4px',
          }}
        >
          <Container>
            <Navbar.Brand to="/HomeB">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <div>
                <Nav className="me-auto">
                  <NavLink
                    to="/HomeB"
                    className={({ isActive }) =>
                      isActive ? 'active-link' : 'hef'
                    }
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    to="/HomeB/PublicationB"
                    className={({ isActive }) =>
                      isActive ? 'active-link' : 'hef'
                    }
                  >
                    PUBLICATIONS
                  </NavLink>
                  <NavLink
                    to="/HomeB/PartnersB"
                    className={({ isActive }) =>
                      isActive ? 'active-link' : 'hef'
                    }
                  >
                    PARTNERS
                  </NavLink>
                  {role === 'admin' && (
                    <NavLink
                      to="/HomeB/users"
                      className={({ isActive }) =>
                        isActive ? 'active-link' : 'hef'
                      }
                    >
                      Users
                    </NavLink>
                  )}

                  <NavLink
                    to="/HomeB/Resumes"
                    className={({ isActive }) =>
                      isActive ? 'active-link' : 'hef'
                    }
                  >
                    Resumes
                  </NavLink>
                  <Button
                    type="button"
                    className="btn btn-info"
                    onClick={(e) => logout(e)}
                  >
                    Logout
                  </Button>
                  <div
                    style={{
                      marginTop: '12px',
                      marginLeft: '26px',
                    }}
                  >
                    <h6
                      style={{ color: 'rgb(64 124 185)', marginLeft: '1rem' }}
                    >
                      welcome {name}
                    </h6>
                  </div>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </>
  );
}

export default Header;
