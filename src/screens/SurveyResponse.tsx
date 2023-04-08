import { useLocation } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import SuccessResponse from 'components/response/SuccessResponse';
import ErrorResponse from 'components/response/ErrorResponse';

export default function ResponseScreen() {
  const location = useLocation();

  return (
    <Box color="gray.600">
      {location.state?.success ? (
        <SuccessResponse response={location.state.response} />
      ) : (
        <ErrorResponse />
      )}
    </Box>
  );
}
