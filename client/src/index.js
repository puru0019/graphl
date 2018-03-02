import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import RenderPost from './components/RenderPost';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RenderPost />, document.getElementById('root'));
registerServiceWorker();
