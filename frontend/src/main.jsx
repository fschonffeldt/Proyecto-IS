import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Fondos from './routes/Fondos.jsx';

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
    ],
  },

    {
    path: '/fondos',
    element: <Fondos/>,
    }

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);