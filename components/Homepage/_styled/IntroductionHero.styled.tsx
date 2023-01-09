import { motion } from "framer-motion"
import styled from "styled-components"

import { colors } from "lib/colors"
import { device } from "lib/device"
import { vars } from "lib/vars"

const IntroductionHeroWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: ${colors.white};

    -webkit-clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 96%, 0 100%);

    ${device.tablet} {
        -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    }
`

export const IntroductionHeroInner = styled.div`
    padding: 25px ${vars.contentPadding};

    ${device.tablet}{
        padding: 50px ${vars.contentPadding};
    }

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    position: relative;
    max-width: ${vars.maxContentWidth};

    flex-direction: column;

    ${device.tablet} {
        gap: 10vw;
        flex-direction: row;
    }

    img {
        border-radius: 100%;

        width: 150px;
        height: 150px;

        border: 7px solid #101081;

        ${device.tablet} {
            width: 200px;
            height: 200px;
        }
    }
    
    h1, h2, p {
        text-align: center;

        ${device.tablet} {
            text-align: left;
        }
    }

    h1 {
        font-weight: 900;
        letter-spacing: -1px;
        margin: 0;
        font-size: 2.5em;
    }

    h2 {
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: -0.5px;
        font-weight: 800;
        margin-top: 2px;
        color: ${colors.darkBlue};

        padding-bottom: 20px;
        border-bottom: 1px solid #e2e2e2;
    }

    p {
        letter-spacing: -0.3px;
        z-index: 1;
        position: relative;
    }
`

export const IntroductionHeroDetails = styled.div`
    max-width: 740px;
`

export default IntroductionHeroWrapper