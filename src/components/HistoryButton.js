import React from 'react';

export default function HistoryButtons({index, onClick}) {
    const desc = index ? `Go to move # ${index}` : 'Go to game start';
    return (
        <button type="button" onClick={() => onClick(index)} className="list-group-item list-group-item-action text-center">
            {desc}
        </button>
    );
}