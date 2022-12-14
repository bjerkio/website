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
        templateColumns={['auto', '459px 459px', '459px, 459px']}
        sx={{
          display: 'flex',
        }}
      >
        <Box sx={{ width: '459px' }}>
          <AspectRatio ratio={459 / 527}>
            <Image
              src={photoPath}
              sx={{
                height: '100%',
                width: '100%',
                maxwidth: '459px',
                maxheight: '527px',
                objectFit: 'cover',
                borderRadius: '6px',
              }}
            />
          </AspectRatio>
          <Grid
            templateRows={[
              'auto',
              '26px 21px 24px 24px 24px 24px',
              '26px 21px 24px 24px 24px 24px',
            ]}
          >
            <Text
              sx={{
                fontSize: 2,
                fontWeight: '600',
                mt: '20px',
                color: 'black',
              }}
            >
              {name}
            </Text>
            <Text textStyle="contact">{title}</Text>
            <Link color="black" href={`tel:${phone}`}>
              {phone}
            </Link>
            <Link color="black" href={`mailto:${email}`} mt="-10px">
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
                  fontSize: 0,
                  color: 'blue100',
                  textDecoration: 'none',
                  ':hover': {
                    textDecoration: 'underline',
                  },
                  wordWrap: 'break-word',
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
                  mt: '-10px',
                  fontSize: 0,
                  color: 'blue100',
                  textDecoration: 'none',
                  ':hover': {
                    textDecoration: 'underline',
                  },
                  wordWrap: 'break-word',
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
