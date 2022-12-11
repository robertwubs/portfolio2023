import Link from "next/link"
import styled, { keyframes, css } from "styled-components"

const Logo = () => {
    return <LettersContainer href="/">
        <Letter className="fixed">R</Letter>
        <Letter>O</Letter>
        <Letter>B</Letter>
        <Letter>E</Letter>
        <Letter>R</Letter>
        <Letter>T</Letter>
        <Letter className="fixed blue">W</Letter>
        <Letter className="blue">U</Letter>
        <Letter className="blue">B</Letter>
        <Letter className="blue">S</Letter>
    </LettersContainer>
}

const animations = {
    shrink: keyframes`from {transform: rotateY(0deg);} to {transform: rotateY(90deg);}`,
    expand: keyframes`from {transform: rotateY(90deg);} to {transform: rotateY(0deg);}`,
    moveLeft: keyframes`from {transform: translateX(0em);}to {transform: translateX(-2.7em);}`,
    moveRight: keyframes`from {transform: translateX(-2.7em);} to {transform: translateX(0em);}`
}

const Letter = styled.span`
    color: black;
    font-family: 'Lilita One';
    font-size: 2em;
    letter-spacing: -1px;
    pointer-events: none;
    display: inline-block;

    &.blue {
        color: #3232b9;
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
    &:hover ${Letter} {
        &:not(.fixed){
            animation: ${animations.expand} 500ms ease-in-out forwards;
        }

        &.fixed.blue {
            animation: ${animations.moveRight} 500ms ease-in-out forwards;
        }
    }
`

export default Logo