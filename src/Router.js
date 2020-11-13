import React from 'react'
import { Switch, Route } from 'react-router';
import App from './components/App/App'


const Router = () => {
    return (
        <Switch>
            <Route exact path ="/" component={App} />
            {/* <Route path="/starships" component={Starships}/> */}
      
        </Switch>
    )
}

// Start Router function here //
export default Router