//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { observe } from './Game';

const rootEl = document.getElementById('root');

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
);


// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
