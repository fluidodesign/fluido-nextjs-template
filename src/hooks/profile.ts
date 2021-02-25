import { createState, useState } from '@hookstate/core'

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

const useProfile = () => useState(ProfileState)

export default useProfile

type ProfileFCMTokenType = 'waiting' | 'loading' | 'error' | 'required' | string

export const ProfileFCMToken = createState<ProfileFCMTokenType>('waiting')
