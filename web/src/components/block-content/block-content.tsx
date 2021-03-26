/* eslint @typescript-eslint/no-explicit-any: 0 */
import BaseBlockContent from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import React from 'react';
import { Box } from 'theme-ui';
import clientConfig from '../../../client-config';
import { Ingress } from './ingress';

const BlockRenderer: React.FC<any> = (props) => {
  const { style = 'normal' } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '');
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children,
    );
  }

  if (style === 'ingress') {
    return <Ingress {...props} />;
  }

  // Fall back to default handling
  return BaseBlockContent.defaultSerializers.types.block(props);
};

const Image: React.FC<any> = ({ node }) => {
  if (!node.asset) {
    return null;
  }

  const fluidProps = getFluidGatsbyImage(
    node.asset._ref,
    { maxWidth: 675 },
    clientConfig.sanity,
  );

  return <Img fluid={fluidProps} alt={node.alt} />;
};

export const BlockContent: React.FC<{ blocks: string }> = ({
  blocks,
  ...props
}) => (
  <Box {...props}>
    <BaseBlockContent
      blocks={blocks}
      serializers={{
        types: {
          block: BlockRenderer,
          image: Image,
        },
      }}
      {...clientConfig.sanity}
    />
  </Box>
);
