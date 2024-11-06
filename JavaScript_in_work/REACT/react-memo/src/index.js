import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Memo from './memo';
// import PureComponent from './PureComponent';
// import ShouldComponentUpdate from './ShouldComponentUpdate';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Memo />
    {/* <PureComponent /> */}
    {/* <ShouldComponentUpdate /> */}
  </React.StrictMode>
);

