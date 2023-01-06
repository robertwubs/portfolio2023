import PageTitle from "components/PageTitle"
import Link from "next/link"
import styled from "styled-components"

const Custom404 = () => {
    return <Wrapper>
        <PageTitle title="Page not found!" />
        <p><strong>404</strong> | You've strayed too far from the path. Click <Link href="/">here</Link> to return to safety.</p>
    </Wrapper>
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 15px;
    text-align: center;
`

export default Custom404