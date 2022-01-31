import { Container, Divider, Heading, Text } from '@theme-ui/components';
import type { NextPage } from 'next';
import SEO from '../components/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Container variant="centered">
        <Heading
          as="h1"
          sx={{
            fontSize: [6, 8],
            fontWeight: 700,
            lineHeight: ['', '5rem'],
            my: [5, 7],
            mb: 5,
          }}
        >
          <Heading>
            We’re developers, creators, strategists and activists
          </Heading>
          <Text sx={{ color: 'primary' }}>.</Text>
          <Divider
            sx={{
              borderWidth: '0.5rem',
              mt: 5,
              width: '50%',
              color: 'text',
              borderRadius: '0.3125rem',
            }}
          />
        </Heading>
      </Container>
    </>
  );
};

export default Home;
