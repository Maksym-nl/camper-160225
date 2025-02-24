import { useEffect, useState } from 'react';
import axios from 'axios';

export const Equipment = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/')
      .then(response => {
        console.log('Данные загружены:', response.data);
        setCampers(response.data);
      })
      .catch(error => {
        console.error('Ошибка при загрузке:', error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div>
      <h2>Оборудование кемперов</h2>
      <ul>
        {campers.map(({ id, name, ac, kitchen, bathroom }) => (
          <li key={id}>
            <h3>{name}</h3>
            <p>
              <strong>AC:</strong> {ac ? '✅ Есть' : '❌ Нет'}
            </p>
            <p>
              <strong>Кухня:</strong> {kitchen ? '✅ Есть' : '❌ Нет'}
            </p>
            <p>
              <strong>Ванная:</strong> {bathroom ? '✅ Есть' : '❌ Нет'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
