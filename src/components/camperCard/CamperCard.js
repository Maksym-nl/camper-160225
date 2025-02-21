import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCamperById } from 'services/api';
const CamperCard = () => {
  const params = useParams();
  console.log(params);
  useEffect(() => {
    async function getCampers() {
      try {
        const fetchCampers = await fetchCamperById(params.id);
      } catch (error) {}
    }
    getCampers();
  }, [params.id]);
  return <div></div>;
};
export default CamperCard;
