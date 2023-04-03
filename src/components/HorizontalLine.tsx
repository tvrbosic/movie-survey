import { Box } from '@chakra-ui/react';
import { layoutSettings } from 'components/layout/Layout';

export default function HorizontalLine({ ...rest }) {
  return (
    <Box
      marginLeft={[
        `-${layoutSettings.paddings.x.sm}`,
        `-${layoutSettings.paddings.x.md}`,
        `-${layoutSettings.paddings.x.lg}`,
      ]}
      width={[
        `calc(100% + ${layoutSettings.paddings.x.sm}* 2)`,
        `calc(100% + ${layoutSettings.paddings.x.md}* 2)`,
        `calc(100% + ${layoutSettings.paddings.x.lg}* 2)`,
      ]}
      {...rest}
    >
      <hr />
    </Box>
  );
}
