import Head from 'next/head'
import { useEffect } from 'react'

import { useGlobalContext } from 'lib/context/GlobalContext'

interface PageTitleProps {
    title: string
}

const PageTitle = ({ title }: PageTitleProps) => {
    const { setPageTitle } = useGlobalContext()

    useEffect(() => {
        setPageTitle(title)
    }, [title, setPageTitle])

    return <Head>
        <title>{`Robert Wubs | ${title}`}</title>
    </Head>
}

export default PageTitle