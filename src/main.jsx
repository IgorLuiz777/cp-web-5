import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Aparelhos from './routes/Aparelhos/index.jsx'
import Prod1 from './routes/VisualizarProdutos/prod1.jsx'
import Prod2 from './routes/VisualizarProdutos/prod2.jsx'
import Prod3 from './routes/VisualizarProdutos/prod3.jsx'
import Prod4 from './routes/VisualizarProdutos/prod4.jsx'
import Prod5 from './routes/VisualizarProdutos/prod5.jsx'
import Error from './routes/Error/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/aparelhos',
        element: <Aparelhos/>
      },
      {
        path: '/prod1',
        element: <Prod1/>
      },
      {
        path: '/prod2',
        element: <Prod2/>
      },
      {
        path: '/prod3',
        element: <Prod3/>
      },
      {
        path: '/prod4',
        element: <Prod4/>
      },
      {
        path: '/prod5',
        element: <Prod5/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
