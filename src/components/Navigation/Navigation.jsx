import { Link } from 'react-router-dom';
import LoggedInUser from 'components/LoggedInUser/LoggedInUser';
import LoggedOutUser from 'components/LoggedOutUser/LoggedOutUser';
import ContactMenu from 'components/LoggedInUser/ContactMenu/ContactMenu';
import useAuth from 'hooks/useAuth';

const Navigation = () => {
  const isLogin = useAuth();

  return (
    <div>
      <Link to="/">Logo</Link>
      {isLogin && <ContactMenu />}
      {isLogin ? <LoggedInUser /> : <LoggedOutUser />}
    </div>
  );
};

export default Navigation;
