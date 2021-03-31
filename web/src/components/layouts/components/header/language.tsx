import { graphql } from 'gatsby';
import {
  I18nextContext,
  useI18next,
  useTranslation,
} from 'gatsby-plugin-react-i18next';
import React from 'react';

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const Language = ({ ...props }) => {
  const { t } = useTranslation();
  const { languages, changeLanguage } = useI18next();
  const { language } = React.useContext(I18nextContext);
  return (
    <div
      style={{
        marginLeft: '3px',
        marginTop: '14px',
        cursor: 'pointer',
        textDecoration: 'underline',
        fontWeight: '600',
        ...props.style,
      }}
    >
      {languages
        .filter((lng) => lng !== language)
        .map((lng) => (
          <a key={lng} onClick={() => changeLanguage(lng)} {...props}>
            {t('header:change-locale-text')}
          </a>
        ))}
    </div>
  );
};

export default Language;
