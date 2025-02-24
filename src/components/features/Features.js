import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Features = () => {
  const params = useParams();
  console.log(params);
  useEffect(() => {
    //HTTP-запрос
  }, []);
  return <div></div>;
};
