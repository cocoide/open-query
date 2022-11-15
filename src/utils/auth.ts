import {  getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, UserCredential} from "firebase/auth";
import { app } from '../libs/firebase';


export const login = (): Promise<UserCredential> => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  return signInWithPopup(auth, provider);
};

export const logout = (): Promise<void> => {
  const auth = getAuth(app);
  return signOut(auth);
};
