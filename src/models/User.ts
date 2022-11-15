import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { app } from '../libs/firebase'

  type UserState= User | null
const userState = atom<UserState>({
  key: 'UserState',
  default: null,
  dangerouslyAllowMutability: true,
})
//『userState』 をエクスポートする。
export const useUser = (): UserState => {
  return useRecoilValue(userState);
}

//『ユーザー認証』を監視 する。
export const useAuth = (): boolean => {
  const [isLoading, setIsLoading] = useState(true);
  const setUser = useSetRecoilState(userState)
  useEffect(() => {
    const auth = getAuth(app);
    return onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
  }, [setUser]);
  return isLoading;
};
