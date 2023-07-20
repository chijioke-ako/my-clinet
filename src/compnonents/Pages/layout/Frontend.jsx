import { Outlet } from 'react-router-dom';
import Footer from '../Footer';

import NavBar from '../Navbar';
// import Navbart from '../Navbar';

function Frontend(props) {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Frontend;
