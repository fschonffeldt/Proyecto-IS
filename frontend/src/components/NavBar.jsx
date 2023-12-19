import { Link } from 'react-router-dom';
import '../assets/NavBar.css';
import "bootstrap/dist/css/bootstrap.min.css";

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
            <li className="nav-item">
              <Link to="/proyectos" className="nav-link">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link to="/postulacion" className="nav-link">Postulacion</Link>
            </li>
            <li className="nav-item">
              <Link to="/evaluacion" className="nav-link">Evaluacion</Link>
            </li>
            <li className="nav-item">
              <Link to="/fondos" className="nav-link">Fondos</Link>
            </li>
            <li className="nav-item">
              <Link to="/concurso" className="nav-link">Concurso</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default NavBar;
