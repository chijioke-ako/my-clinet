import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouter({ component: Component, ...rest }) {
  const userSiginin = useSelector((state) => state.userSignin);
  const { userInfo } = userSiginin;

  return userInfo ? <Outlet /> : <Navigate to="/signin" />;
}
