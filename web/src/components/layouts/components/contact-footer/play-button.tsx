import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Box, ThemeUIStyleObject } from 'theme-ui';

const styles: ThemeUIStyleObject = {
    width: [ '50px', '100px' ],
    height: [ '50px', '100px' ],
    borderRadius: '50%',
    background: 'white',
    textAlign: 'center',
    verticalAlign: 'middle',
    alignContent: 'center',
    alignItems: 'center',
    svg: {
        marginTop: '35%',
        marginLeft: '5px',
        width: [ 15, 30 ],
        height: [ 15, 30 ]
    }
}

export const PlayButton: React.FC = () => (
    <Box sx={styles}>
        <FaPlay color='#4ECCA3' />
    </Box>
)