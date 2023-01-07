import { motion } from "framer-motion"
import styled from "styled-components"

import { colors } from "lib/colors"
import { device } from "lib/device"
import { vars } from "lib/vars"

const IntroductionHeroWrapper = styled.div`
    padding: 50px ${vars.contentPadding};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    background-color: ${colors.white};

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
`

export const IntroductionHeroDetails = styled.div`
    max-width: 740px;
`

export default IntroductionHeroWrapper