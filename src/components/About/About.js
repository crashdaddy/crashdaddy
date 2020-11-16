import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import { Link } from '@material-ui/core';

const cardClass = {marginTop:"20px",marginBottom:"20px",width:"80%",padding:"20px",textAlign:"left"}

const aboutTopics = [{
    "title":"Hobbies",
    "text":"I play rock-n-roll piano, make memes on the internet, and write technical articles about programming concepts."
},{
    "title":"Languages I've used for development",
    "text":"BASIC, 6502 Assembly, MS-DOS, Fortran, RPG, Cobol, Pascal, HTML, PHP, Javascript, Visual Basic, React and a little Python. Enough to know I like it, so more on that later."
},{
    "title":"I like to be a tourist",
    "text":"I've walked about every trail in Austin, been to almost all the libraries and quite a few of the museums. My nerdy ideal first date would be Texas Memorial Museum."
},{
    "title":"I get around",
    "text":"I went to sixteen different schools growing up, lived in two countries, and had 42 jobs so far. I lived in one place for 20 years once, too. My last programming job was 6 years. I'm not from Texas originally, but got here as quick as I could."
},{
    "title":"Teamwork",
    "text":"I do my best work as part of a team, with me as the workhorse, doing the heavy lifting so the rest of the team can focus on aesthetics, cosmetics and sexy new functionality."
},{
    "title":"God's Algorithm",
    "text":"My Rubik's Cube software (Pascal, 97) messed up Rubik's Cube in 13 moves and solved it in 7 moves. That's some nerdy good fun right there."
},{
    "title":"I'm a veteran",
    "text":"I was in the US Army in the 80s. It was my job to guard CheckPoint Charlie in Berlin. We marched all over that town, camped out everywhere and rappelled off Hitler's bunker at midnight."
},{
    "title":"How I came to be in Austin",
    "text":"It was cold where I was, but for a couple days it was in the 60s because of warm wind coming from the south, so I followed that wind and turned up here."
},{
    "title":"Things I like",
    "text":"Zombie movies, detective novels, sitcoms. I have a million useless internet points on Reddit from making memes. I've written some fiction. I tried painting once; just enough to find out I suck."
},{
    "title":"Data Sources",
    "text":"When I first started, data was stored as bytes on a disk, then later as text files. My first database was DBase IV to build some auction software for a glassware business. I then went to mySql and SQL and have been using them ever since. I can manage data from text files, csv files, JSON objects or whatever format you like."
},{
    "title":"Where do you see yourself in five years?",
    "text":"Battling motorcycle gangs over the last few drops of clean water in a desolate landscape surrounded by zombies"
},{
    "title":"Cringey Memory",
    "text":"I once signed up for a stand-up comedy contest and the silence of the audience was the loudest sound I've ever heard."
},{
    "title":"Baby You're a Star",
    "text":"I've had the world record on two different arcade games; Robotron 2084 and Joust. I solved Rubik's Cube in 19 seconds back when the world record was 21. My memes have made Reddit's Front Page 12 times. Oh, and I won a bunch of awards in the Army."
}]

class About extends Component {

    render() {

        return(
            <div style={{textAlign:'center',marginTop:'40px',marginBottom:'50px',display:"flex",flexWrap:'wrap',justifyContent:'space-around'}}>
               
               {aboutTopics.map(link => (<div style={{marginLeft:'20px'}}>
                <span style={{textAlign:'left',marginLeft:'20px',width:'80%'}}><h1>{link.title}</h1></span><br/>    
                   <Paper elevation={3} style={cardClass}>
                    <span style={{fontSize:'24px'}}>{link.text}</span>
                </Paper>
                </div>
               ))}
             </div>

        )
    }
}

export default About