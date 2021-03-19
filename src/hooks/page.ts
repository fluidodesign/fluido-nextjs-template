import { createContext, useContext } from 'react'

interface PageProps {
  [key: string]: any
}

const PageContext = createContext<PageProps>({})

export const PageProvider = PageContext.Provider

const usePage = () => useContext<PageProps>(PageContext)

export default usePage
