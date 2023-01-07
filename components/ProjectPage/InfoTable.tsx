import Link from "next/link"

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Project, SourceAvailable } from "lib/data/projects"

interface InfoTableProps {
    project: Project
}

const InfoTable = ({ project }: InfoTableProps) => {
    return <table style={{ fontSize: 13 }}>
        <tbody>
            <tr>
                <td><strong>Role: </strong></td>
                <td>{project.role}</td>
            </tr>
            {project.url && <tr>
                <td><strong>URL: </strong></td>
                <td><Link href={project.url} target="_blank">{project.url} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </Link></td>
            </tr>}
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
}

export default InfoTable