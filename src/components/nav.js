import React from 'react'
import { Woops404 } from './woops404'
import { App } from './App'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom'


const Nav = () => (
    <Router>
        <div>

            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/woops" component={Woops404} />
                <Route path="*" component={Woops404} />
            </Switch>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/woops">Woops</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
        </div>
    </Router>
)
export default Nav
