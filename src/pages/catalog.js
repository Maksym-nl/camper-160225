import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCampers } from 'services/api';
import { CamperList } from 'components/camperList/CamperList';
import { LoadMoreBtn } from 'components/loadMoreBtn/LoadMoreBtn';
import { Equipment } from 'components/equipment/Equipment';

export default function CatalogPage() {
  const params = useParams();
  const [campers, setCampers] = useState([]);
  console.log(params);
  useEffect(() => {
    async function getCamperList() {
      try {
        const responce = await fetchCampers();
        setCampers(responce.items);
      } catch (error) {}
    }
    getCamperList();
  }, []);
  return (
    <div>
      <Equipment camper={campers} />
      <CamperList campers={campers} />
      <LoadMoreBtn />
    </div>
  );
}
