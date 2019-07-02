import React, { Component } from 'react'
// import FooterComponent from './FooterComponent';
import axios from 'axios';
class DetailsComponent extends Component {

  // blogDetails = [{
  //   author: '',
  //   tags: [''],
  //   likes: 0,
  //   published: false,
  //   description: '',
  //   image: '',
  //   date: ''
  // }];

  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      blogDetails : [{
        author: '',
        tags: [''],
        likes: 0,
        published: false,
        description: '',
        image: '',
        date: ''
      }]
    }
  }
  componentDidMount() {
    axios.get(`http://test.peppersquare.com/api/v1/article`)
      .then(res => {
        this.setState({
          blogDetails: res.data.filter(blog => blog.id === Number(this.props.match.params.id))
        })
        // this.blogDetails = res.data.filter(blog => blog.id === Number(this.props.match.params.id));
        console.log(this.state.blogDetails[0]);
        // this.setState({
        //   blogs: blogs
        // });
      })
  }

  render() {
    // console.log("Details props", this.props.match.params.id)
    return (
      <div>
      <img src={this.state.blogDetails[0].image} className="card-img-top" alt={this.state.blogDetails[0].title} />
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.state.blogDetails[0].title}</h5>
              {this.state.blogDetails[0].tags.map((tag, index) =>
                <span className="badge badge-warning" key={index}>{tag}</span>
              )}
              <h6 className="text-muted">{this.state.blogDetails[0].author} | <small>{new Date(this.state.blogDetails[0].date).toLocaleString()}</small></h6>
              <p className="card-text">{this.state.blogDetails[0].shortDescription}...</p>
              <button className="btn btn-primary">Like</button>
              <div className="float-right text-muted">
                <span className="heart">&#10084;</span> {this.state.blogDetails[0].likes} likes
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DetailsComponent;