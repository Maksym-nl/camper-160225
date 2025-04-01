import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

const RatingItem = () => {
  const [value, setValue] = React.useState();

  return (
    <Box>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
};
export default RatingItem;
