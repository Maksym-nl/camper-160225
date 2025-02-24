import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCamperById } from 'services/api';
import { Reviews } from 'components/reviews/Reviews';
import { Features } from 'components/features/Features';
import { OrderForm } from 'components/orderForm/OrderForm';
import { CamperCard } from 'components/camperCard/CamperCard';

export default function CamperCardPage() {
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
  // console.log(camper);
  return (
    <div>
      <CamperCard camper={camper} />

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
