import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={ props => {
            if(window.localStorage.getItem('token')){
                // if user is authed
                return <Component {...props} />
            } else {
                // if user is not authed
                return <Redirect to="/login" />
            }
        }} />
    )
}

export default PrivateRoute;