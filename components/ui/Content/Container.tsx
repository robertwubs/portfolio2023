import styled from 'styled-components'
import { vars } from 'lib/vars'
import { motion } from 'framer-motion'

interface ContainerProps {
    children: JSX.Element | JSX.Element[],
    $padded?: boolean
}

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const ContentContainer = ({ children, $padded }: ContainerProps) => {
    return <ContentContainerWrapper
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear', exitDelay: 1 }}
        $padded={$padded || false}
    >
        {children}
    </ContentContainerWrapper>
}

interface ContentContainerWrapperProps {
    $padded: boolean
}

const ContentContainerWrapper = styled(motion.main) <ContentContainerWrapperProps>`
    background-color: white;
    color: black;

    ${props => props.$padded && `
        margin-top: ${vars.headerHeight};
    `}
`

export default ContentContainer