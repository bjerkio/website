import { Container } from '@theme-ui/components';
import React from 'react';
import { Box, Heading, Label, Grid, Input } from 'theme-ui';
import Button from '../../../../components/button';
import localizedText from '../../../../config/localized-text';

const loc = 'no';

const sayHiText = localizedText.sayHiFooter;

export default () => (
    <Box sx={{ mb: 0 }}>
        <Container sx={{ mt: 5, backgroundColor: '#393E46', px: 6, py: 7 }}>
            <Grid
                gap={0}
                columns={[1, 1, '1fr 1fr']}
            >
                <Box px={5}>
                    <Heading sx={{ color: 'white', fontSize: 50, fontWeight: '500' }}>
                        {sayHiText.title[loc]}
                    </Heading>
                    <Label mb={4} mt={3} sx={{ color: 'white', fontSize: 20 }}>
                        {sayHiText.description[loc]}
                    </Label>
                    <Input 
                        sx={{ mb: 3, mt: 5, background: '#232931', color: 'white', border: 'none', px: 4, py: 3 }} 
                        defaultValue={sayHiText.fullName[loc]}
                    />
                    <Input 
                        sx={{ mb: 3, background: '#232931', color: 'white', border: 'none', px: 4, py: 3  }} 
                        defaultValue={sayHiText.email[loc]}
                    />
                    <Input 
                        sx={{ mb: 3, background: '#232931', color: 'white', border: 'none', px: 4, py: 3 }} 
                        defaultValue={sayHiText.project[loc]}
                    />
                    <Input 
                        sx={{ mb: 3, background: '#232931', color: 'white', border: 'none', px: 4, py: 3  }} 
                        defaultValue={sayHiText.budget[loc]}
                    />
                    <Button href={'/contact'} sx={{ mt: 4, px: 4, py: 3 }}>
                        {sayHiText.button[loc]}
                    </Button>
                </Box>
                <Box>
                </Box>
            </Grid>
        </Container>
    </Box>
)