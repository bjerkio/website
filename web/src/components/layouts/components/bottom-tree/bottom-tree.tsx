import React from 'react';
import { Box, Image } from 'theme-ui';
import Tree from '../../../../../static/Tree.svg';

const BottomTree: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        textAlign: 'right',
        mb: ['-118px', '-118px', '-168px'],
      }}
    >
      <Image
        src={Tree}
        sx={{ width: ['115px', '115px', '228px'], mr: '30px' }}
      />
    </Box>
  );
};

export default BottomTree;
