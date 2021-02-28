import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import localizedText from '../../../../config/localized-text'

const localized = localizedText.navbar;


const Language = (props) => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.filter(language => language === currentLocale).map(language => (
            <a
              key={language}
              onClick={() => changeLocale(languages.find(l => l !== language))}
              style={{
                marginLeft: '2px',
                cursor: 'pointer'
              }}
              {...props}
            >
              {localized[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language