import { motion } from "framer-motion"

import technologies from "lib/data/technologies"

import DynamicIcon from "components/ui/DynamicIcon"

import { Grid, GridContainer, GridTitle, GridWrapper } from "./_styled/SkillsGrid.styled"

const gridVariants = {
    hidden: { opacity: 0, y: -40 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
}

const textVariants = {
    hidden: { opacity: 0, x: -40 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
}

const SkillsGrid = () => {
    return <>
        <GridWrapper>
            <GridContainer>
                <GridTitle>
                    <motion.h2
                        variants={gridVariants}
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        transition={{ type: 'easeInOut', duration: 0.3 }}
                    >Skills</motion.h2>
                </GridTitle>
                <Grid>
                    {Object.values(technologies).map((tech, index) => {
                        if (tech?.excludeInList) {
                            return
                        }

                        const [iconName, library] = tech.icon.split("|")

                        return <motion.div
                            key={`tech-${index}`}
                            variants={gridVariants}
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            transition={{ type: 'easeInOut', delay: (index * 0.02), duration: 0.2 }}
                        >
                            <DynamicIcon color="#1a1a1a" size={28} iconName={iconName} library={library} />
                            <p>{tech.name}</p>
                        </motion.div>
                    })}
                </Grid>
            </GridContainer>
        </GridWrapper>
    </>
}

export default SkillsGrid