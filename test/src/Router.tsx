import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Project from './Project';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'project',
        element: <Project />,
      },
    ],
  },
]);
