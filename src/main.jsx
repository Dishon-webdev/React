import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dishon from './dishon.jsx';
import Properties from './Properties.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Dishon /> */}
    <Properties name="Developers" content="How are you" />
  </StrictMode>,
)
