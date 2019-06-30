import React, { Component } from 'react'
import BlogComponent from './BlogComponent';
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

  render() {
    return (
      <div>
        <BlogComponent />
      </div>
    )
  }
}
export default HomeComponent;