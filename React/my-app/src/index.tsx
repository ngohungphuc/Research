import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MonacoEditor from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MonacoEditor />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
