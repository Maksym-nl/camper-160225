import { useEffect } from 'react';
import { Outlet, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCamperDetails,
  getCamperDetailsLoading,
  getCamperDetailsError,
} from '../redux/selectors';
import {
  getCamperDetails as fetchCamperDetails,
  clearCamperDetails,
} from '../redux/camperDetailsSlice';
import { Loader } from '../components/Loader/Loader';
// import { OptionsCamper } from 'components/OptionsCamper/OptionsCamper';
// import { VehicleDetails } from 'components/VehicleDetails/VehicleDetails';

export default function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(getCamperDetails);
  const isLoading = useSelector(getCamperDetailsLoading);
  const error = useSelector(getCamperDetailsError);

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
    return () => {
      dispatch(clearCamperDetails());
    };
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!camper) {
    return <div>Кемпер не найден</div>;
  }

  return (
    <div>
      {/* <CamperList campers={[camper]} /> */}
      <h2>{camper.name}</h2>
      <p>{camper.rating}</p>
      <p>{camper.location}</p>
      <ul>
        {camper.gallery?.map(image => {
          return (
            <li key={image.id}>
              <img src={image.original} alt={camper.name} width={200} />
            </li>
          );
        })}
      </ul>
      <p>{camper.description}</p>
      {/* <OptionsCamper campers={[camper]} /> */}
      {/* <VehicleDetails campers={[camper]} /> */}
      <div>
        <Link to="features">Features</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
}
