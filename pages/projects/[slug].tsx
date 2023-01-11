import { GetStaticProps } from 'next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import parse from 'html-react-parser'

import projects, { Project } from 'lib/data/projects'

import { BottomWrapper, ImageWrapper, TopWrapper } from 'components/ProjectPage/Wrappers'
import { Breadcrumb } from 'components/ProjectPage/Breadcrumb'

import PageTitle from 'components/PageTitle'
import ShimmeredImage from 'components/ShimmeredImage'
import InfoTable from 'components/ProjectPage/InfoTable'
import PillContainer, { Pill } from 'components/ProjectPage/PillContainer'


import Container from 'components/ui/Content/Container'
import DynamicIcon from 'components/ui/DynamicIcon'
import Gallery from 'components/ProjectPage/Gallery'

interface PageProps {
    project: Project
}

const ProjectPage = ({ project }: PageProps) => {
    return <Container $padded={true} $animated={true} $flexed={true}>
        <PageTitle title={`Project: ${project.title}`} />

        <TopWrapper>
            <div>
                <Breadcrumb href={`/portfolio/${project.category.slug}`}>
                    <FontAwesomeIcon icon={faArrowLeft} fixedWidth />Back to All {project.category.title}
                </Breadcrumb>

                <h1>{project.title}</h1>
                <PillContainer>
                    {project.technologies.map((tech, index) => {
                        const [iconName, library] = tech.icon.split("|")

                        return <Pill key={`tech-${index}`}><DynamicIcon size={16} iconName={iconName} library={library} style={{ marginRight: 5 }} /> {tech.name}</Pill>
                    })}
                </PillContainer>

                <InfoTable project={project} />
            </div>
            <ImageWrapper>
                <ShimmeredImage $shimmerHeight={150} $shimmerWidth={150} priority sizes="150px" src={`/images/logos/${project.image}`} alt={`${project.title} logo`} fill style={{ objectFit: 'contain', padding: 15 }} />
            </ImageWrapper>
        </TopWrapper>
        <BottomWrapper>
            <div>{project.description.map((line, index) => {
                return <p key={`project-${index}`}>{parse(line)}</p>
            })}</div>
            <Gallery project={project} />
        </BottomWrapper>
    </Container>
}

export const getStaticProps: GetStaticProps = async (context) => {
    let slug: string | string[] | undefined = context?.params?.slug

    const activeItem = projects.find(project => project.slug === slug)

    if (!activeItem) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            project: activeItem
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            ...projects.map((item) => {
                return {
                    params: {
                        slug: item.slug
                    }
                }
            })
        ],
        fallback: false
    }
}

export default ProjectPage