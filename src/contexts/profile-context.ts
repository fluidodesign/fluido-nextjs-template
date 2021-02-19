import { createContext } from 'react'

const ProfileContext = createContext<{
  loaded: boolean
  logged: boolean
  user: any
  userToken: string
  claims: string[]
}>({
  loaded: false,
  logged: false,
  user: null,
  userToken: null,
  claims: null,
})

export default ProfileContext
