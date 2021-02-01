// First, we must import the schema creator
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';
import homepage from './documents/home-page';
import page from './documents/page';
import callToActionsBox from './objects/call-to-action-box';
import contentEditor from './objects/content-editor';
import heroText from './objects/hero-text';
import pageContent from './objects/page-content';
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    callToActionsBox,
    heroText,
    pageContent,
    contentEditor,
    homepage,
    page,
  ]),
});
