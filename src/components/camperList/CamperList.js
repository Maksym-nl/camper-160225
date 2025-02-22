import { ShowMoreBtn } from 'components/showMore/ShowMore';
export const CamperList = ({ campers }) => {
  console.log(campers);
  return (
    <ul>
      {campers.map(camper => {
        return (
          <li key={camper.id}>
            <p>{camper.name}</p>
            <p>{camper.price}</p>
            <p>{camper.rating}</p>
            <p>{camper.location}</p>
            <p>{camper.description}</p>
            <img src={camper.gallery.original} alt={camper.name} width="200" />
            <ShowMoreBtn />
          </li>
        );
      })}
    </ul>
  );
};
