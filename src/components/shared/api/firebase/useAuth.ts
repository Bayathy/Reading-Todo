import { useCallback } from 'react'

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth'

import { app } from '@/components/shared/api/firebase/init'

export const useAuth = () => {
  // eslint-disable-next-line unicorn/no-null
  // const [authState, setAuthState] = useState<User | null>(null)
  const auth = getAuth(app)

  // onAuthStateChanged(auth, user => {
  //   if (user) {
  //     setAuthState(user)
  //   } else {
  //     setAuthState(null)
  //   }
  // })

  const provider = new GoogleAuthProvider()
  const loginWithPopUp = useCallback(
    async () => await signInWithPopup(auth, provider),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const logout = useCallback(async () => await signOut(auth), [])

  return { auth, loginWithPopUp, logout }
}
