import { colors } from "lib/colors"
import { device } from "lib/device"
import { vars } from "lib/vars"

import styled from "styled-components"

export const TopWrapper = styled.div`
    position: relative;
    top: -1px;

    color: ${colors.white};
    background-color: ${colors.black};
    padding: ${vars.contentPadding};

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;

    ${device.tablet} {
        flex-direction: row;
        align-items: center;
    }
`

export const BottomWrapper = styled.div`
    padding: ${vars.contentPadding};
    padding-top: 0;

    display: flex;
    flex-direction: column;
    gap: 15px;

    p {
        letter-spacing: -0.3px;
    }

    ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
        
        > div:first-child {
            flex-basis: 60%;
            min-width: 60%;
            margin-top: 10px;
        }

        > div:last-child {
            flex-basis: 40%;
            max-width: 40%;
            position: relative;
            margin-top: 25px;
        }
    }
`

export const ImageWrapper = styled.div`
    padding: 10px;
    aspect-ratio: 1;
    border-radius: 10px;
    background-color: ${colors.white};
    position: relative;
    width: 150px;
    height: 150px;
    
    align-self: center;
    margin-bottom: 15px;

    ${device.tablet} {
        align-self: flex-start;
        margin-bottom: 0;
        margin-left: 15px;
    }
`