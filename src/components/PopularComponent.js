import React, { Component } from "react";
import BlogComponent from "./BlogComponent";
import "./PopularComponent.css";
// import FooterComponent from './FooterComponent';
// import axios from 'axios';

class PopularComponent extends Component {
  compare = (a, b) => {
    // Use toUpperCase() to ignore character casing
    const genreA = a.likes;
    const genreB = b.likes;

    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison * -1;
  };

  constructor(props) {
    super(props);
    this.state = {
      descendingBlogs : this.props.blogs.sort(this.compare)
    }
  }

  // bands.sort(compare);

  render() {
    // console.log(
    //   "Props of Home Component from app component",
    //   JSON.stringify()
    // );
    return (
      <div className="main-page">
        <div className="container">
          <div className="position">Most Popular</div>

          <div className="blogs">
            {this.state.descendingBlogs.map(blog => (
              <BlogComponent
                data={{
                  key: blog.id,
                  id: blog.id,
                  author: blog.author,
                  date: blog.created_at,
                  image: blog.image,
                  title: blog.title,
                  likes: blog.likes,
                  description: blog.description,
                  tags: blog.tags
                }}
                key={blog.id}
              />
            ))}
          </div>
        </div>
        {/* <FooterComponent /> */}
      </div>
    );
  }
}
export default PopularComponent;
