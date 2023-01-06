import styled from 'styled-components'

import { animations } from 'lib/animations'

import { Letter, Title } from './Logo.styled'
import { vars } from 'lib/vars'

interface HeaderWrapperProps {
    offset: number
}

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
    padding: 16px;
    height: ${vars.headerHeight};
    width: 100%;    

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    left: 0;
    top: 0;

    background-color: transparent;
    transition: all 0.2s ease;

    z-index: 1;

    .invert {
        color: white;
    }

    ${props => props.offset > 20 && `
        background-color: #f2f2f2;

        .invert {
            color: black;
        }
    `}

    &:hover {
        background-color: rgba(0,0,0,0.7);
    }

    &:hover ${Letter} {
        &:not(.fixed){
            animation: ${animations.expand} 350ms ease-in-out forwards;
        }

        &.fixed.blue {
            animation: ${animations.moveRight} 500ms ease-in-out forwards;
        }
    }

    &:hover ${Title} {
        animation: ${animations.moveRightTitle} 500ms ease-in-out forwards;
    }
`