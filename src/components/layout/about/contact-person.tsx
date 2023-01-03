import {
    AspectRatio,
    Box,
    Flex,
    Grid,
    GridItem,
    Image,
    Link,
    Text,
  } from '@chakra-ui/react';
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
          <Box justifySelf={{base:"none",sm:"center",md:"none"}}>
            <AspectRatio w={{base:"100%", sm:"459px"}} ratio={459 / 527}>
              <Image
                src={photoPath}
                alt="Bilde av Bjerkansatt"
                borderRadius= '6px'
              />
            </AspectRatio>
            <Grid
              templateRows={{
                base: '3rem 2rem 1.5rem 2rem 1.5rem 2rem',
              }}
            >
              <Text
                sx={{
                  fontSize: 'base',
                  fontWeight: 'semibold',
                  mt: '20px',
                  color: 'black',
                }}
              >
                {name}
              </Text>
              <Text textStyle={{ base: 'contact' }}>{title}</Text>
              <Link
                as={NextLink}
                color="black"
                href={`tel:${phone}`}
                fontSize={{ base: 'base' }}
              >
                {phone}
              </Link>
              <Link
                as={NextLink}
                color="black"
                href={`mailto:${email}`}
                fontSize={{ base: 'base' }}
              >
                {email}
              </Link>
              {linkedIn && (
                <Link
                  as={NextLink}
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn Profile for ${name}`}
                  sx={{
                    cursor: 'pointer',
                    fontSize: { base: 'base' },
                    color: 'blue100',
                    textDecoration: 'none',
                  }}
                >
                  Linkedin
                </Link>
              )}
              {github && (
                <Link
                  as={NextLink}
                  variant="socials"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Github Profile for ${name}`}
                  sx={{
                    cursor: 'pointer',
                    fontSize: { base: 'base' },
                    color: 'blue100',
                    textDecoration: 'none',
                  }}
                >
                  Github
                </Link>
              )}
            </Grid>
          </Box>
    );
  };
  