import { colors } from "lib/colors"
import styled from "styled-components"

const PillContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 5px;
    margin-bottom: 21px;
`

export default PillContainer

export const Pill = styled.span`
    align-items: center;
    justify-content: center;
    display: flex;

    padding: 7px 10px;

    border-radius: 10px;
    background-color: ${colors.darkBlue};
    color: ${colors.white};

    font-size: 11px;
    font-weight: bold;
    pointer-events: none;
    
    align-items: center;
`