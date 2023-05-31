import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Navbart from '../Navbar';

function Frontend(props) {
  return (
    <>
      <Navbart />
      <Outlet />
      <Footer />
    </>
  );
}

export default Frontend;
