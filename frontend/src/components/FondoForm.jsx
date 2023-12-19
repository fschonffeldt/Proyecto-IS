import { useForm } from 'react-hook-form';
import { createfondos } from '../services/fondos.service';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './FondoForm.css';

const FondoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await createfondos(data);
      if (response) {
        console.log(response);
        navigate('/');
      }
    } catch (error) {
      console.error('Error al enviar el formulario de fondo:', error);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Nuevo Fondo</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nombre">
            <Form.Label>Nombre del fondo:</Form.Label>
            <Form.Control
              {...register('nombre', { required: 'Este campo es obligatorio' })}
              className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
            />
            {errors.nombre && <div className="invalid-feedback">{errors.nombre.message}</div>}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="montoTotal">
            <Form.Label>Monto Total:</Form.Label>
            <Form.Control
              {...register('montoTotal', { required: 'Este campo es obligatorio', min: { value: 1, message: 'El monto debe ser mayor que cero' } })}
              className={`form-control ${errors.montoTotal ? 'is-invalid' : ''}`}
            />
            {errors.montoTotal && <div className="invalid-feedback">{errors.montoTotal.message}</div>}
          </Form.Group>
        </Row>

        {/* Agrega más campos según tus necesidades */}

        <Button type="submit" variant="primary">Crear Fondo</Button>
      </Form>
    </Container>
  );
};

export default FondoForm;
