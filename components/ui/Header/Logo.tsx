import { colors } from "lib/colors"
import styled from "styled-components"

import Link from 'next/link'

import { animations } from 'lib/animations'
import { useGlobalContext } from "lib/context/GlobalContext"

const Logo = () => {
    const { pageTitle } = useGlobalContext()

    return <LettersContainer href="/">
        <Letter className="invert fixed">R</Letter>
        <Letter className="invert">O</Letter>
        <Letter className="invert">B</Letter>
        <Letter className="invert">E</Letter>
        <Letter className="invert">R</Letter>
        <Letter className="invert">T</Letter>
        <Letter className="fixed blue">W</Letter>
        <Letter className="blue">U</Letter>
        <Letter className="blue">B</Letter>
        <Letter className="blue">S</Letter>
        <Title>
            {pageTitle}
        </Title>
    </LettersContainer>
}

const Title = styled.p`
    color: white;
    padding-left: 15px;
    display: block;
    margin: 0;
    pointer-events: none;
    font-weight: bolder;
    
    animation: ${animations.moveLeftTitle} 500ms ease-in-out forwards;
    animation-delay: 2s;
`

const Letter = styled.span`
    color: black;
    font-family: 'Lilita One';
    font-size: 2em;
    letter-spacing: -1px;
    pointer-events: none;
    display: inline-block;

    &.blue {
        color: ${colors.blue};
    }

    &:not(.fixed){
        animation: ${animations.shrink} 350ms ease-in-out forwards;
        animation-delay: 2s;
    }

    &.fixed.blue {
        animation: ${animations.moveLeft} 500ms ease-in-out forwards;
        animation-delay: 2s;
    }
`

const LettersContainer = styled(Link)`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
`

export default Logo
export { Letter, Title }