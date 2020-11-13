import React, {Component} from 'react';
import crashdaddy from './crashdaddy.png'

class App extends Component {

    render() {
        return(
            <div style={{textAlign:'center',marginTop:'40px'}}>
                <img src={crashdaddy} style={{backgroundColor:'none',color:'white',zIndex:'-1'}} /><br/>
             </div>

        )
    }
}

export default App