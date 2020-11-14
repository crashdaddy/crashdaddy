import React from 'react'
import { Switch, Route } from 'react-router';
import App from './components/App/App'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Articles from './components/Articles/Articles';

const Router = () => {
    return (
        <Switch>
            <Route exact path ="/" component={App} />
            <Route path="/about" component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/articles" component={Articles}/>
        </Switch>
    )
}

// Start Router function here //
export default Router