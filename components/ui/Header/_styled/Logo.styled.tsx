import Link from 'next/link'

import { animations } from 'lib/animations'
import { colors } from "lib/colors"

import styled from 'styled-components'

export const Title = styled.p`
    color: white;
    padding-left: 15px;
    display: block;
    margin: 0;
    pointer-events: none;
    font-weight: bolder;

    animation: ${animations.moveLeftTitle} 500ms ease-in-out forwards;
    animation-delay: 2s;
`

export const Letter = styled.span`
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

export const LettersContainer = styled(Link)`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
`
