import React from 'react';
import HistoryButton from './HistoryButton';

export default function History({history, onClick}) {
    return (
        <div className="col-md-6" >
            <div className="list-group" style={{maxHeight: '250px', overflowY: 'auto'}}>
                <div className="list-group-item list-group-item-action list-group-item-primary text-center text-dark">
                    <strong>History of moves</strong>
                </div>
                {history.map((item, index) => <HistoryButton index={index} onClick={onClick} key={index}></HistoryButton>)}
            </div>
        </div>
    );
}