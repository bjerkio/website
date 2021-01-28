import React, { useState } from 'react'
import { Box, Heading, Link } from 'theme-ui'
import Img from "gatsby-image"

export interface CTABoxProps {
  title: string
  linkTo?: string
  linkText?: string
  image?: any;
  hoverImage?: any;
}

const CTABox: React.FC<{data: CTABoxProps}> = ({
  children,
  data
}) => {
  const [hover, setHover] = useState(false);
  
  return (
    <Box 
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      sx={{
      ':hover': {
        '.link': {
          borderBottom: '2px solid'
        },
      },
      '.link': {
        color: 'text',
      },
    }}>
      <Box sx={{width: 100, height: 30, mb: 4}}>
        <Img 
          fluid={!hover ? data.image.asset.fluid : data.hoverImage.asset.fluid} 
          durationFadeIn={0} 
          fadeIn={false}
          draggable={false}
        />
      </Box>
      <Heading sx={{ mb: 3 }}>
        {data.title}
      </Heading>
      <Box>{children}</Box>
      <Box mt={4}>
        {data.linkTo && (
          <Link className='link' href={data.linkTo} >
            {data.linkText}
          </Link>
        )}
      </Box>
    </Box>
  )
}

export default CTABox
