import { useCallback, useState } from 'react'

import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  getAuth,
} from 'firebase/auth'

import type { User } from 'firebase/auth'

import { app } from '@/components/shared/api/firebase/init'

export const useAuth = () => {
  // eslint-disable-next-line unicorn/no-null
  const [authState, setAuthState] = useState<User | null>(null)
  const auth = getAuth(app)
  onAuthStateChanged(auth, user => {
    if (user) {
      setAuthState(user)
    } else {
      setAuthState(null)
    }
  })

  const provider = new GoogleAuthProvider()
  const loginWithPopUp = useCallback(
    async () => await signInWithPopup(auth, provider),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logout = useCallback(async () => await signOut(auth), [])

  return { authState, loginWithPopUp, logout }
}
