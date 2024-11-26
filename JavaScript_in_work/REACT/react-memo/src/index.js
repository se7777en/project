import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';


// import Memo from './memo/memo';
// import PureComponent from './memo/PureComponent';
// import ShouldComponentUpdate from './memo/ShouldComponentUpdate';
// import Context from './ReactContext_class';
// import ReactContextFunc from './ReactContext_func';
// import CombinedContext from './CombinedContext/Main';
//  import Lazycomp from './ReactLazy/LazyComponent';
 //import USEReducer from './useReducer';
// import Outlet from './Outlet';
//  import Router from './Router';
  // import UseNavigate from './UseNavigate';
  // import NavLink from './NavLink';
  //  import ImportFrom from './dinamicImport/ImportFrom';
    import HOC from './HOC';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Memo /> */}
    {/* <PureComponent /> */}
    {/* <ShouldComponentUpdate /> */}
    {/* <Context /> */}
    {/* <ReactContextFunc /> */}
    {/* <CombinedContext /> */}
    {/* <Lazycomp /> */}
    {/* <USEReducer /> */}
    {/* <Outlet /> */}
    {/* <Router /> */}
    {/* <UseNavigate /> */}
    {/* <NavLink /> */}
    {/* <ImportFrom /> */}
    <HOC />
  </>
  //React.StrictMode
=======
import Memo from './memo';
=======
import 'bootstrap/dist/css/bootstrap.min.css';


// import Memo from './memo';
>>>>>>> 1dad9c6a7 (-ajs-book)
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
>>>>>>> e5bfd7728 (-amemo)
);

