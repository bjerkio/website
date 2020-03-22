import React from 'react'
import { Box, BoxProps } from 'rebass/styled-components'

const Container: React.FC<BoxProps> = props => (
  <Box
    {...props}
    sx={{
      maxWidth: '1440px',
      mx: 'auto',
      px: 3,
      ...props.sx
    }}
  />
)

export default Container
