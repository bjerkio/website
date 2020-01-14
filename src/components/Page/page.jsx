import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import TeamMember from '../TeamMember/team-member'
import Services from '../Services/services'
import './page.css'
import styled from 'styled-components'

const Label = styled.label`
padding-bottom: 10px;
`
const Button = styled.button`
border-radius: 5px;
border: #4FCCA3 solid 2px;
background-color: #eee;
`
const Input = styled.input`
border-radius: 5px;
border: white solid 3px;
background-color: #eee;
`
const Box = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 0.8rem;
` 
const ContactFormWrap = styled.div`
max-width: 750px;
`
const TextArea = styled.textarea`
border-radius: 5px;
width: 100%;
height: 200px;
border: white solid 3px;
background-color: #eee;
`


const Page = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return (
    <Layout>
      <React.Fragment>
        <h1>{data.title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        {data.body
          ? data.body.map(slice => {
              if (slice.slice_type === 'team') {
                return (
                  <div className="team">
                    {slice.items.map(sliceObject => {
                      return (
                        <TeamMember
                          key={sliceObject.first_and_lastname}
                          data={sliceObject}
                        />
                      )
                    })}
                  </div>
                )
              }
              if (slice.slice_type === 'services') {
                return (
                  <div className="services">
                    {slice.items.map(sliceObject => {
                      return (
                        <Services
                          key={sliceObject.first_and_lastname}
                          data={sliceObject}
                        />
                      )
                    })}
                  </div>
                )
              }
              if (slice.slice_type === 'contact_form') {
                return (
                  <form name="contact" method="POST" data-netlify="true">
                  <ContactFormWrap><Box>
                  <Label>Navn</Label>
                  <Input type="text" name="name" />
                  </Box>
                  <Box>
                  <Label>Email</Label>
                  <Input type="email" name="email" />
                  </Box>
                  <Box>
                  <Label>Message</Label>
                  <TextArea name="message"></TextArea>
                  </Box>
                  <Button type="submit">Send</Button>
                  </ContactFormWrap>
                </form>
                )
              }
            })
          : ''}
      </React.Fragment>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
        body {
          ...Team
          ...Service
          ...ContactForm
        }
      }
    }
  }
  fragment Team on PrismicPageBodyTeam {
    slice_type
    items {
      first_and_lastname {
        text
      }
      position {
        text
      }
      portrait {
        url
      }
    }
  }
  fragment Service on PrismicPageBodyServices {
    slice_type
    items {
      link {
        uid
      }
      title1 {
        text
      }
    }
  }
  fragment ContactForm on PrismicPageBodyContactForm {
    slice_type
  }
`
