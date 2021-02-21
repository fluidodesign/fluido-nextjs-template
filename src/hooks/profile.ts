import { createState, State } from '@hookstate/core'

import firebaseWeb from '../libs/client/firebase'

interface ProfileProps {
  loaded: boolean
  logged: boolean
  user: firebaseWeb.User
  userToken: string
  claims: string[]
}

const ProfileState = createState<ProfileProps>({
  loaded: false,
  logged: false,
  user: null,
  userToken: null,
  claims: [],
})

export default ProfileState

type ProfileFCMTokenType = 'waiting' | 'loading' | 'error' | 'required' | string

export const ProfileFCMToken = createState<ProfileFCMTokenType>('waiting')
