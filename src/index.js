import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { Amount } from './ticket';
import { Type } from './ticket';
import Tickets from './ticket';

render(
<Tickets />, document.getElementById('root')
);

ReactDOM.render(
    <Amount />,
    document.querySelector('#amount')
);

ReactDOM.render(
    <Type />,
    document.querySelector('#ticket-type')
);
