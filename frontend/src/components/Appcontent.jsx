const AppContent = () => {

        return (
          <main className="container mt-3">
            <div className="row">
              <div className="col-md-12 text-center mb-3">
                {/* Imagen en el centro */}
                <img src="/assets/camion.jpg" alt="Municipalidad" className="img-fluid" />
              </div>
              <div className="col-md-8">
                {/* Contenido de la municipalidad */}
                <h2>Información Municipal</h2>
                <p>Descubre todo lo relacionado con nuestra municipalidad.</p>
              </div>
              <div className="col-md-4">
                {/* Contenido de las opciones */}
                <a href="#" className="btn btn-primary">Iniciar Sesión</a>
              </div>
            </div>
          </main>
        );
      }

  export default AppContent;