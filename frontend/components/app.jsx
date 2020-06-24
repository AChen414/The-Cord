import React from 'react'
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';

import SignupContainer from './session/signup_form_container';
import LoginContainer from './session/login_container';
import GreetingContainer from './greeting/greeting_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="app">
            <Route exact path="/" component={GreetingContainer} />
            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/signup' component={SignupContainer} />
    </div>
);

export default App;

/*
<Switch>
    <Route exact path='/' component={HomePageContainer} />
    <AuthRoute exact path='/login' component={LoginContainer} />
    <AuthRoute exact path='/signup' component={SignupContainer} />
</Switch>
*/