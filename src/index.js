import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/Styles/index.css';
import Router from './Components/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
