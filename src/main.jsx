import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //instalar o bootstrap https://celke.com.br/artigo/como-integrar-o-react-com-bootstrap

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
