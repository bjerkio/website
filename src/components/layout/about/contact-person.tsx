import { AspectRatio, Box, Grid, Image, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

export interface ContactPersonProps {
  name: string;
  photoPath: string;
  title: string;
  phone?: string;
  email: string;
  github?: string;
  linkedIn?: string;
}

export const ContactPerson: React.FC<ContactPersonProps> = ({
  name,
  photoPath,
  title,
  phone,
  email,
  github,
  linkedIn,
}) => {
  return (
    <Box justifySelf={{ base: 'none', sm: 'center', md: 'none' }}>
      <AspectRatio w={{ base: '100%', sm: '28.5rem' }} ratio={459 / 527}>
        <Image src={photoPath} alt="Bilde av Bjerkansatt" borderRadius="sm" />
      </AspectRatio>
      <Grid
        templateRows={{
          base: '3rem 2rem 1.5rem 2rem 1.5rem 2rem',
        }}
      >
        <Text
          textStyle="subtitleBlack"
          sx={{
            mt: 3,
          }}
        >
          {name}
        </Text>
        <Text textStyle="contact">{title}</Text>
        <Link as={NextLink} href={`tel:${phone}`} variant="socialsBlack">
          {phone}
        </Link>
        <Link as={NextLink} href={`mailto:${email}`} variant="socialsBlack">
          {email}
        </Link>
        {linkedIn && (
          <Link
            as={NextLink}
            href={linkedIn}
            aria-label={`LinkedIn Profile for ${name}`}
            variant="socials"
          >
            Linkedin
          </Link>
        )}
        {github && (
          <Link
            as={NextLink}
            href={github}
            aria-label={`Github Profile for ${name}`}
            variant="socials"
          >
            Github
          </Link>
        )}
      </Grid>
    </Box>
  );
};
