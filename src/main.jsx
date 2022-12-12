import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

//paginas
import Home from "./routes/Home";
import NewPost from './routes/NewPost';
import Menu from './routes/Menu';
import QuemSomos from './routes/QuemSomos';
import TrabalheConosco from './routes/TrabalheConosco';

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/quemsomos",
        element: <QuemSomos />,
      },
      {
        path: "/trabalheconosco",
        element: <TrabalheConosco />,
      },
      
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
