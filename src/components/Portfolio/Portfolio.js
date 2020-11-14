import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import { Link } from '@material-ui/core';

const cardClass = {marginTop:"20px",marginBottom:"20px",width:"80%",padding:"20px",textAlign:"left"}

const imgClass={width:'300px',float:'left',paddingRight:'10px'}

const portfolioLinks = [{
    "pic":"covid19.png",
    "link":"http://covidupdater.herokuapp.com/",
    "text":"A quarantine project I worked on with a classmate. This is actually our second covid tracker app, because the first was using a data source that got taken down"
},{
    "pic":"puzzley19.png",
    "link":"https://puzlr.herokuapp.com/",
    "text":"This was my capstone app for ACA. It's a project I've wanted to do for years. It uses the Unsplash API to deliver images and a proprietary algorithm to segment the images into puzzles that can be solved using Rubik's Cube-like motions."
},{
    "pic":"bier2.png",
    "link":"https://bierbitte.herokuapp.com/",
    "text":"Some apps don't do anything. This was an early exercise in reading API data and using React, so it just shows information about different beers and some filters. I used it as an opportunity to practice the infinite-scrolling method of API data presentation"
},{
    "pic":"hangmanprog2.png",
    "link":"https://hangmanfun.netlify.app/",
    "text":"Learning basic skills shouldn't have to be boring. This was one of our first projects at Austin Coding Academy."
},{
    "pic":"phonodex2.png",
    "link":"https://phonodex.herokuapp.com/",
    "text":"This is a good filler data API that I used to practice my infinite-scroll technique."
},{
    "pic":"swarsapi3.png",
    "link":"https://swarsapi.herokuapp.com/",
    "text":"The Star Wars API (https://swapi.dev/) is one of the funnest data sets for sci-fi nerds to train with. This implementation uses fetch-chaining to get that deep data. "
},{
    "pic":"pnn7.png",
    "link":"https://patheticnews.herokuapp.com/",
    "text":"This is another project I've often fantasized about; reverse-engineering the comment section of Reddit! This was a team project that we worked on to deliver data from the Hacker News API. We used infinite-scrolling on this one as well, adapting it for use with React, and also recursive nesting of the comments for each article."
}]

class Portfolio extends Component {

    render() {

        return(
            <div>
            <div style={{textAlign:'center',marginTop:'40px',marginBottom:'50px',display:"flex",flexWrap:'wrap',justifyContent:'space-around'}}>
                <span style={{textAlign:'left',width:'80%'}}><h1>These are apps I built or worked on with other students during my course at Austin Coding Academy</h1></span><br/>
               {portfolioLinks.map(link => (<Paper elevation={3} style={cardClass}>
                    <Link href={link.link} target="blank">    
                    <img src={link.pic} style={imgClass} alt='himom'/>
                   
                    </Link>
                    <span style={{fontSize:'24px'}}>{link.text}</span>
                </Paper>
               ))}
             </div>
             </div>

        )
    }
}

export default Portfolio