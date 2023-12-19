import PostulacionForm from '../components/PostulacionForm';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';


function Postulacion() {
  return (
    <div>
      <NavBar />
      <Link to="/postulaciones">Ver Lista de Postulaciones</Link>
      <h1>Vista de Postulación</h1>
      <PostulacionForm />
    </div>
  );
}

export default Postulacion;