import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersSlice';

const CampersList = () => {
  console.log('Вызываем fetchCampers');
  const dispatch = useDispatch();
  const {
    items: campers,
    loading,
    error,
  } = useSelector(state => state.campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <h2>Список камперов</h2>
      <ul>
        {campers.map(camper => (
          <li key={camper.id}>
            <strong>{camper.name}</strong> - Возраст: {camper.age}, Опыт:{' '}
            {camper.experience} лет
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
