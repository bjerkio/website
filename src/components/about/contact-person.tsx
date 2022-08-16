import { AspectRatio, Box, Flex, Grid, Image, Link, Text } from 'theme-ui';

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
        sx={{
          display: 'flex',
          gridTemplateColumns: ['auto', '459px 459px', '459px, 459px'],
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
            sx={{
              gridTemplateRows: [
                'auto',
                '26px 21px 24px 24px 24px 24px',
                '26px 21px 24px 24px 24px 24px',
              ],
            }}
          >
            <Text sx={{ fontSize: 2, fontWeight: '600', mt: '20px' }}>
              {name}
            </Text>
            <Text variant="contact">{title}</Text>
            <Link color="black" href={`tel:${phone}`}>
              {phone}
            </Link>
            <Link color="black" href={`mailto:${email}`} mt="-10px">
              {email}
            </Link>
            {linkedIn && (
              <Link
                variant="socials"
                href={linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn Profile for ${name}`}
                sx={{
                  width: '1.7rem',
                  maxWidth: '35px',
                  cursor: 'pointer',
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
                  width: '1.7rem',
                  maxWidth: '35px',
                  cursor: 'pointer',
                  mt: '-10px',
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
