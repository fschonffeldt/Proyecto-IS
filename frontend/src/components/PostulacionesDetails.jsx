import  { useState, useEffect } from 'react';
import { obtenerPostulacionPorId } from '../services/postulacion.service';

const PostulacionDetail = ({postId}) => {
  const [postulacion, setPostulacion] = useState(null);

  useEffect(() => {
    const obtenerPostulacion = async () => {
      const postulacionData = await obtenerPostulacionPorId(postId);
      setPostulacion(postulacionData);
    };

    obtenerPostulacion();
  }, [postId]);

  return (
    <div>
      {postulacion ? (
        <div>
          <h2>{postulacion.nombre}</h2>
          {/* Mostrar más detalles aquí */}
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default PostulacionDetail;