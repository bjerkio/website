// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Object types
import CTABox from './objects/CTABox'
import heroText from './objects/heroText'
import pageContent from './objects/pageContent'
import columnLayout from './objects/columnLayout'
import contentEditor from './objects/contentEditor'

// Document types
import homepage from './documents/homepage'
import page from './documents/page'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Objects */
    CTABox,
    heroText,
    pageContent,
    // columnLayout,
    contentEditor,
    /* Documents */
    homepage,
    page
  ]),
})
