import { ShMoreBtn } from './ShowMoreBtn.styled';
import { useNavigate } from 'react-router-dom';
export const ShowMoreBtn = ({ id }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/campers/${id}`);
  };
  return (
    <ShMoreBtn type="button" onClick={() => navigate(`/campers/${id}`)}>
      Show More
    </ShMoreBtn>
  );
};
