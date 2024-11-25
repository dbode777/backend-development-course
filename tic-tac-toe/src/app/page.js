"use client";

import { useState } from "react";

function Board({ squares, xIsNext, onPlay }) {

  function onSquareClick(idx) {
    if (squares[idx] || determineWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? 'X' : 'O';
    onPlay(newSquares);
  }

  function gameStatus(squares) {
    const winner = determineWinner(squares);
    if (winner) {
      return (
        <p className="status">{winner} wins!</p>
      )
    } else if (!squares.includes('')) {
      return (
        <p className="status">The game ends in a draw.</p>
      )
    }
  
    return (
      <p className="status">Next player: {xIsNext ? 'X' : 'O'}</p>
    )
  }

  //TODO: have the X and O values be dynamic images
  return (
    <>
      <p className="title">Tic-Tac-Toe: Xtreme Edition</p>
      <div className='container'>
        <h1 className="header1"> 
          Welcome to Xtreme Tic-Tac-Toe! The game is played on a 5x5 grid. This game slightly modifies the rules of classic Tic-Tac-Toe.
          The objective of the game is to get 4 in a row, either horizontally, vertically, or diagonally.
          The game is played by two players, X and O. The player who gets 4 in a row first wins the game.
        </h1>
        <h1 className="header2"> 
          { gameStatus(squares) }
        </h1>
      </div>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onClick = {() => onSquareClick(0)}/>
          <Square value={squares[1]} onClick = {() => onSquareClick(1)}/>
          <Square value={squares[2]} onClick = {() => onSquareClick(2)}/>
          <Square value={squares[3]} onClick = {() => onSquareClick(3)}/>
          <Square value={squares[4]} onClick = {() => onSquareClick(4)}/>
        </div>
        <div className="board-row">
          <Square value={squares[5]} onClick = {() => onSquareClick(5)}/>
          <Square value={squares[6]} onClick = {() => onSquareClick(6)}/>
          <Square value={squares[7]} onClick = {() => onSquareClick(7)}/>
          <Square value={squares[8]} onClick = {() => onSquareClick(8)}/>
          <Square value={squares[9]} onClick = {() => onSquareClick(9)}/>
        </div>
        <div className="board-row">
          <Square value={squares[10]} onClick = {() => onSquareClick(10)}/>
          <Square value={squares[11]} onClick = {() => onSquareClick(11)}/>
          <Square value={squares[12]} onClick = {() => onSquareClick(12)}/>
          <Square value={squares[13]} onClick = {() => onSquareClick(13)}/>
          <Square value={squares[14]} onClick = {() => onSquareClick(14)}/>
        </div>
        <div className="board-row">
          <Square value={squares[15]} onClick = {() => onSquareClick(15)}/>
          <Square value={squares[16]} onClick = {() => onSquareClick(16)}/>
          <Square value={squares[17]} onClick = {() => onSquareClick(17)}/>
          <Square value={squares[18]} onClick = {() => onSquareClick(18)}/>
          <Square value={squares[19]} onClick = {() => onSquareClick(19)}/>
        </div>
        <div className="board-row">
          <Square value={squares[20]} onClick = {() => onSquareClick(20)}/>
          <Square value={squares[21]} onClick = {() => onSquareClick(21)}/>
          <Square value={squares[22]} onClick = {() => onSquareClick(22)}/>
          <Square value={squares[23]} onClick = {() => onSquareClick(23)}/>
          <Square value={squares[24]} onClick = {() => onSquareClick(24)}/>
        </div>
      </div>
    </>
  )
}

function Square({ value, onClick }) {
  return <button className="square" onClick={onClick}>{value}</button>
}

function Restart({ onClick }) {
  return <button className="restart" onClick={onClick}>Reset Game</button>;
}

function determineWinner(squares) {
  const lines = [
    // horizontal wins
    [0, 1, 2, 3],
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [6, 7, 8, 9],
    [10, 11, 12, 13],
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [21, 22, 23, 24],
    // vertical wins
    [0, 5, 10, 15],
    [1, 6, 11, 16],
    [2, 7, 12, 17],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [6, 11, 16, 21],
    [7, 12, 17, 22],
    [8, 13, 18, 23],
    [9, 14, 19, 24],
    // diagonal wins
    [0, 6, 12, 18],
    [1, 7, 13, 19],
    [5, 11, 17, 23],
    [3, 7, 11, 15],
    [4, 8, 12, 16],
    [8, 12, 16, 20],
    [6, 12, 18, 24],
    [8, 12, 16, 20],
    [9, 13, 17, 21]
  ];
  for (let i = 0; i < lines.length; i++) {
    
    const [a, b, c, d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(25).fill('')]);
  const [currentMove, setCurrentMove] = useState(0);
  var xIsNext = currentMove % 2 === 0;
  var squares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    squares = Array(25).fill('');
    setHistory([Array(25).fill('')]);
    setCurrentMove(0);
    xIsNext = true;
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move + ', played by ' + (move % 2 === 1 ? 'X' : 'O');
    } else {
      description = 'Move history: ';
    }
    return (
      <li key={move + Math.random()}>
        <button className="game-info" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  
  return (
    <>
      <div className="container">
        <Board squares={ squares } xIsNext={ xIsNext } onPlay={ handlePlay }/>
        <div>
          <Restart onClick={() => resetGame()}></Restart>
        </div>
      </div>
      <div>
        <ol>{moves}</ol>
      </div>
    </>
  )
}