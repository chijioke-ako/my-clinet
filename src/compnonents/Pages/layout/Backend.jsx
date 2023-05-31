import { Outlet } from 'react-router-dom';
import Header from '../../Backend/Header';
import Footer from '../../Backend/footer';

function Backend({ props, setAuth }) {
  return (
    <>
      <div>
        <Header setAuth={setAuth} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Backend;
