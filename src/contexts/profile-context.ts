import { createContext } from 'react'

const ProfileContext = createContext({
  loaded: false,
  logged: false,
  user: null,
  userToken: null,
  claims: null,
})

export default ProfileContext
