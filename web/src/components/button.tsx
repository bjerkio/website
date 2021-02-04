/** @jsx */
import {
  Box,
  Link,
  Button as ThemeUIButton,
  ButtonProps as ThemeUIButtonProps,
} from '@theme-ui/components';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';

interface ButtonProps extends ThemeUIButtonProps {
  href: string;
}

const styles: SystemStyleObject = {
  width: 'auto',
  displayContent: 'center',
  'button:hover': {
    '.animation-arrow': {
      '&:after': {
        right: '0.8em',
      },
      '&:before': {
        width: '1.7em',
      },
    },
  },
  button: {
    fontSize: 'clamp(8px, 6vw, 16px)',
    color: 'black',
    fontWeight: 'normal',
    cursor: 'pointer',
  },
  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'black',
  },
  '.animation-arrow': {
    minWidth: '35px',
    width: '3em',
    ml: 2,
    '&::after': {
      content: '"" !important',
      display: 'inline-block',
      width: '0.7em',
      height: '0.7em',
      boxShadow: '-3px 3px 0 black',
      transform: 'rotate(-135deg)',
      transition: '.5s',
      verticalAlign: 'middle',
      right: '1em',
      position: 'relative',
    },
    '&::before': {
      width: '1.4em',
      height: '3px',
      background: 'black',
      content: '"" !important',
      transition: '.5s',
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
};

const Button: React.FC<ButtonProps> = ({ href, children, ...props }) => (
  <Box sx={styles}>
    <ThemeUIButton {...props}>
      <Link href={href}>
        {children}
        <Box className="animation-arrow"></Box>
      </Link>
    </ThemeUIButton>
  </Box>
);

export default Button;
