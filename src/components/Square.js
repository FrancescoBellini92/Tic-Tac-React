import React from 'react';

export default function Square({style, value, onClick}) {
    return (
    <button className="square" style={style} onClick={() => onClick()}>
        {value}
    </button>
    );
  }
  
 