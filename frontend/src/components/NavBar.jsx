import { Link } from 'react-router-dom';
import '../assets/NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand-container">
          <Link to="/" className="navbar-brand main-title">MUNICIPALIDAD</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/tramites" className="nav-link">Trámites</Link>
            </li>
            <li className="nav-item">
              <Link to="/seguridad" className="nav-link">Seguridad</Link>
            </li>
            <li className="nav-item">
              <Link to="/turismo" className="nav-link">Turismo</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="proyectosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Proyectos
              </a>
              <ul className="dropdown-menu" aria-labelledby="proyectosDropdown">
                <li><Link to="/postulacion" className="dropdown-item">Postulacion</Link></li>
                <li><Link to="/evaluacion" className="dropdown-item">Evaluacion</Link></li>
                <li><Link to="/fondos" className="dropdown-item">Fondos</Link></li>
                <li><Link to="/concurso" className="dropdown-item">Concurso</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
