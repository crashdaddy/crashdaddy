import React from 'react';
import RedditIcon from '@material-ui/icons/Reddit';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
 
function SocialIcons() {
 
  return <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'30%',marginTop:'20px',marginLeft:'auto',marginRight:'auto'}}>
      <a href="https://www.reddit.com/user/crashdaddy" target="blank"><RedditIcon className="socialIcons" style={{width:'32px',height:'32px'}} /></a>
      {/* <a href="https://www.facebook.com/eddie.salazar.526875" target="blank"><FacebookIcon className="socialIcons" style={{width:'32px',height:'32px'}} /></a> */}
      <a href="https://twitter.com/crashdaddy4" target="blank"><TwitterIcon className="socialIcons" style={{width:'32px',height:'32px'}} /></a>
      <a href="https://www.linkedin.com/in/kenny-scoggins-9b292b21a/" target="blank"><LinkedInIcon className="socialIcons" style={{width:'32px',height:'32px'}} /></a>
      <a href="https://github.com/crashdaddy" target="blank"><GitHubIcon className="socialIcons" style={{width:'32px',height:'32px'}} /></a>
  </div>
}
 
export default SocialIcons;