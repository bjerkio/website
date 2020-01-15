import styled from 'styled-components'

export default styled.div`
border: #4ECCA3 solid;
border-radius: 5px;
text-align: ${props => props.textCenter ? 'center' : 'left'} ;
display: inline-block;
padding: 0.58rem;
background-color: transparent;
a {
  text-decoration: none;
  color: hsla(0, 0%, 0%, 0.8);
}
`