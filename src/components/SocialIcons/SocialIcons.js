import React from 'react';
import RedditIcon from '@material-ui/icons/Reddit';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
 
function SocialIcons() {
 
  return <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'30%',marginTop:'20px',marginLeft:'auto',marginRight:'auto'}}>
      <a href="https://www.reddit.com/user/crashdaddy" target="blank"><RedditIcon style={{fill:'grey',width:'32px',height:'32px'}} /></a>
      <a href="https://www.facebook.com/eddie.salazar.526875" target="blank"><FacebookIcon style={{fill:'grey',width:'32px',height:'32px'}} /></a>
      <a href="https://twitter.com/crashdaddy4" target="blank"><TwitterIcon style={{fill:'grey',width:'32px',height:'32px'}} /></a>
      <a href="https://www.linkedin.com/in/kenneth-scoggins-464a48197/" target="blank"><LinkedInIcon style={{fill:'grey',width:'32px',height:'32px'}} /></a>
      <a href="https://github.com/crashdaddy" target="blank"><GitHubIcon style={{fill:'grey',width:'32px',height:'32px'}} /></a>
  </div>
}
 
export default SocialIcons;