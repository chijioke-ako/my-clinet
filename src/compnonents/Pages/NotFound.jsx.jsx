import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1000);
  }, []);
  return (
    <h1 style={{ marginTop: '6rem', textAlign: 'center' }}>404 Not Found</h1>
  );
};

export default NotFound;
