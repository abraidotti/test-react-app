//import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

export default class Board extends Component {
  render (){
    return (
      <div>
        <Square black>
          <Knight />
        </Square>
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};

ReactDOM.render(
  <Square black>
    <Knight />
  </Square>,
  document.getElementById('root'));


// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
