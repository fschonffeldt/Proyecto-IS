import { useForm } from 'react-hook-form';
import { createConcurso } from '../services/concurso.service';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ConcursoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await createConcurso(data);
      if (response) {
        console.log(response);
        navigate('/');
      }
    } catch (error) {
      console.error('Error al enviar el formulario de concurso:', error);
    }
  };

  return (
    <Container className="form-container mt-5">
      <h2>Nuevo Concurso</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nombre">
            <Form.Label>Nombre del concurso:</Form.Label>
            <Form.Control
              {...register('nombre', { required: 'Este campo es obligatorio' })}
            />
            {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="montoTotal">
            <Form.Label>Monto Total del Fondo:</Form.Label>
            <Form.Control
              {...register('montoTotal', { required: 'Este campo es obligatorio', min: { value: 1, message: 'El monto debe ser mayor que cero' } })}
            />
            {errors.montoTotal && <span className="error-message">{errors.montoTotal.message}</span>}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="montoRepartir">
            <Form.Label>Monto a Repartir:</Form.Label>
            <Form.Control
              {...register('montoRepartir', { required: 'Este campo es obligatorio', min: { value: 1, message: 'El monto debe ser mayor que cero' } })}
            />
            {errors.montoRepartir && <span className="error-message">{errors.montoRepartir.message}</span>}
          </Form.Group>
        </Row>

        {/* Agrega más campos según tus necesidades */}

        <Button type="submit">Crear Concurso</Button>
      </Form>
    </Container>
  );
};

export default ConcursoForm;
