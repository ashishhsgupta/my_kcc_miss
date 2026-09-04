import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { RouterProvider } from 'react-router-dom';
import RouterComponents from '././assets/js/globalRouters/routers/RouterComponents'
import GlobalContextProvider from './assets/js/globalRouters/globalContext/GlobalContextProvider';

function App(){
  return <RouterProvider router={RouterComponents} />
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>,
)
