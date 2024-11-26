import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
=======
import ReactDOM from 'react-dom';
>>>>>>> 80c569597 (-ajavascript_in_work)
import App from './components/app/App';
// import MarvelService from './services/MarvelService';

import './style/style.scss';


// const marvelService = new MarvelService();

//marvelService.getAllCharacters().then(res => console.log(res));
// marvelService.getCharacter(1011052).then(res => console.log(res));
//marvelService.getAllCharacters().then(res => res.data.results.forEach(item => console.log(item.name)));

<<<<<<< HEAD
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> 80c569597 (-ajavascript_in_work)
);

