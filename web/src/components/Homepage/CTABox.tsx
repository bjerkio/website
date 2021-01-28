import React from 'react'
import { Box, Heading, Link } from 'theme-ui'

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
      <Heading sx={{ mb: 3, fontWeight: 'bold' }}>
        {title}
      </Heading>
      <Box>{children}</Box>
      {linkTo && (
        <Link href={linkTo} mt={3}>
          {linkText}
        </Link>
      )}
    </Box>
  )
}

export default CTABox
