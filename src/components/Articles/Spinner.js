import React, { Component } from "react";


class Spinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }
  
  render() {
       return (
         <div style={{width:'40%',textAlign:'center'}}>
          <img src = "loader.gif" alt="" style={{float:'left',width:'250px'}}/> Retrieving articles from Medium.com
         </div>
    );
  }
}

export default Spinner;