import Link from "next/link"
import styled from "styled-components"

import { colors } from "lib/colors"

export const Breadcrumb = styled(Link)`
    color: ${colors.white};
    font-size: 12px;

    svg {
        top: 0.8px;
        position: relative;
        margin-right: 5px;
    }
`