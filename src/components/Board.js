import React from 'react';
import Square from './Square';

export default function Board ({squares, winningSquares, onClick}) {
    const renderSquare = i => {
        const style  = winningSquares.includes(i) ? {color:'green'} : null;
        return <Square value={squares[i]} style={style} onClick={() => onClick(i)} />;
    }
    return (

            <div className="col-md-6">
                <div className="row justify-content-center">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="row justify-content-center">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="row justify-content-center">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>

    );
}