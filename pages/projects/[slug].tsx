import { GetStaticProps } from 'next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import PageTitle from 'components/PageTitle'
import Container from 'components/ui/Content/Container'

import projects, { Project, SourceAvailable } from 'lib/data/projects'

import { BottomWrapper, Breadcrumb, ImageWrapper, Pill, TopWrapper } from 'components/ui/Content'
import Link from 'next/link'
import Image from 'next/image'

interface PageProps {
    project: Project
}

const ProjectPage = ({ project }: PageProps) => {
    return <Container $padded={true}>
        <PageTitle title={`Project: ${project.title}`} />

        <TopWrapper>
            <div>
                <Breadcrumb href={`/portfolio/${project.category.slug}`}>
                    <FontAwesomeIcon icon={faArrowLeft} fixedWidth />Back to All {project.category.title}
                </Breadcrumb>

                <h1>{project.title}</h1>
                <div style={{ marginBottom: 26 }}>
                    {project.technologies.map((tech, index) => <Pill key={`tech-${index}`}>{tech.name}</Pill>)}
                </div>

                <table style={{ fontSize: 13 }}>
                    <tbody>
                        <tr>
                            <td><strong>Role: </strong></td>
                            <td>{project.role}</td>
                        </tr>
                        <tr>
                            <td><strong>URL: </strong></td>
                            <td><Link href={project.url} target="_blank">{project.url} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </Link></td>
                        </tr>
                        <tr>
                            <td><strong>Source Code: </strong></td>
                            <td>
                                {project.sourceAvailable === SourceAvailable.Yes && <Link href={project.sourceUrl} target="_blank">{project.sourceUrl}</Link>}
                                {project.sourceAvailable === SourceAvailable.No && <span>Private</span>}
                                {project.sourceAvailable === SourceAvailable.OnRequest && <Link href={project.sourceUrl} target="_blank">Request</Link>}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ImageWrapper>
                <Image src={`/images/${project.image}`} alt={`${project.title} logo`} fill style={{ objectFit: 'contain', padding: 15 }} />
            </ImageWrapper>
        </TopWrapper>
        <BottomWrapper>
            <>{project.description.map((line, index) => {
                return <p key={`project-${index}`}>
                    {line.text}
                </p>
            })}</>
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