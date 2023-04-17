// eslint-disable-next-line import/named
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { app } from '@/components/shared/api/firebase/init'

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
export const loginWithPopUp = async () => {
  await signInWithPopup(auth, provider)
}
