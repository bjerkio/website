import { theme } from '@bjerk/brand';
import Image from 'next/image';
import { Flex, Text } from 'theme-ui';
import SocialGithub from '../illustrations/social-github';
import SocialLinkedin from '../illustrations/social-linkedin';
import { NetworksLinks } from '../layout/footer/networks-links';

export interface PersonProps {
  name: string;
  photoPath: string;
  phone?: string;
  email: string;
  github?: string;
  linkedIn?: string;
}

export const Person: React.FC<PersonProps> = ({
  name,
  photoPath,
  phone,
  email,
  github,
  linkedIn,
}) => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Image src={photoPath} width={240} height={240} />
      <Text sx={{ fontSize: 3, fontWeight: 'bold' }}>{name}</Text>
      {phone && <Text>{phone}</Text>}
      <Text>{email}</Text>
      <NetworksLinks
        githubUrl={github}
        linkedInUrl={linkedIn}
        color={theme.colors.green60}
      />
    </Flex>
  );
};
