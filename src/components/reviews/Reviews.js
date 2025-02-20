import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  useEffect(() => {
    //HTTP-запрос
  }, []);
  const { id } = useParams();
  return (
    <div>
      <h3>ОТЗЫВЫ(сделать map!!!):{id}</h3>
      <p>получить данные с BackEnd</p>
    </div>
  );
};
