import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App.tsx';
import AdminLayout from '../layouts/AdminLayout.tsx';
import Home from '../pages/Home/Home.tsx';
import About from '../pages/About/About.tsx';
import Login from '../pages/Login/Login.tsx';
import AllReleifGoods from '../pages/AllReleifGoods/AllReleifGoods.tsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: 'home',
//         element: <Home />,
//       },
//       {
//         path: 'reliefs',
//         element: <AllReleifGoods />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'login',
//         element: <Login />,
//       },
//     ],
//   },
//   {
//     path: '/admin',
//     element: <AdminLayout />,
//     children: [
//       {
//         index: true,
//         element: <AllReleifGoods />,
//       },
//     ],
//   },
// ]);

// export default router;

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="relief" element={<AllReleifGoods />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AllReleifGoods />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
