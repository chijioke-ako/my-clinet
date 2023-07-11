import './App.css';
import { Routes, Route } from 'react-router-dom';
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
// import Coustom from './compnonents/Pages/Coustom';
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
import PrivateRouter from './compnonents/Helper/PrivateRouter';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Frontend />}>
          <Route index element={<Home />} />
          <Route path="ContactUs" element={<Contact />} />
          <Route path="Publictions" element={<Publications />} />

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
        <Route path="/company" element={<Frontend />}>
          <Route index element={<AboutUs />} />
          <Route path="About" element={<AboutUs />} />
          <Route path="OurTeam" element={<OurTerms />} />
          <Route path="Partners" element={<Partners />} />
          <Route path="Carrers" element={<Careers />} />
        </Route>

        <Route path="/products" element={<Frontend />}>
          <Route index element={<OpenbravoERP />} />
          <Route path="OpenbravoERP" element={<OpenbravoERP />} />
          <Route path="Pcms" element={<Pcms />} />
        </Route>

        <Route path="/services" element={<Frontend />}>
          <Route index element={<Software />} />
          <Route path="Software development" element={<Software />} />
          <Route path="E Business & IT Consulting" element={<EBusness />} />
          <Route path="GIS Techology & Property Valuation" element={<Gis />} />
          {/* <Route path="/ok" element={<Coustom />} /> */}
        </Route>
        {/* Backend */}

        <Route exact path="/" element={<PrivateRouter />}>
          <Route path="/HomeB" element={<Backend />}>
            <Route index element={<HomeB />} />
            <Route path="PublicationB" element={<PublicationB />} />
            <Route path="register" element={<Register />} />
            <Route path="PartnersB" element={<PartnersB />} />
            <Route path="Resumes" element={<Resumes />} />
            <Route path="users" element={<Users />} />
            <Route path="ViewAllPublication" element={<PublicationB />} />
            <Route path="AddNewPublication" element={<PublicationAdd />} />
            <Route path="ViewAllPublication" element={<PublicationB />} />
            <Route path="usersDetails" element={<Users />} />
            <Route path="PublicationView/:id" element={<PublicationView />} />
            <Route path="usersDetails" element={<Users />} />
            <Route path="PublicationView/:id" element={<PublicationView />} />
            <Route path="users/:id" element={<ViewUsers />} />
            <Route path="publication/:id/update" element={<UpdatePage />} />
            <Route path="users/:id/update" element={<UsersUpdate />} />
          </Route>
        </Route>

        <Route path="/rest-password" element={<PasswordRest />} />
        <Route
          path="/forget_password/:id/:token"
          element={<ForgetPassword />}
        />

        <Route path="*" element={<NotFound />} />
        <Route path="signin" element={<LonginFrom />} />
      </Routes>
    </div>
  );
}

export default App;
