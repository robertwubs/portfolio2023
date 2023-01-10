import Link from 'next/link'

import { animations } from 'lib/animations'
import { colors } from "lib/colors"

import styled from 'styled-components'
import { device } from 'lib/device'

interface TitleProps {
    offset: number
}

export const Title = styled.p<TitleProps>`
    color: white;
    padding-left: 15px;
    display: block;
    margin: 0;
    pointer-events: none;
    font-weight: bolder;
    white-space: nowrap;

    animation: ${animations.moveLeftTitle} 500ms ease-in-out forwards;
    animation-delay: 2s;

    font-size: 12px;

    ${device.tablet}{
        animation: ${animations.moveLeftTitleDesktop} 500ms ease-in-out forwards;
        font-size: 16px;
    }
    
    ${props => props.offset > 20 && `
        color: black;
    `}
`

export const Letter = styled.span`
    color: black;
    font-family: 'Bowlby One SC';
    font-size: 2em;
    letter-spacing: -0.5px;
    pointer-events: none;
    display: inline-block;

        &.blue {
        color: ${colors.blue};
    }

        &: not(.fixed){
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
    max-width: 82vw;

    ${device.tablet}{
        max-width: none;
    }
`
