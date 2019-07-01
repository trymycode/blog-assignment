import React, { Component } from 'react'
import BlogComponent from './BlogComponent';
import "./HomeComponent.css";
import FooterComponent from './FooterComponent';
// import axios from 'axios';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
   
  }

  // componentDidMount() {
  //   axios.get(`http://test.peppersquare.com/api/v1/article`)
  //   .then(res => {
  //     console.log("Response->", res.data)
  //     const blogs = res.data;
  //     this.setState({
  //       blogs: blogs
  //     });
  //   })
  // }
  render() {
    console.log("Props of Home Component from app component",this.props);
    return (
      <div className="main-page">
      <div className="container">
       <div className="position">Home</div>
    
          <div className="blogs">
          {this.props.blogs.map(blog => 
          <BlogComponent
            key={blog.id}
            author={blog.author} 
            date={blog.created_at}
            image={blog.image}
            title={blog.title}
            likes={blog.likes}
            description={blog.description}
            tags={blog.tags}
          />)}
          </div>
        </div>
        <FooterComponent />
      </div>
    )
  }
}
export default HomeComponent;