import { Outlet } from 'react-router-dom';
import { AuthProvider} from '../context/AuthContext';
import NavBar from '../components/NavBar';

function Root() {
  return (
    <AuthProvider>
      <PageRoot />
    </AuthProvider>
  );
}

function PageRoot() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
      
  );
}

export default Root;