import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  React.createElement('h1'),
  { id: 'hello-world' },
  document.getElementById('root')
);

React.createElement(
  'h1',
  null,
  'This is the header'
);

React.createElement(
  'p',
  { className: 'main' },
  'Lorem Ipsum'
);

React.createElement(
  'nav',
  { className: 'main' },
  React.createElement(
    'input',
    { type: 'text', id: 'search' },
    null
  )
);