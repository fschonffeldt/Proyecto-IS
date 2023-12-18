import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">MUNICIPALIDAD</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/tramites" className="nav-link">Trámites</Link>
            </li>
            <li className="nav-item">
              <Link to="/seguridad" className="nav-link">Seguridad</Link>
            </li>
            <li className="nav-item">
              <Link to="/turismo" className="nav-link">Turismo</Link>
            </li>
            <li className="nav-item">
              <Link to="/proyectos" className="nav-link">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Iniciar Sesión</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;