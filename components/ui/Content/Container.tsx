import styled from 'styled-components'
import { vars } from 'lib/vars'
import { motion } from 'framer-motion'

interface ContainerProps {
    children: JSX.Element | JSX.Element[],
    $padded?: boolean
    $animated?: boolean,
    $flexed?: boolean
}

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const off = {
    hidden: { opacity: 1 },
    enter: { opacity: 1 },
    exit: { opacity: 1 },
}

const ContentContainer = ({ children, $padded, $animated = false, $flexed = false }: ContainerProps) => {
    return <ContentContainerWrapper
        variants={$animated ? variants : off}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear', exitDelay: 1 }}
        $padded={$padded || false}
        $flexed={$flexed || false}
    >
        {children}
    </ContentContainerWrapper>
}

interface ContentContainerWrapperProps {
    $padded: boolean
    $flexed: boolean
}

const ContentContainerWrapper = styled(motion.main) <ContentContainerWrapperProps>`
    background-color: white;
    color: black;

    ${props => props.$padded && `
        margin-top: ${vars.headerHeight};
    `}

    ${props => props.$flexed && `
        flex: 1;
    `}
`

export default ContentContainer