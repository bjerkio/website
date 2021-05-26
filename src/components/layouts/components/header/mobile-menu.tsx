import { BoxProps, Button, Flex, Grid, Link as TLink } from '@theme-ui/components';
import { Link } from 'gatsby';
import React from 'react';
import { openPopupWidget } from 'react-calendly';
import { FormattedMessage } from 'react-intl';
import { Logo } from '../logo';


const MobileMenu: React.FC<BoxProps> = ({ ...props }) => {
  const onClick = () =>
    openPopupWidget({ url: 'https://calendly.com/simen-a-w-olsen' });
  return (
    <Flex
      sx={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        bg: 'primary',
        p: 4,
        flexDirection: 'column',
      }}
      {...props}
    >
      <Link to="/">
        <Logo dotColor="white" sx={{ color: 'black', width: '4em', mb: 5 }} />
      </Link>
      <Flex
        sx={{
          flexDirection: 'column',
          a: {
            variant: 'link',
            my: 3,
            fontSize: 4,
          },
        }}
      >
        <Link to="/services">
          <FormattedMessage id="nav-services" defaultMessage="Services" />
        </Link>
        <Link to="/about">
          <FormattedMessage id="nav-about" defaultMessage="About" />
        </Link>
        <Link to="/contact">
          <FormattedMessage id="nav-contact" defaultMessage="Contact" />
        </Link>
      </Flex>
      <Grid sx={{ mt: 5, fontWeight: 500 }} columns="1fr 1fr">
        <TLink
          href="tel:+4722120512"
          sx={{
            variant: 'buttons.primary',
            textDecoration: 'none',
            bg: 'secondary',
            color: 'lightGreen',
            textAlign: 'center',
          }}
        >
          Call us now
        </TLink>
        <Button onClick={onClick} sx={{ bg: 'secondary', color: 'lightGreen' }}>
          Book a meeting
        </Button>
      </Grid>
    </Flex>
  );
};

export default MobileMenu;
