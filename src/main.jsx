import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// páginas
import Home from './routes/Home';
import PecaDelivery from './routes/PecaDelivery';


import './index.css'
import Cardapio from './routes/Cardapio';

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
        element: <PecaDelivery />,
      },
      {
        path: "/cardapio",
        element: <Cardapio />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
