import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Features = () => {
  const { id } = useParams();
  useEffect(() => {
    //HTTP-запрос
  }, []);
  return (
    <div>
      <div></div>
      <div>
        <h3>Форма заказа</h3>
      </div>
    </div>
  );
};
