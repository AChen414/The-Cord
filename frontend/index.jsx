import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


//////////Testing///////////
import { logout } from './actions/session_actions';
import { fetchServers } from './actions/server_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUser: window.currentUser },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);

    ///////////////TESTING//////////////
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.logout = logout;
    window.fetchServers = fetchServers;
        //dispatch(fetchServers()).then(console.log)
})