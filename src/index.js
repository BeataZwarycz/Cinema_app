import React from 'react';
import { render } from 'react-dom';
import Hello from './form';


const App = () => (
    <div id='form'>
        <Hello name="reservation" />
    </div>
);

render(<App />, document.getElementById('root'));
