import React from 'react';

export default function HistoryMovies({history, onClick}) {
    return (
        <div className="col-md-6 text-center">
            <div className="list-group my-2">
                <div className="list-group-item list-group-item-action list-group-item-primary text-center text-dark">
                    <strong>History of moves</strong>
                </div>
                {history.map((item, index) => {
                const desc = index ? `Go to move # ${index}` : 'Go to game start';
                return (
                <button key={index} className="list-group-item list-group-item-action text-center" type="button"  onClick={() => onClick(index)}>
                    {desc}
                </button>);
            })}
            </div>
        </div>
    );
}