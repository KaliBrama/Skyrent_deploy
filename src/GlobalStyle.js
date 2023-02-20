import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

.centr {
    padding-left: calc(50% - 186px);
    padding-right: calc(50% - 186px);
}

a {
    text-decoration: none;
}
`

export default GlobalStyle
