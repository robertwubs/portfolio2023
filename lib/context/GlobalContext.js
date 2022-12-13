import { useContext, useState, createContext } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const [pageTitle, setPageTitle] = useState(false)

    return (
        <GlobalContext.Provider value={{
            pageTitle,
            setPageTitle
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
