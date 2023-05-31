import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import api from 'axios';

function LastestPublication() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await api.get('http://localhost:8000/');
    if (response.status === 200) {
      setData(response.data);
      console.log(response.data);
    } else {
      toast.error('something want wrong');
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Container>{data}</Container>
    </>
  );
}

export default LastestPublication;
