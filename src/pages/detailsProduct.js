import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailsCamperPage = () => {
  const params = useParams();
  console.log(params);
  useEffect(() => {}, []);
  return <div></div>;
};

export default DetailsCamperPage;
