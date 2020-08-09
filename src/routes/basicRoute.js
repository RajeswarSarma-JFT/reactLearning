import React from 'react';
import { BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom'

import First from './../component/firstfile.js';
import Second from './../component/secondfile.js';
import Third from './../component/thirdfile.js';

function Routesfile(){

    return(
        <React.Fragment>
            <Router >
                <Switch>
                    <Route  path = "/first"  component = {First} />
                    <Route  path = "/second"  component = {Second} />
                    <Route exact path = "/third" exact component = {Third} />
                    <Redirect to="/first"/>
                </Switch>
            </Router>
        </React.Fragment>
    );
}
export default Routesfile;
