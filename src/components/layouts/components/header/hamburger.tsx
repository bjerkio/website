import { Box, Button } from '@theme-ui/components';
import React, { useState } from 'react';

export interface HamburgerProps {
  isOpen: boolean;
  onClick: (setOpen: boolean) => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ isOpen, onClick }) => (
  <Button
    sx={{
      bg: isOpen ? 'white' : 'primary',
      borderRadius: '50%',
      width: '42px',
      height: '42px',
      color: 'black',
      m: 4,
      fontSize: '100px',
      padding: 0,
    }}
    onClick={() => onClick(!isOpen)}
  >
    <Box
      sx={{
        cursor: 'pointer',
        marginLeft: '9px',
        '>div': {
          width: '24px',
          height: '3px',
          bg: 'dark',
          margin: '3px 0',
          transition: '.4s',
        },
        '.bar1.animate': {
          '-webkit-transform': 'rotate(-45deg) translate(-1px, 3px)',
          transform: 'rotate(-45deg) translate(-5px, 4px)',
        },
        '.bar2.animate': {
          opacity: 0,
        },
        '.bar3.animate': {
          '-webkit-transform': 'rotate(45deg) translate(-6px, -7px)',
          transform: 'rotate(45deg) translate(-4px, -4px);',
        },
      }}
    >
      <Box className={isOpen ? 'bar1 animate' : 'bar1'}></Box>
      <Box className={isOpen ? 'bar2 animate' : 'bar2'}></Box>
      <Box className={isOpen ? 'bar3 animate' : 'bar3'}></Box>
    </Box>
  </Button>
);
  
export default Hamburger;
