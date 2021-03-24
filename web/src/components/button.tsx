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
    transition: '.4s',
    paddingRight: '0em',
    '.animation-arrow-container': {
      paddingLeft: '0.3em',
      '.animation-arrow': {
        '&:after': {
          right: '1em',
        },
        '&:before': {
          width: '1.8em',
        },
      },
    },
  },
  button: {
    transition: '.4s',
    fontSize: 'clamp(8px, 6vw, 16px)',
    color: 'black',
    fontWeight: 'normal',
    cursor: 'pointer',
    borderRadius: '8px',
    paddingTop: '15px',
    paddingBottom: '15px',
    paddingLeft: '20px',
    paddingRight: '0.3em',
  },
  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: 'black',
  },
  '.animation-arrow-container': {
    transition: '.4s',
    '.animation-arrow': {
      minWidth: '30px',
      width: '3em',
      ml: 2,
      '&::after': {
        content: '"" !important',
        display: 'inline-block',
        width: '0.7em',
        height: '0.7em',
        boxShadow: '-3px 3px 0 black',
        transform: 'rotate(-135deg)',
        transition: '.4s',
        verticalAlign: 'middle',
        right: '1em',
        position: 'relative',
      },
      '&::before': {
        width: '1.2em',
        height: '3px',
        background: 'black',
        content: '"" !important',
        transition: '.4s',
        display: 'inline-block',
        verticalAlign: 'middle',
      },
    },
  },
};

const Button: React.FC<ButtonProps> = ({ href, children, ...props }) => (
  <Box sx={styles}>
    <ThemeUIButton {...props}>
      <Link href={href}>
        {children}
        <Box className="animation-arrow-container">
          <Box className="animation-arrow"></Box>
        </Box>
      </Link>
    </ThemeUIButton>
  </Box>
);

export default Button;
