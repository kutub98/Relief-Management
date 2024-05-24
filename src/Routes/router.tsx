import App from '../App.tsx';
import { createBrowserRouter } from 'react-router-dom';
import AllReleifGoods from '../pages/AllReleifGoods/AllReleifGoods.tsx';
import AdminLayout from '../layouts/AdminLayout.tsx';
import Home from '../pages/Home/Home.tsx';
import About from '../pages/About/About.tsx';
import Login from '../pages/Login/Login.tsx';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: '/reliefs',
        element: <AllReleifGoods />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AllReleifGoods />,
      },
    ],
  },
]);
