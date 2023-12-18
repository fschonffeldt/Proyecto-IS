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
            <li className="nav-item">
              <a className="nav-link" href="#">Proyectos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;