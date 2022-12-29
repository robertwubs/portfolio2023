import { useEffect, useState } from 'react';

import { HeaderWrapper } from './_styled/Header.styled';

import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset)

        window.removeEventListener('scroll', onScroll)
        window.addEventListener('scroll', onScroll, { passive: true })

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return <HeaderWrapper offset={offset || 0}>
        <Logo />
        <Menu />
    </HeaderWrapper>
}

export default Header