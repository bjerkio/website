import { Link } from 'next-theme-ui';
import { Container, Flex } from 'theme-ui';
import { Logo } from '../logo';

export const Header: React.FC = () => {
  return (
    <Container variant="readable">
      <Flex sx={{ pt: 2 }}>
        <Link href={'/'}>
          <Logo
            sx={{
              maxWidth: '100px',
              cursor: 'pointer',
              height: '40px',
              color: 'text',
            }}
          />
        </Link>
        <Flex sx={{ gap: 3, mt: 'auto', ml: 'auto', alignItems: 'flex-end' }}>
          {/** Navigation links go here */}
        </Flex>
      </Flex>
    </Container>
  );
};
