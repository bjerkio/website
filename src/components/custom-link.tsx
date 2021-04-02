import GatsbyLink from 'gatsby-link';
// import React from 'react';

// const GatsbyLinkStyled = styled(GatsbyLink)`
//   text-decoration: none;
//   color: inherit;
//   font-weight: bold;
//   display: inline-block;
//   ${space}
//   &&:after {
//     content: '→';
//     font-size: 1.1em;
//     font-weight: bold;
//     color: 'primary';
//     padding-left: 4px;
//     padding-right: 10px;
//     -webkit-transition: all 0.15s cubic-bezier(0.8, 0, 0.3, 1) 0s;
//     transition: all 0.15s cubic-bezier(0.8, 0, 0.3, 1) 0s;
//   }
//   &&:hover:after {
//     padding-left: 10px;
//     padding-right: 4px;
//     -webkit-transition: all 0.15s cubic-bezier(0.8, 0, 0.3, 1) 0s;
//     transition: all 0.15s cubic-bezier(0.8, 0, 0.3, 1) 0s;
//   }
// `
export const Link = GatsbyLink;

// export const Link: React.FC<GatsbyLinkProps<any>> = ({ children, ...props }) => (
//   <GatsbyLink {...props}>{children}</GatsbyLink>
// )
