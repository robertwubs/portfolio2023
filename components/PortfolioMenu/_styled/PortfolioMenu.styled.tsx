import styled from 'styled-components'

import { device } from 'lib/device'

export const NoHorizScrollWrapper = styled.div` 
    width: 100vw;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: stretch;

    overflow: hidden;
    background-color: black;

    position: relative;
    left: -30px;
    width: calc(100% + 60px);
    flex: 1;

    ${device.tablet} {
        flex-direction: row;
    }

    .backBtn {
        flex: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-right: 15px;
        padding-left: 75px;

        ${device.tablet} {
            padding-top: 0;
        }
    }
`