import DynamicIcon from "components/ui/DynamicIcon"
import { motion } from "framer-motion"
import technologies from "lib/data/technologies"
import { Grid, GridContainer, GridTitle, GridWrapper } from "./_styled/SkillsGrid.styled"

const gridVariants = {
    hidden: { opacity: 0, y: -40 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
}

const SkillsGrid = () => {
    return <>
        <GridWrapper>
            <GridContainer>
                <GridTitle>
                    <h2>Skills</h2>
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