
import { useGlobalContext } from "lib/context/GlobalContext"
import { Letter, LettersContainer, Title } from "./_styled/Logo.styled"

const Logo = () => {
    const { pageTitle } = useGlobalContext()

    return <LettersContainer href="/">
        <Letter className="invert fixed">R</Letter>
        <Letter className="invert">O</Letter>
        <Letter className="invert">B</Letter>
        <Letter className="invert">E</Letter>
        <Letter className="invert">R</Letter>
        <Letter className="invert">T</Letter>
        <Letter className="fixed blue">W</Letter>
        <Letter className="blue">U</Letter>
        <Letter className="blue">B</Letter>
        <Letter className="blue">S</Letter>
        <Title>
            {pageTitle}
        </Title>
    </LettersContainer>
}

export default Logo