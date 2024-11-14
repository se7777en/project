import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Memo from './memo/memo';
// import PureComponent from './memo/PureComponent';
// import ShouldComponentUpdate from './memo/ShouldComponentUpdate';
// import Context from './ReactContext_class';
// import ReactContextFunc from './ReactContext_func';
// import CombinedContext from './CombinedContext/Main';
 import Lazycomp from './ReactLazy/LazyComponent';
  //  import USEReducer from './useReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Memo /> */}
    {/* <PureComponent /> */}
    {/* <ShouldComponentUpdate /> */}
    {/* <Context /> */}
    {/* <ReactContextFunc /> */}
    {/* <CombinedContext /> */}
    <Lazycomp />
    {/* <USEReducer /> */}
  </React.StrictMode>
);

