import React, {useState} from 'react';
import {calculateWinner, calculateDraw} from '../utils/utils';
import CurrentPlayer from './CurrentPlayer';
import Board from './Board';
import HistoryMoves from './HistoryMoves';


export default function Game (props) {
    const [history, setHistory] = useState([{squares:  Array(9).fill(null)}]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);

    const jumpTo = i => {
        setStepNumber(i); 
        setXIsNext((i % 2) === 0);
        setHistory(history.slice(0, i + 1));
    }

    const handleClick = i => {
        const current = history.slice(0, stepNumber + 1)[history.length-1];
        const squares = [...current.squares];
        if (calculateWinner(squares) || calculateDraw(stepNumber)) {
            return;
        }
       xIsNext ? squares[i] = 'X' : squares[i] = 'O';
            setHistory(history.concat([{squares}]));
            setStepNumber(history.length);
            setXIsNext(!xIsNext);
    }
 
    const current = history[stepNumber];
    const win = calculateWinner(current.squares);
    const draw = calculateDraw(current.squares);
    let status;
    if (win) {
        status = `Winner: ${win.winner}`;
    } else {
        if (draw) {
            status = 'Draw';
        } else {
            status = `Next player: ${xIsNext ? 'X': 'O'}`;
        }
        
    }
    return (
        <div className="container">
            <CurrentPlayer status={status} />
                <div className="row">
                <Board squares={current.squares} winningSquares={win ? win.coordinates : []} onClick={handleClick} />
                <HistoryMoves history={history} onClick={jumpTo} />
            </div>
        </div>
    );
  }