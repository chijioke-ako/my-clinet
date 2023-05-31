import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Frontend from './compnonents/Pages/layout/Frontend';
import Home from './compnonents/Pages/Home';
import Backend from './compnonents/Pages/layout/Backend';
import HomeB from './compnonents/Backend/HomeB';
import Contact from './compnonents/Pages/Contact';
import Publications from './compnonents/Pages/Publications';
import AboutUs from './compnonents/Pages/Sub_pages/AboutUs';
import OurTerms from './compnonents/Pages/Sub_pages/OurTerms';
import Partners from './compnonents/Pages/Sub_pages/Partners';
import Careers from './compnonents/Pages/Sub_pages/Carees';
import OpenbravoERP from './compnonents/Pages/OpenbravoERP';
import Pcms from './compnonents/Pages/Pcms';
import Software from './compnonents/Pages/Software';
import EBusness from './compnonents/Pages/EBusness';
import Gis from './compnonents/Pages/Gis';
import Coustom from './compnonents/Pages/Coustom';
import ChiemekaNgwu from './compnonents/Pages/ChiemekaNgwu';
import OluwoleAdetiba from './compnonents/Pages/OluwoleAetiba';
import PaulIke from './compnonents/Pages/PaulIke';
import IkemOkoyedike from './compnonents/Pages/IkemOkoyedike';
import VincentOkeke from './compnonents/Pages/VincentOkeke';
import Crude from './compnonents/Pages/Crude';
import LastPublicationsViwe from './compnonents/Pages/LastPublicationsViwe';
import PublicationB from './compnonents/Backend/PublicationB';
import NotFound from './compnonents/Pages/NotFound.jsx';
import LonginFrom from './compnonents/Backend/auth/LonginForm';
import PasswordRest from './compnonents/Backend/Pasges/PasswordRest';
import ForgetPassword from './compnonents/Backend/Pasges/ForgetPassword';
import Register from './compnonents/Backend/auth/Register';
import PartnersB from './compnonents/Backend/Pasges/PartnersB';
import Resumes from './compnonents/Backend/Pasges/Resumes';
import Users from './compnonents/Backend/Pasges/Users';
import PublicationAdd from './compnonents/Backend/Pasges/PublicationAdd';
import PublicationView from './compnonents/Backend/Pasges/PublicationView';
import ViewUsers from './compnonents/Backend/Pasges/ViewUsers';
import UpdatePage from './compnonents/Backend/Pasges/UpdatePage';
import UsersUpdate from './compnonents/Backend/Pasges/UsersUpdate';
import Api from './compnonents/Helper/Api';

function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = () => {
    setIsAuthenticated((current) => !current);
    // console.log(isAuthenticated); // is false
  };

  useEffect(() => {
    Api.get('/verify', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((response) => {
      if (response.data.loggedIn === true) {
        setAuth(response.data.loggedIn);
      }
    });
  }, []);
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Frontend />}>
          <Route index element={<Home />} />
          <Route path="ContactUs" element={<Contact />} />
          <Route path="Publictions" element={<Publications />} />
          <Route path="About" element={<AboutUs />} />
          <Route path="OurTeam" element={<OurTerms />} />
          <Route path="Partners" element={<Partners />} />
          <Route path="Carrers" element={<Careers />} />
          <Route path="OpenbravoERP" element={<OpenbravoERP />} />
          <Route path="Pcms" element={<Pcms />} />
          <Route path="Software development" element={<Software />} />
          <Route path="E Business & IT Consulting" element={<EBusness />} />
          <Route path="GIS Techology & Property Valuation" element={<Gis />} />
          <Route path="CustomerZone" element={<Coustom />} />
          <Route path="Chiemeka_Ngwu" element={<ChiemekaNgwu />} />
          <Route path="Oluwole_Adetiba" element={<OluwoleAdetiba />} />
          <Route path="Paul_Ike" element={<PaulIke />} />
          <Route path="Ikem_Okoyedike" element={<IkemOkoyedike />} />
          <Route path="Vincent_Okeke" element={<VincentOkeke />} />
          <Route path="Cocis" element={<Crude />} />
          <Route
            path="lastPublicationsViwe/:id"
            element={<LastPublicationsViwe />}
          />
        </Route>
        {/* Backend */}

        <Route
          path="/HomeB"
          element={
            isAuthenticated ? (
              <Backend setAuth={setAuth} />
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route index element={<HomeB setAuth={setAuth} />} />
          <Route
            path="PublicationB"
            element={
              isAuthenticated ? (
                <PublicationB setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="register"
            element={
              isAuthenticated ? (
                <Register setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="PartnersB"
            element={
              isAuthenticated ? (
                <PartnersB setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="Resumes"
            element={
              isAuthenticated ? (
                <Resumes setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="users"
            element={
              isAuthenticated ? (
                <Users setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="ViewAllPublication"
            element={
              isAuthenticated ? (
                <PublicationB setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="AddNewPublication"
            element={
              isAuthenticated ? (
                <PublicationAdd setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="ViewAllPublication"
            element={
              isAuthenticated ? (
                <PublicationB setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="usersDetails"
            element={
              isAuthenticated ? (
                <Users setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="PublicationView/:id"
            element={
              isAuthenticated ? (
                <PublicationView setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="usersDetails"
            element={
              isAuthenticated ? (
                <Users setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="PublicationView/:id" element={<PublicationView />} />
          <Route
            path="users/:id"
            element={
              isAuthenticated ? (
                <ViewUsers setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="publication/:id/update"
            element={
              isAuthenticated ? (
                <UpdatePage setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="users/:id/update"
            element={
              isAuthenticated ? (
                <UsersUpdate setAuth={setAuth} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Route>
        <Route path="/rest-password" element={<PasswordRest />} />
        <Route
          path="/forget_password/:id/:token"
          element={<ForgetPassword />}
        />

        <Route path="*" element={<NotFound />} />
        <Route
          path="login"
          element={
            !isAuthenticated ? (
              <LonginFrom setAuth={setAuth} />
            ) : (
              <Navigate to="/HomeB" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
