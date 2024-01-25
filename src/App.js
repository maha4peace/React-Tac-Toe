import Header from './components/Header.js';
import Player from './components/Player.js';
import Board from './components/Board.js';
import Square from './components/Square.js';
import './App.css';


function App(){
  return (
    <div>
      <Header/>
      <Player whichPlayer = "X" /> 
      <Player whichPlayer = "O" /> 
      <Board/> 
    </div>
  
  );
}

export default App; 
