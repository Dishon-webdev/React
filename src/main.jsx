import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dishon from './dishon.jsx';
import Properties from './Properties.jsx';
import Count from './Mystate.jsx';
import Template from './Basic/template.jsx';
import List from './list.jsx';
import Useeffect from './Useeffect.jsx';
import Fetch from './fetch.jsx';
import Stopwatch from './Usedref.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Dishon /> */}
    {/* <Properties name="Developers" content="How are you" /> */}
    {/* <Count/> */}
    {/* <Template/>
    <List/> */}
    {/* <Useeffect/> */}
    {/* <Fetch/> */}
    <Stopwatch/>
  </StrictMode>,
)
