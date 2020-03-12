import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import ErrorBoundary from './components/ErrorBoundary';
import * as serviceWorker from './serviceWorker';
import './index.css';


// ========================================
  
  ReactDOM.render(
    <ErrorBoundary>
        <Game />
    </ErrorBoundary>,
    document.getElementById('root')
  );
  
  serviceWorker.register();