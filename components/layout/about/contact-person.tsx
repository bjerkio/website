import {
    AspectRatio,
    Box,
    Flex,
    Grid,
    Image,
    Link,
    Text,
  } from '@chakra-ui/react';
  
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
      <Flex
        sx={{
          flexDirection: 'column',
          alignSelf: 'center',
          mb: ['20px', '60px', '60px'],
        }}
      >
        <Grid
          templateColumns={{ base: 'auto', md: '459px 459px' }}
          sx={{
            display: 'flex',
          }}
        >
          <Box sx={{ width: '459px' }}>
            <AspectRatio ratio={459 / 527}>
              <Image
                src={photoPath}
                alt={"Bilde av Bjerkansatt"}
                sx={{
                  maxwidth: '459px',
                  maxheight: '527px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                }}
              />
            </AspectRatio>
            <Grid
              templateRows={{
                base: 'auto',
                md: '3rem 2rem 1.5rem 2rem 2rem 2rem',
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
                color="black"
                href={`tel:${phone}`}
                fontSize={{ base: 'base' }}
              >
                {phone}
              </Link>
              <Link
                color="black"
                href={`mailto:${email}`}
                fontSize={{ base: 'base' }}
              >
                {email}
              </Link>
              {linkedIn && (
                <Link
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
        </Grid>
      </Flex>
    );
  };
  