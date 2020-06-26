import React from 'react'
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';

import SignupContainer from './session/signup_form_container';
import LoginContainer from './session/login_container';
import GreetingContainer from './greeting/greeting_container'
import MainContainer from './main/main_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className="app">
            <Switch>
                <ProtectedRoute path="/@me" component={MainContainer}/>
                <AuthRoute exact path='/login' component={LoginContainer} />
                <AuthRoute exact path='/signup' component={SignupContainer} />
                <AuthRoute exact path="/" component={GreetingContainer} />
            </Switch>
    </div>
);

export default App;
