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
      // console.log("Response->", res.data)
      const blogs = res.data;
      this.setState({
        blogs: blogs
      });
    })
  }
  render() {
    return (
      <Router>
          <Route exact path="/" 
           component={() => <HomeComponent blogs={this.state.blogs} />}>

          </Route>
          <Route exact path="/create" component={CreateComponent}></Route>
          <Route exact path="/details" component={DetailsComponent}></Route>
      </Router>
      
      
      // <Router>
      //   <div className="container">
      //     <Route exact path="/" component={HomeComponent}></Route>
      //     <Route exact path="/create" component={CreateComponent}></Route>
      //     <Route exact path="/details" component={DetailsComponent}></Route>
      //     <FooterComponent />
      //   </div>
      // </Router>
    )
  }
}
export default App;