import Header from './components/Header.js';
import Player from './components/Player.js';
import Board from './components/Board.js';
import Square from './components/Square.js';
import './App.css';


function App(){
  return (
    <div>
      <Header/>
      <Player whichPlayer = "x" /> 
      <Player whichPlayer = "o" /> 
      <Board/> 
      <Square/> 
      <Square/> 
      <Square/> 
      <Square/> 
      <Square/> 
      <Square/> 
      <Square/> 
      <Square/> 
      <Square/> 
    </div>
  
  );
}

export default App; 
