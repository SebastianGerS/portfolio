import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/Styles/index.css';
import Routes from './Components/Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
