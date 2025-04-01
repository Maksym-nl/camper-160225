import { useSelector } from 'react-redux';
import { getCamperDetails } from '../../redux/selectors';

export const Features = () => {
  const camper = useSelector(getCamperDetails);

  if (!camper) {
    return null;
  }

  return (
    <div>
      <h3>Features</h3>
      <ul>
        {Object.entries(camper).map(([key, value]) => {
          if (typeof value === 'boolean' && value === true) {
            return <li key={key}>{key}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
};
