import React, { Component } from 'react'
import BlogComponent from './BlogComponent';
import "./HomeComponent.css";
// import FooterComponent from './FooterComponent';
// import axios from 'axios';

class HomeComponent extends Component {
  render() {
    // console.log("Props of Home Component from app component",this.props);
    return (
      <div className="main-page">
        <div className="position">Home</div>
    
      <div className="container">
       
          <div className="blogs">
          {this.props.blogs.map(blog => 
          <BlogComponent
            data={{
            key:blog.id,
            id:blog.id,
            author:blog.author, 
            date:blog.created_at,
            image:blog.image,
            title:blog.title,
            likes:blog.likes,
            description:blog.description,
            tags:blog.tags
            }}
            key = {blog.id}
          />)}
          </div>
        </div>
        {/* <FooterComponent /> */}
      </div>
    )
  }
}
export default HomeComponent;