import Image from 'next/image'

import ContentContainer from "components/ui/Content/Container"
import IntroductionHeroWrapper, { IntroductionHeroDetails } from "./_styled/IntroductionHero.styled"
import { motion } from 'framer-motion'
import PortfolioMenu from 'components/PortfolioMenu'

const imageVariants = {
    hidden: { opacity: 0, rotateZ: -180, x: '-200' },
    enter: { opacity: 1, rotateZ: 0, x: 0 },
    exit: { opacity: 0, rotateZ: -180, x: '-200' },
}

const textVariants = {
    hidden: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
}

const IntroductionHero = () => {
    return <ContentContainer $padded={true}>
        <IntroductionHeroWrapper>
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: 'easeInOut', delay: 0, duration: 1 }}
            >
                <Image src="/images/avatar.jpg" alt="Avatar" width="200" height="200" />
            </motion.div>
            <IntroductionHeroDetails>
                <motion.h1
                    variants={textVariants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ type: 'linear', delay: 0.3, exitDelay: 0, duration: 0.5 }}
                >Hi, I'm Robert!</motion.h1>
                <motion.h2
                    variants={textVariants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ type: 'linear', delay: 0.5, exitDelay: 0, duration: 0.5 }}
                >Full Stack Web Developer</motion.h2>
                <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ type: 'linear', delay: 0.7, exitDelay: 0, duration: 0.5 }}
                >I'm a web developer with a designer's mind. In my professional work I tend to combine the best of two worlds by developing high-end web solutions, whilst also making it look pretty. I have complete control over web languages like: Javascript, CSS, PHP, HTML5, and frameworks like React, NextJS and React Native.</motion.p>
            </IntroductionHeroDetails>
        </IntroductionHeroWrapper>
        {/* <PortfolioMenu /> */}
    </ContentContainer>
}

export default IntroductionHero