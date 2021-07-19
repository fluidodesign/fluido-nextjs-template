import { createContext, useContext } from 'react'

export const PageContext = createContext<any | null>(null)

export const usePage = <T = any>() => useContext<T>(PageContext)
