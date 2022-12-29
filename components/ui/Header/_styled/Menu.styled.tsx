import { colors } from 'lib/colors'
import { device } from 'lib/device'

import styled from 'styled-components'

export const Button = styled.button`
    position: relative;
    z-index: 2;
    padding: 0;
`

interface OverlayProps {
    visible: boolean
}

export const Overlay = styled.nav<OverlayProps>`
    background-color: ${colors.black};

    position: absolute;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity 0.2s ease;

    opacity: 0;
    pointer-events: none;
    z-index: 0;

    ${props => props.visible && `
        opacity: 1;
        pointer-events: all;
        z-index: 1;
    `}
`

export const MenuList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
        display: inline-block;
        text-align: center;
        width: 100%;

        font-size: 2em;
        margin-bottom: 0.5em;
        font-weight: bold;

        transition: all 0.2s ease;
        color: ${colors.white};

        ${device.tablet} {
            font-size: 3em;
        }

        &:hover {
            color: ${colors.blue};
        }
    }
`