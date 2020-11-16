import React, {Component} from 'react';
import crashdaddy from './crashdaddy.png'
import SocialIcons from '../SocialIcons/SocialIcons'

class App extends Component {

    render() {
        return(
            <div style={{textAlign:'center',marginTop:'80px'}}>
                <img src={crashdaddy} style={{backgroundColor:'none',color:'white',zIndex:'-1'}} /><br/>
                <SocialIcons />
             </div>

        )
    }
}

export default App