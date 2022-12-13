import { colors } from "lib/colors"
import styled from "styled-components"

import Link from 'next/link'

import { animations } from 'lib/animations'

const Logo = () => {
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
    </LettersContainer>
}

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
        animation: ${animations.shrink} 500ms ease-in-out forwards;
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
`

export default Logo
export { Letter }