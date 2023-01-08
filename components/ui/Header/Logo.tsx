
import { useGlobalContext } from "lib/context/GlobalContext"
import { Letter, LettersContainer, Title } from "./_styled/Logo.styled"

const Logo = () => {
    const { pageTitle } = useGlobalContext()

    return <LettersContainer href="/">
        <Letter className="invert fixed">R</Letter>
        <Letter className="invert">o</Letter>
        <Letter className="invert">b</Letter>
        <Letter className="invert">e</Letter>
        <Letter className="invert">r</Letter>
        <Letter className="invert">t</Letter>
        <Letter className="fixed blue">W</Letter>
        <Letter className="blue">u</Letter>
        <Letter className="blue">b</Letter>
        <Letter className="blue">s</Letter>
        <Title>
            {pageTitle}
        </Title>
    </LettersContainer>
}

export default Logo