import React, { Component } from "react";
import Axios from "axios";
import ShowBlog from "./ShowBlog";
// import Spinner from "../Spinner/Spinner";


export class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        ptitle: "",
        name: "",
        avtar: "",
        profileurl: "",
      },
      item: [],
      isloading: true,
      error: null
    };
  }
  mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kennethscoggins";

  componentDidMount() {
    Axios.get(this.mediumURL)

      .then((data) => {
        // console.log(data.data)
        const avatar = data.data.feed.image;
        const profileLink = data.data.feed.link;
        const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(item => item.categories.length > 0);

        const title = data.data.feed.title;

        this.setState(
          (pre) => ({
            profile: {
              ...pre.profile,
              ptitle: title,
              profileurl: profileLink,
              avtar: avatar,

            },
            item: posts,
            isloading: false
          }),
          () => {
            console.log(this.state);
          }
        );
        console.log(data, res);
      })
      .catch((e) => {
        this.setState({ error: e.toJSON() })
        console.log(e);
      });
  }
  render() {
   
    let post

    if (this.state.item) {
      post = this.state.item.map((post, index) => (
        <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
      ))
    }
    if (this.state.isloading) {
    //   post = <Spinner />
    }
    if (this.state.error) {
      let error = this.state.error.code ? this.state.error.code : this.state.error.name;
      let errorMsg = this.state.error.message;
      post = (
        <>
          <h2 className="red center1">{error}</h2>
          <p className="errorMessage center1">{errorMsg}</p>
        </>
      );
    }
    return (
      <div className="container" style={{marginBottom:'20px',marginTop:'80px'}}>
        <div className="row">
        <span><h1>&nbsp;&nbsp;&nbsp;These are my most recent technical articles on <a href="https://medium.com/@kennethscoggins">Medium.com</a></h1></span>
          <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',alignItems:'flex-start'}}>
          {post}
          <span style={{float:"right"}}><h1><a href="https://medium.com/@kennethscoggins">View More</a>&nbsp;&nbsp;&nbsp;</h1></span>
          </div>
        </div>
         </div>
    );
  }
}

export default Blog;