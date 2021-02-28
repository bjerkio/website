// First, we must import the schema creator
import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';
import aboutPage from './documents/about-page';
import contactPage from './documents/contact-page';
import footer from './documents/footer';
import homepage from './documents/home-page';
import indivPage from './documents/indiv-page';
import lentPage from './documents/lent-page';
import osloJazzPage from './documents/oslo-jazz-page';
import page from './documents/page';
import servicesPage from './documents/services-page';
import tabetaltPage from './documents/tabetalt-page';
import box from './objects/boxes/box';
import boxWithButtonLink from './objects/boxes/box-with-button-link';
import boxWithImageDescription from './objects/boxes/box-with-image-description';
import boxWithoutTitle from './objects/boxes/box-without-title';
import callToActionsBox from './objects/boxes/call-to-action-box';
import callToActionsImage from './objects/call-to-action-image';
import contentEditor from './objects/content-editor';
import footerContacts from './objects/footer-contacts';
import footerSocialNetworks from './objects/footer-social-network';
import heroText from './objects/hero-text';
import localeString from './objects/locale-string';
import pageText from './objects/page-text';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    localeString,
    callToActionsBox,
    callToActionsImage,
    footerContacts,
    footerSocialNetworks,
    box,
    boxWithoutTitle,
    boxWithButtonLink,
    boxWithImageDescription,
    heroText,
    pageText,
    contentEditor,
    homepage,
    footer,
    page,
    servicesPage,
    aboutPage,
    contactPage,
    tabetaltPage,
    lentPage,
    osloJazzPage,
    indivPage,
  ]),
});
