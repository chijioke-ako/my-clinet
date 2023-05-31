import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api from '../../Helper/Api';
import { toast } from 'react-toastify';

function UpdatePage() {
  const editor = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getPublication(id);
    }
  }, [id]);

  const getPublication = async (id) => {
    try {
      const response = await Api.get(`/publications/${id}`);

      // setFormValues({ ...response.data.data.publications });
      // setBody(response.data.data.publications.body);
      console.log(response);
    } catch (err) {
      // not in 200 response range
      toast.error(err.message);
    }
  };

  // const classes = useStyles();
  const history = useNavigate();
  return <>P UpdatePage</>;
}

export default UpdatePage;
