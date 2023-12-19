import FondoForm from '../components/FondoForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener esto si no lo has importado en otro lugar
import NavBar from '../components/NavBar';
function Fondos() {
  return (
    <div>
        <NavBar />
      <h1 className="my-4">Fondos Municipio</h1>
      <FondoForm />
    </div>
  );
}

export default Fondos;

