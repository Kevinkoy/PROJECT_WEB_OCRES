import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import Admin from './Admin';
/// 
import Stickynotes from './Components/Stickynotes';
import Notifications from './Components/Notifications';
import Spendings from './Components/Spendings';

export default () => (
<BrowserRouter> 
    <Route path="/" exact component={App}/>
    <Route path="/Admin" exact component={Admin}/>
    <Route path="/stickynotes" exact component={Stickynotes}/>
    <Route path="/notifications" exact component={Notifications}/>
    <Route path="/spendings" exact component={Spendings}/>
</BrowserRouter>
);