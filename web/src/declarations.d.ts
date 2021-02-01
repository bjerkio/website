/* eslint import/no-default-export: 0 */
declare const graphql: (query: TemplateStringsArray) => void;
declare module '@sanity/block-content-to-react';
declare module 'gatsby-source-sanity';
declare module 'client-config';
declare module '*.svg' {
  const content: string;
  export default content;
}
