import '../assets/NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logout } from '../services/auth.service';

const NavBar = () => {
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleLogout = () => {
      logout();
      navigate('/auth');
    };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Municipalidad</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/tramites">Tramites</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/seguridad">Seguridad</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/turismo">Turismo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/evaluacion">Evaluacion</a>
            </li>
          </ul>
          
          <div className="dropdown">
            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {user.email}
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={handleLogout}>Cerrar sesión</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </nav>
  );
<<<<<<< HEAD
}

export default NavBar;
=======
};

export default NavBar;
>>>>>>> origin/diegod
