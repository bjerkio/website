import React from 'react'
import { Box, Heading } from 'rebass/styled-components'
import Link from '../Link'

export interface CTABoxProps {
  title: string
  linkTo?: string
  linkText?: string
}

const CTABox: React.FC<CTABoxProps> = ({
  children,
  title,
  linkTo,
  linkText = 'Les mer',
}) => {
  return (
    <Box p={5}>
      <Heading mb={3} fontWeight="normal">
        {title}
      </Heading>
      <Box>{children}</Box>
      {linkTo && (
        <Link to={linkTo} mt={3}>
          {linkText}
        </Link>
      )}
    </Box>
  )
}

export default CTABox
