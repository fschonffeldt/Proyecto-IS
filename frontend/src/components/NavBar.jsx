import { Link } from 'react-router-dom';
import '../assets/NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Municipalidad</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Trámites</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Seguridad</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Turismo</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="proyectosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Proyectos
              </a>
              <ul className="dropdown-menu" aria-labelledby="proyectosDropdown">
                <li><Link to="/postulaciones" className="dropdown-item">Postulaciones</Link></li>
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
}

export default NavBar;