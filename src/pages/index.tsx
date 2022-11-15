import { NextPage } from 'next'
import { useUser } from '../models/User';
import { login, logout } from '../utils/auth';

const Home: NextPage = () => {
  const user = useUser();
  const handleLogin = (): void => {
    login().catch((error) => console.error(error));
  };

  const handleLogout = (): void => {
    logout().catch((error) => console.error(error));
  };
  return (
    <div className="bg-black h-20 w-full text-white">
      <h1>認証状態</h1>
      {user !== null ? (
        <>
          <h2>ログインしている</h2>
          <button onClick={handleLogout}>ログアウト</button>
        </>
      ) : (
        <>
          <h2>ログインしていない</h2>
          <button onClick={handleLogin}>ログイン</button>
        </>
      )}
    </div>
  )
}
export default Home
