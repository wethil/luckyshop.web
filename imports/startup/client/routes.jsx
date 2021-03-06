import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { App } from '../../ui/layouts/app.jsx';
import Index from '../../ui/components/index.jsx';
import { NotFound } from '../../ui/components/NotFound.jsx';
import Admin from '../../ui/components/admin/Admin.jsx'
import MainPage from '../../ui/components/mainPage/MainPage.jsx'
import {IsLoggedIn} from '../../ui/components/userAccount/IsLoggedIn.jsx'
import {MainUserComp} from '../../ui/composers/MainUserComp.jsx'

Meteor.startup(()=> {
    render (
        <Router history={browserHistory} >
            <Route path="/" component={App}  >
                <IndexRoute component={ Index }  />
    			<Route path="admin" component = {Admin} />
                <Route path="profile" component = {MainUserComp} />
                 <Route path="bye" component = {IsLoggedIn} />
            </Route>
            <Route path="*" component={NotFound} />
        </Router>,
        document.getElementById( 'react-root' )
    )
});
