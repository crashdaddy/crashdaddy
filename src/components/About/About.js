import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import { Link } from '@material-ui/core';

const cardClass = {marginTop:"20px",marginBottom:"20px",width:"80%",padding:"20px",textAlign:"left"}

const imgClass={width:'300px',float:'left',paddingRight:'10px'}

const aboutTopics = [{
    "title":"Hobbies",
    "text":"I play rock-n-roll piano, make memes on the internet, and write technical articles about programming concepts."
},{
    "title":"Languages I've used for development",
    "text":"BASIC, 6502 Assembly, MS-DOS, Fortran, RPG, Cobol, Pascal, HTML, PHP, Javascript, Visual Basic, React"
},{
    "title":"I like to be a tourist",
    "text":"I've walked about every trail in Austin, been to almost all the libraries and quite a few of the museums. My nerdy ideal first date would be Texas Memorial Museum."
},{
    "title":"I get around",
    "text":"I went to sixteen different schools growing up, lived in two countries, and had 42 jobs so far. I lived in one place for 20 years once, too. My last programming job was 6 years. I'm not from Texas originally, but got here as quick as I could."
},{
    "title":"I'm a veteran",
    "text":"I was in the US Army in the 80s. It was my job to guard CheckPoint Charlie in Berlin. We marched all over that town, camped out everywhere and rappelled off Hitler's bunker at midnight."
},{
    "title":"Things I like",
    "text":"Zombie movies, detective novels, sitcoms. I have a million useless internet points on Reddit from making memes. I've written some fiction. I tried painting once; just enough to find out I suck."
},{
    "title":"Data Sources",
    "text":"When I first started, data was stored as bytes on a disk, then later as text files. My first database was DBase IV to build some auction software for a glassware business. I then went to mySql and SQL and have been using them ever since. I can use text files, csv files, JSON objects to manage data."
}]

class About extends Component {

    render() {

        return(
            <div>
            <div style={{textAlign:'center',marginTop:'40px',marginBottom:'50px',display:"flex",flexWrap:'wrap',justifyContent:'space-around'}}>
               
               {aboutTopics.map(link => (<div style={{marginLeft:'20px'}}>
                <span style={{textAlign:'left',marginLeft:'20px',width:'80%'}}><h1>{link.title}</h1></span><br/>    
                   <Paper elevation={3} style={cardClass}>
                    <span style={{fontSize:'24px'}}>{link.text}</span>
                </Paper>
                </div>
               ))}
             </div>
             </div>

        )
    }
}

export default About