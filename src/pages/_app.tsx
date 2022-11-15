import type { AppProps } from 'next/app'
import '/styles/globals.css'
import '../libs/firebase'
import { RecoilRoot } from 'recoil'
import { useAuth } from '../models/User'
import { NowLoading } from '../components/transition/NowLoading'

type Props = {
  children: JSX.Element;
};
const Auth = ({ children }: Props): JSX.Element => {
  const nowLoading = useAuth();
  return nowLoading ? <NowLoading /> : children;
};

export default function App({ Component, pageProps }: AppProps) {
  return (

    <RecoilRoot>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </RecoilRoot>
  )
}
