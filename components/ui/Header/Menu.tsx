import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import styled from "styled-components"
import { colors } from "lib/colors"
import { useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { device } from "lib/device"

const variants = {
    hidden: { opacity: 0, rotateY: '0deg' },
    enter: { opacity: 1, rotateY: '0deg' },
    exit: { opacity: 0, rotateY: '180deg' }
}

const AnimatedIcon = motion(FontAwesomeIcon)

const Menu = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    const links = [
        { title: 'Home', url: '/' },
        { title: 'Portfolio', url: '/portfolio' },
        { title: 'About Me', url: '/about-me' },
        { title: 'Contact', url: 'contact' }
    ]

    return <>
        <Button onClick={() => setMenuVisible(!menuVisible)}>
            <AnimatePresence mode="wait">
                {menuVisible && <AnimatedIcon className="invert" key='closeMenuBtn' icon={faTimes} size={"2x"} fixedWidth variants={variants} animate="enter" initial="hidden" exit="exit" transition={{ ease: 'easeInOut', duration: 0.2 }} />}
                {!menuVisible && <AnimatedIcon className="invert" key='openMenuBtn' icon={faBars} size={"2x"} fixedWidth variants={variants} animate="enter" initial="hidden" exit="exit" transition={{ ease: 'easeInOut', duration: 0.2 }} />}
            </AnimatePresence>
        </Button>
        <Overlay visible={menuVisible}>
            <MenuList>
                {links.map(link => <li key={`menu-${link.url}`}>
                    <Link onClick={() => setMenuVisible(false)} href={link.url}>{link.title}</Link>
                </li>)}
            </MenuList>
        </Overlay>
    </>
}

interface OverlayProps {
    visible: boolean
}

const Button = styled.button`
    position: relative;
    z-index: 2;
    padding: 0;
`

const Overlay = styled.nav<OverlayProps>`
    background-color: ${colors.black};

    position: absolute;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;
    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: opacity 0.2s ease;

    opacity: 0;
    pointer-events: none;
    z-index: 0;

    ${props => props.visible && `
        opacity: 1;
        pointer-events: all;
        z-index: 1;
    `}
`

const MenuList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;

    a {
        display: inline-block;
        text-align: center;
        width: 100%;

        font-size: 2em;
        margin-bottom: 0.5em;
        font-weight: bold;

        transition: all 0.2s ease;
        color: ${colors.white};

        ${device.tablet} {
            font-size: 3em;
        }

        &:hover {
            color: ${colors.blue};
        }
    }
`

export default Menu