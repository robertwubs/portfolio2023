import { colors } from "lib/colors"
import styled from "styled-components"

const Footer = () => {
    return <FooterWrapper>
        Designed &amp; Developed by Robert Wubs &copy; {new Date().getFullYear()}
    </FooterWrapper>
}

const FooterWrapper = styled.footer`
    padding: 1.5em;
    background-color: ${colors.black};
    color: #c3c3c3;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.3px;
`

export default Footer