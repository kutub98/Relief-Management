import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
import Router from './Routes/router.tsx';
import './index.css';
import 'antd/dist/reset.css';
// import { RouterProvider } from 'react-router-dom';
// import router from './Routes/router.tsx';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <RouterProvider router={Router}>
//       <App />
//     </RouterProvider>
//   </React.StrictMode>,
// );
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
);
