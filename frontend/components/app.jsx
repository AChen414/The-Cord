import React from 'react'
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';

import SignupContainer from './session/signup_form_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <h1>Discord</h1>
        
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/signup' component={SignupContainer} />
    </div>
);

export default App;

/*
<Switch>
    <AuthRoute exact path='/login' component={LoginContainer} />
    <AuthRoute exact path='/signup' component={SignupContainer} />
    <Route exact path='/' component={HomePageContainer} />
</Switch>
*/