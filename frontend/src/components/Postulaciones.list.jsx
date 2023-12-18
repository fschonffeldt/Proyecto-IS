 import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listarPostulacionesPorRutRepresentante } from '../services/postulacion.service';

const PostulacionesList = ({ rutRepresentante }) => {
  const [postulaciones, setPostulaciones] = useState([]);

  useEffect(() => {
    const obtenerPostulaciones = async () => {
      const postulacionesData = await listarPostulacionesPorRutRepresentante(rutRepresentante);
      setPostulaciones(postulacionesData);
    };

    obtenerPostulaciones();
  }, [rutRepresentante]);

  return (
    <div>
      <h2>Postulaciones de {rutRepresentante}</h2>
      <ul>
        {postulaciones.map((postulacion) => (
          <li key={postulacion.id}>
            <Link to={`/postulaciones/${postulacion.id}`}>{postulacion.nombre}</Link>
            <button>Seguimiento</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostulacionesList;