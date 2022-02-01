import { Box, Container, Divider, Flex, Text } from '@theme-ui/components';

export const Footer: React.FC = () => (
  <Box sx={{ minHeight: '5vh' }}>
    <Container>
      <Flex sx={{ flexDirection: 'column' }}>
        <Divider />
        <Text sx={{ mx: 'auto' }}>© Bjerk 2022</Text>
      </Flex>
    </Container>
  </Box>
);
