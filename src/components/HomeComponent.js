import React, { Component } from 'react'
import BlogComponent from './BlogComponent';
import "./HomeComponent.css"
import axios from 'axios';

class HomeComponent extends Component {

  componentDidMount() {
    axios.get(`http://test.peppersquare.com/api/v1/article`)
    .then(res => {
      const blogs = res.data;
      this.setState({
        blogs: blogs
      });
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  render() {
    return (
      <div className="main-page">
        <div className="container">
        <header>
          <h1>Blog App</h1>
        </header>
        <main>
          <div className="blogs">
          {this.state.blogs.map(blog => 
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
        </main>
      </div>
      </div>
    )
  }
}
export default HomeComponent;