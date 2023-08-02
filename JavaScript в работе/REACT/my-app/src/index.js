import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import  styled from 'styled-components'
import './index.css';
//import App from './props';
//import App from './props2';
import App from './Sobitiya';
import {Buttom} from './Sobitiya'

// perenaznachaem importirovanie stili Buttom
const BigButton = styled(Buttom)`
width: 245px;
margin: 0 auto;
text-align: center;
`;


// import {Header} from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const root2 = ReactDOM.createRoot(document.getElementById('h2'));

//const elem = <h2>hellow world</h2>;  jsx
//const elem = React.createElement('h2', {className: 'greating'}, 'hellow world'); // bez ispolzovaniya jsx napryamuu
// sozdaem elemet bez ispolzovaniya jsx 1) sam element 2) class esli netu to null 3) samo soderjimoe


// ======elementi=============
// const text = 'Hellow World!';
// const elem = (
//   <div>
//     <h2 className = "text">Text: {text}</h2> {/*v figurnix skobkax mojno vstavlyat vse krome obiektov*/}
//     <input type="text" />
//     <label htmlFor=""></label>
//     <button tabIndex="0">Click</button>
//   </div>
// );

root.render(
  <StrictMode>
    <App/>
    <BigButton as="a">Отправить отчет</BigButton>   {/*delaem  BigButton silkoi */}
    
  </StrictMode>
);

// root2.render(
//   <Header/>
// );
  
