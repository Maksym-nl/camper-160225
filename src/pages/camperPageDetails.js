import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCamperById } from 'api/api';
import { Container } from '../components/Container/Container';
import { VehicleDetails } from '../components/VehicleDetails/VehicleDetails';
import { Features } from '../components/Features/Features.jsx';
import { Reviews } from '../components/Reviews/Reviews.jsx';
import { OrderForm } from 'components/orderForm/OrderForm';
export default function CamperCard() {
  const [camper, setCampers] = useState([]);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    async function getCampers() {
      try {
        const responce = await fetchCamperById(params.id);
        setCampers(responce);
      } catch (error) {}
    }
    getCampers();
  }, [params.id]);
  console.log(camper);
  return (
    <div>
      <p>{camper.name}</p>
      <ul>
        <li>
          <p>{camper.rating}</p>
        </li>
        <li>
          <p>{camper.location}</p>
        </li>
      </ul>
      <p>{camper.price}</p>
      <ul>
        {camper.gallery?.map((image, index) => (
          <li key={index}>
            <img src={image.thumb} alt={`Images ${index + 1}`} />
          </li>
        ))}
      </ul>
      <p>{camper.description}</p>
      <div>
        <Link>
          <Reviews />
        </Link>
        <Link>
          <Features />
        </Link>
      </div>
      <div>
        <OrderForm />
      </div>
    </div>
  );
}
