import { AspectRatio, Box, Flex, Image, Link, Text } from 'theme-ui';

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
    <Flex sx={{ flexDirection: 'column' }}>
      <Box sx={{ width: ['100%', '25rem'] }}>
        <AspectRatio
          ratio={308 / 440}
          sx={{ borderRadius: 6, overflow: 'hidden' }}
        >
          <Image
            src={photoPath}
            sx={{
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </AspectRatio>
      </Box>
      <Text sx={{ fontSize: 2, fontWeight: 'bold', mt: '20px' }}>{name}</Text>
      <Text variant='contact'>{title}</Text>
      <Link variant='socials' color='black' href={`tel:${phone}`} mt='20px'> {phone}</Link>
      <Link variant='socials' color='black' href={`mailto:${email}`} mb='20px'>{email}</Link>
      {linkedIn && (
          <Link
          variant='socials'
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
            variant='socials'
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Github Profile for ${name}`}
            sx={{
              width: '1.7rem',
              maxWidth: '35px',
              cursor: 'pointer',
              mb: '60px'
            }}
          >
            Github
          </Link>
        )}

    </Flex>
  );
};
