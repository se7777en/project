import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Memo from './memo';
// import PureComponent from './PureComponent';
// import ShouldComponentUpdate from './ShouldComponentUpdate';
// import Context from './ReactContext_class';
// import ReactContextFunc from './ReactContext_func';
// import CombinedContext from './CombinedContext/Main';
   import USEReducer from './useReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Memo /> */}
    {/* <PureComponent /> */}
    {/* <ShouldComponentUpdate /> */}
    {/* <Context /> */}
    {/* <ReactContextFunc /> */}
    {/* <CombinedContext /> */}
    <USEReducer />
  </React.StrictMode>
);

