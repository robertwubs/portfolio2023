import { colors } from "lib/colors"
import { device } from "lib/device"
import { vars } from "lib/vars"

import styled from "styled-components"

export const TopWrapper = styled.div`
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

    ${device.tablet} {
        flex-direction: row;
        justify-content: space-between;
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