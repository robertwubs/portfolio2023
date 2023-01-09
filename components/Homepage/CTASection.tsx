import styled from "styled-components"

const CTASection = () => {
    return <CTASectionWrapper>
        <h3>Interested in working with me?</h3>
        <p>Click <a href="mailto:info@robertwubs.com">here</a> to send me an email. Or alternatively call me at <a href="tel:+31651556720">+31651556720</a> during office hours (CET).</p>
    </CTASectionWrapper>
}

const CTASectionWrapper = styled.section`
    padding: 30px;
    background-color: #171717;

    h3, p {
        text-align: center;
    }

    h3 {
        font-size: 2rem;
        margin: 5px 0;
    }

    p {
        font-size: 14px;
        margin-top: 30px;
    }
`

export default CTASection