
const AppContent = () => {
  return (
    <main className="container mt-3">
      <div className="row">
        <div className="col-md-12 text-center mb-3">
          {/* Imagen en el centro */}
          <img src="./assets/camion.jpg" alt="Municipio"/>
        </div>
        <div className="col-md-8">
          {/* Contenido de la municipalidad */}
          <h2 className="mb-4">Información Municipal</h2>
          <p>
            Bienvenido al Municipio. Aquí puedes descubrir todo lo relacionado con nuestra comunidad.
            Te ofrecemos servicios, trámites y noticias importantes para ti.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AppContent;
