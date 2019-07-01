import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
// import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import DetailsComponent from './components/DetailsComponent';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }
  componentDidMount() {
    axios.get(`http://test.peppersquare.com/api/v1/article`)
    .then(res => {
      const blogs = res.data;
      this.setState({
        blogs: blogs
      });
    })
  }
 
  createBlog = (title, author, description, tags, image, published) =>{
  
    const newBlog = {
      title: title,
      author: author,
      description: description,
      tags: [tags],
      image: image,
      published: published
    }

  
    axios.post("http://test.peppersquare.com/api/v1/article",newBlog)
    .then(res => {
      console.log("Response",res)
      this.setState({
        blogs: [...this.state.blogs, res.blogs]
      })
     
    })
    .catch(err=> console.log(err.response))
  }
  render() {
    return (
      <Router>
          <Route exact path="/" 
           component={() => <HomeComponent blogs={this.state.blogs} />}>

          </Route>
          <Route exact path="/create" 
          component={()=><CreateComponent createBlog={this.createBlog}/>}>
          </Route>
          <Route exact path="/details" component={DetailsComponent}></Route>
      </Router>
    )
  }
}
export default App;