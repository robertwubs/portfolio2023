import Header from "./Header"
import Footer from "./Footer"

import styled from 'styled-components'
import { colors } from "lib/colors"

interface ContainerProps {
    children: JSX.Element | JSX.Element[]
}

const Container = ({ children }: ContainerProps) => {
    return <ContainerWrapper>
        <Header />

        {children}

        <Footer />
    </ContainerWrapper>
}

const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${colors.black};
    color: ${colors.white};

    > *:nth-child(2) {
        flex: 1;
    }
`

export default Container