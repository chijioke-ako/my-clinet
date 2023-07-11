import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import NavbarFont from '../Navbar';
// import Navbart from '../Navbar';

function Frontend(props) {
  return (
    <>
      <NavbarFont />
      <Outlet />
      <Footer />
    </>
  );
}

export default Frontend;
