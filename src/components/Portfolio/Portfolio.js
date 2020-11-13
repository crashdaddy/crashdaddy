import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import covid from './covid19.png';
import bier from './bier2.png';
import hangman from './hangmanprog2.png';
import puzlr from './puzzley19.png';
import phonodex from './phonodex2.png';
import swars from './swarsapi3.png';
import pnn from './pnn7.png';
import { Link } from '@material-ui/core';

class Portfolio extends Component {

    render() {
        return(
            <div><h1>Portfolio!<br/></h1>
            <div style={{textAlign:'center',marginTop:'40px',marginBottom:'50px',display:"flex",flexWrap:'wrap',justifyContent:'space-around'}}>
                
                <Paper elevation={3} style={{width:'500px',marginTop:'40px'}}>
                    <Link href="http://covidupdater.herokuapp.com/" target="blank">
                    <img src={covid} style={{width:'300px'}} alt=''/>
                    </Link>
                </Paper>
                <Paper elevation={3} style={{width:'500px',marginTop:'40px'}}>
                    <Link href="https://bierbitte.herokuapp.com/" target="blank">
                    <img src={bier} style={{width:'300px'}} alt=''/>
                    </Link>
                </Paper>
                <Paper elevation={3} style={{width:'500px',marginTop:'40px'}}>
                    <Link href="https://hangmanfun.netlify.app/" target="blank">
                    <img src={hangman} style={{width:'300px'}} alt=''/>
                    </Link>
                </Paper>
                <Paper elevation={3} style={{width:'500px',marginTop:'40px'}}>
                    <Link href="https://puzlr.herokuapp.com/" target="blank">    
                    <img src={puzlr} style={{width:'300px'}} alt=''/>
                    </Link>
                </Paper>
                <Paper elevation={3} style={{width:'500px',marginTop:'40px'}}>
                    <Link href="https://phonodex.herokuapp.com/" target="blank">    
                    <img src={phonodex} style={{width:'300px'}} alt=''/>
                    </Link>
                </Paper>
                <Paper elevation={3} style={{width:'500px',marginTop:'40px'}}>
                    <Link href="https://swarsapi.herokuapp.com/" target="blank">    
                    <img src={swars} style={{width:'300px'}} alt=''/>
                    </Link>
                </Paper>
                <Paper elevation={3} style={{width:'500px',marginTop:'40px'}}>
                    <Link href="https://patheticnews.herokuapp.com/" target="blank">    
                    <img src={pnn} style={{width:'300px'}} alt=''/>
                    </Link>
                </Paper>
             </div>
             </div>

        )
    }
}

export default Portfolio