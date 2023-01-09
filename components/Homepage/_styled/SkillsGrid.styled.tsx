import styled from "styled-components"

import { colors } from "lib/colors"
import { device } from "lib/device"
import { vars } from "lib/vars"

export const GridWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: white;
    color: ${colors.black};
    position: relative;
    top: -1px;
`

export const GridContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px ${vars.contentPadding};
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: ${vars.maxContentWidth};
    gap: 20px;

    ${device.tablet} {
        padding: 50px ${vars.contentPadding};
        flex-direction: row;
        justify-content: space-between;
    }

    ${device.tablet}{
        > div:first-child {
            width: 25%;
            flex-basis: 25%;
        }
    
        > div:last-child {
            width: 75%;
            flex-basis: 75%;
        }
    }
`

export const GridTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        text-align: center;
        font-weight: 900;
    }
`

export const Grid = styled.div`
    max-width: 600px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    ${device.tablet} {
        grid-template-columns: repeat(5, 1fr);
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #e8e8e8;
        border-radius: 10px;
        padding: 15px;
        pointer-events: none;

        p {
            text-align: center;
            font-size: 12px;
            font-weight: bold;
            color: #1a1a1a;
            margin: 0;
            margin-top: 10px;
        }
    }
`