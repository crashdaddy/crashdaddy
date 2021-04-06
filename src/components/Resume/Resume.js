import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';

class Resume extends Component {

    render() {
        return(
            <div>
            <div style={{textAlign:'left',marginTop:'80px',width:'70%',marginLeft:'auto',marginRight:'auto',marginBottom:'80px'}}>
                <Paper elevation={3} style={{paddingTop:'30px',paddingRight:'80px',paddingLeft:'80px',paddingBottom:'40px'}}>
                <span style={{fontSize:'36px'}}><b>Kenneth E. Scoggins</b></span> <br/>309 E 11th St #301, Austin, TX 78701 kennethscoggins@mail.com <br/>
                <p/>
                <span className="resumeTitles"><b>About Me:</b></span><br/>
                <p>I am seeking a developer position, preferably working with a MERN stack, though I'm also proficient with Microsoft Visual Studio and a .NET environment. 
                   I'm more interested in working with a team that's having an adventure than a boiler room churning money. I want a job
                   that makes me hate vacations. I enjoy complex, dynamic projects that are heavily data-driven and interactive. 
                   Wouldn't mind helping develop a community-type application or an algorithmic focused app like a meme generator or something. 
                   I possess flexibility, am a fast learner, have a contemporary skillset, soft skills and the ability and empathy to mentor younger engineers.<br/>                    
                   <p/>
                   I've developed software to solve Rubik's Cube and play piano. I've built games, libraries, tools. I've almost constantly had a website
                   of my own; usually a community site where I can create apps and people can play with them.
                </p>
                <span className="resumeTitles"><b>Technical Skills:</b></span><br/>
                <p>
                    Full Stack: mySql/SQL/Postgre/MongoDB, NodeJS, Express, React
                </p>
                <p>
                   I have worked with data sets containing millions of records in a realtime, dynamic environment for Safeway.
                   I created a production-management package for them that they continued to use for years after I retired.
                   I build low maintenance software with little to no need for further maintenance or intervention from me.             
                </p>
                <p>
                   As a team player, I've written <a href="https://medium.com/@kennethscoggins" target="blank">a series of technical articles</a> to share some of my more intricate abilities 
                   (infinite scrolling, API fetch-chaining, React, etc) with other developers.
                </p>
                <p>
                    Coming from a generation where the software developer was responsible for personally manipulating every single pixel on the screen, 
                    I've worked with complicated algorithms to solve seemingly impossible problems. I don't just think the Breadth-First Search Algorithm is a good
                    idea, but I've actually used it in practical situations because it was the best solution.
                </p>
                <p>
                    I have recently graduated from Austin Coding Academy with their certification as Full Stack Web Developer Javascript.
                    Their course has caught me up to date with the current development paradigm. I really appreciate the new levels of flexibility and interoperability
                    that have been achieved in programming.
                </p>
                <span className="resumeTitles"><b>Education:</b></span> <br/>
                <p>
                    Missouri Southern State College 1986-1991. I aced all the computer classes, but eventually lost funding
                    to continue the rest of the curriculum.
                </p>
                <p>
                    Austin Coding Academy 2019-2020. Graduated with certification as Full Stack Web Developer (Javascript)
                </p>
                <span className="resumeTitles"><b>Experience:</b></span><br/>
                <p>
                    I worked as a computer programmer for Safeway from 2007-2013. During that period I designed and created a data-management
                    system for the entire facility using MS SQL Server and VS2007 and 30 workstations. Production operators could enter realtime product measurements into a computer at their
                    workstation, and all that data would be aggregated, measured and analyzed and available to management through their own secure website.
                </p>
                <span className="resumeTitles"><b>References:</b></span><br/>
                References are available upon request
                </Paper>
             </div>
             </div>
        )
    }
}

export default Resume