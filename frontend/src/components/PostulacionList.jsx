import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getPostulacionesPorCorreo, getPostulacionPorId } from '../services/postulacion.service';

const PostulacionList = () => {
  const { user } = useAuth();
  const [postulaciones, setPostulaciones] = useState([]);
  const [selectedPostulacion, setSelectedPostulacion] = useState(null);

  useEffect(() => {
    const fetchPostulaciones = async () => {
      try {
        if (user) {
          const data = await getPostulacionesPorCorreo(user.email);
          setPostulaciones(data);
        }
      } catch (error) {
        console.error('Error al obtener postulaciones:', error.message);
      }
    };

    fetchPostulaciones();
  }, [user]);

  const handlePostulacionClick = async (postId) => {
    try {
      const postulacion = await getPostulacionPorId(postId);
      setSelectedPostulacion(postulacion);
    } catch (error) {
      console.error('Error al obtener detalles de la postulación:', error.message);
    }
  };

  return (
    <div>
      <h2>Lista de Postulaciones por Correo</h2>
      <ul>
        {postulaciones.map((postulacion) => (
          <li key={postulacion.id} onClick={() => handlePostulacionClick(postulacion.id)}>
            {postulacion.id}
          </li>
        ))}
      </ul>

      {selectedPostulacion && (
        <div>
          <h3>Detalles de la Postulación</h3>
          <p>ID: {selectedPostulacion.id}</p>
          <p>Nombre Representante: {selectedPostulacion.nombreRepresentante}</p>
          {/* Agrega más detalles según la estructura de tu objeto de postulación */}
        </div>
      )}
    </div>
  );
};

export default PostulacionList;
