import React from 'react'
import { Woops404 } from './woops404'
import { App } from './App'
import { Menu } from './Menu'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'


const Nav = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/list-days" component={App}>
                    <Route to=":filter" component={App}/>
                </Route>
                <Route path="/add-day" component={App} />
                <Route path="*" component={Woops404} />
            </Switch>
            <Menu />
        </div>
    </Router>
)
export default Nav
