import { colors } from "lib/colors"
import { device } from "lib/device"
import { vars } from "lib/vars"
import Link from "next/link"
import styled from "styled-components"

export const Breadcrumb = styled(Link)`
    color: ${colors.white};
    font-size: 12px;

    svg {
        top: 0.8px;
        position: relative;
        margin-right: 5px;
    }
`

export const PillContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 5px;
    margin-bottom: 21px;
`

export const Pill = styled.span`
    align-items: center;
    justify-content: center;
    display: flex;

    padding: 7px 10px;

    border-radius: 10px;
    background-color: ${colors.darkBlue};
    color: ${colors.white};

    font-size: 11px;
    font-weight: bold;
    pointer-events: none;
    
    align-items: center;
`

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