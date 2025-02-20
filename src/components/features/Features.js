import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Features = () => {
  const { id } = useParams();
  useEffect(() => {
    //HTTP-запрос
  }, []);
  return (
    <div>
      <div>
        <h3>
          Технические характеристики выбранного автомобиля(сделать map!!!):{id}
          <p>получить данные с BackEnd</p>
        </h3>
      </div>
      <div>
        <h3>Форма заказа</h3>
      </div>
    </div>
  );
};
