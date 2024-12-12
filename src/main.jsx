import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import Principal from './Principal.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <Principal></Principal>

  </BrowserRouter>
)
