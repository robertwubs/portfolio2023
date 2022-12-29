import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"

import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

import { Button, MenuList, Overlay } from "./_styled/Menu.styled"

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

export default Menu