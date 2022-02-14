import { AspectRatio, Box, Flex, Image, Link, Text } from 'theme-ui';
import { SocialGithub } from '../illustrations/social-github';
import { SocialLinkedin } from '../illustrations/social-linkedin';

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
      <Box sx={{ width: '15rem' }}>
        <AspectRatio ratio={308 / 440}>
          <Image
            src={photoPath}
            sx={{
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: 6,
            }}
          />
        </AspectRatio>
      </Box>
      <Text sx={{ fontSize: 3, fontWeight: 'bold' }}>{name}</Text>
      <Text>{title}</Text>
      <Link href={`tel:${phone}`}> {phone}</Link>
      <Link href={`mailto:${email}`}>{email}</Link>

      <Flex sx={{ gap: 2 }}>
        {github && (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Github Profile for ${name}`}
            sx={{
              width: '1.7rem',
              maxWidth: '35px',
              cursor: 'pointer',
            }}
          >
            <SocialGithub width="100%" height="100%" />
          </Link>
        )}
        {linkedIn && (
          <Link
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
            <SocialLinkedin width="100%" height="100%" />
          </Link>
        )}
      </Flex>
    </Flex>
  );
};
