import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Admin from './Admin';

export default () => (
<BrowserRouter> 
    <Route path="/" exact component={App}/>
    <Route path="/Admin" exact component={Admin}/>
</BrowserRouter>
);