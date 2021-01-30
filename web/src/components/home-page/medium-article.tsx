// import moment from 'date-fns' <-- Replace for formatting
import React from 'react';
import { Box } from 'theme-ui';

export interface MediumArticleNode {
  id: string;
  latestPublishedAt: Date;
  uniqueSlug: string;
  title: string;
  content: {
    subtitle: string;
  };
  virtuals: {
    previewImage: {
      imageId: string;
    };
  };
  author: {
    name: string;
  };
}

// type ArticleLinkProps = BackgroundProps & TypographyProps & LayoutProps

// const ArticleLink = styled.a<ArticleLinkProps>`
//   background-size: cover;
//   background-origin: border-box;
//   background-position: 50% 50%;
//   display: block;
//   position: relative;
//   height: 350px;
//   color: inherit;
//   text-decoration: none;
//   ${background}
//   ${typography}
//   ${layout}
// `

// const ArticleInfo = styled.div<SpaceProps>`
//   position: absolute;
//   left: 0 !important;
//   right: 40% !important;
//   bottom: 0 !important;
//   color: white;
//   /* color: 'dry'; */
//   ${space}
// `

// const ArticleTitle = styled.h3`
//   font-size: 34px;
//   margin-block-end: 10px;
// `

// export const MediumArticle: React.FC<MediumArticleNode> = (node) => (
//   <ArticleLink
//     target="_blank"
//     backgroundImage={`url(https://cdn-images-1.medium.com/max/800/gradv/29/81/30/darken/25/${node.virtuals.previewImage.imageId})`}
//     href={`https://medium.com/bjerk/${node.uniqueSlug}`}
//   >
//     <ArticleInfo m={4} mb={1}>
//       <ArticleTitle>{node.title}</ArticleTitle>
//       <p>
//         {node.author.name} –{' '}
//         {moment(node.latestPublishedAt).format('D. MMM YYYY')}
//       </p>
//     </ArticleInfo>
//   </ArticleLink>
// )

export const MediumArticle: React.FC<MediumArticleNode> = () => (
  <Box>Hello</Box>
);
