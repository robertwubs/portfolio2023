import styled from 'styled-components'
import { motion } from "framer-motion"
import { device } from "lib/device"

export const MenuItemTitle = styled.p`
    color: white;
    font-size: 24px;
    transition: all 0.2s ease-in-out;
    white-space: pre-line;
    text-align: center;
    text-shadow: 0px 0px 4px #000000;
`

export const AnimatedBackground = styled.img`
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    opacity: 0.5;
    
    z-index: -1;

    transition: opacity 0.2s ease-in-out, transform 3s ease-in-out;

    pointer-events: none;
`

interface WrapperProps {
    $isBackButton: boolean | undefined
}

export const Wrapper = styled(motion.a) <WrapperProps>`
    width: 100%;
    position: relative;
    z-index: 0;

    overflow: hidden;
    background-color: black;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    flex: 1;

    border-bottom: 4px solid black;

    ${device.tablet} {
        border-bottom: 0;
        border-right: 4px solid black;
    }

    * {
        transform: translateY(0) skew(5deg);
    }

    img {
        transform: translateY(0) scale(1.4) skew(5deg);
    }

    ${props => props.$isBackButton && `
        max-height: calc(20vw + 100px);
        max-width: none;

        ${device.tablet}{
            max-width: 20vw;
            max-height: none;
            padding-top: 0;
        }
    `}

    &:hover {
        > ${MenuItemTitle} {
            font-size: 26px;
        }

        > ${AnimatedBackground} {
            opacity: 0.8;
            transition: opacity 0.2s ease-in-out, transform 40s linear;
            transform: translateY(-100%) scale(1.4) skew(5deg);
        }
    }

    &:nth-child(even){
        ${AnimatedBackground} {
            bottom: 0;
            top: auto;
        }

        &:hover {
            ${AnimatedBackground} {
                transform: translateY(100%) scale(1.4) skew(5deg);
            }
        }
    }
`