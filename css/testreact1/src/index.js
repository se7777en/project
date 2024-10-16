import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App/useCallBack';
//  import App1 from './App/useMemo';
 import App2 from './App/useRef';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App1 /> */}
    <App2 />
  </React.StrictMode>
);
