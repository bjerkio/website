import { theme } from '@bjerk/brand';
import { Flex, Text } from 'theme-ui';
import { NetworksLinks } from '../illustrations/networks-links';
import { Image } from '../image';

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
      <Image src={photoPath} width={240} height={240} />
      <Text sx={{ fontSize: 3, fontWeight: 'bold' }}>{name}</Text>
      <Text>{title}</Text>
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
