import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Login from './routes/Login.jsx';
import Proyectos from './routes/Proyectos.jsx';
import Evaluacion from './routes/Evaluaciones.jsx';
import Postulacion from './routes/Postulacion.jsx';
import Fondos from './routes/Fondos.jsx';
import Concurso from './routes/Concurso.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/proyectos',
        element: <Proyectos />,
      },
      {
        path: '/Evaluacion',
        element: <Evaluacion />,
      }
      ,
      {
      path: '/fondos',
      element: <Fondos/>,
      },
      {
        path: '/concurso',
        element: <Concurso/>,
        },
        {
          path: '/postulaciones',
           element: <Postulacion />,
     
      },
    ],
  },
  {
    path: '/App',
    element: <App />,
  },

  {
    path: '/auth',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);