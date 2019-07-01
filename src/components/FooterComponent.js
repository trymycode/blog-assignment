import React, { Component } from 'react';
import "./FooterComponent.css";
import {Link} from 'react-router-dom';
 class FooterComponent extends Component {
  render() {
    return (
      <div className="footer">
         <Link to="/">
         <label className="center ml-1">Home</label> 
         </Link>
         <Link to="/create">
         <label className="center ml-1">Create</label> 
         </Link>
         <Link to="/details">
         <label className="center ml-1">Details</label> 
         </Link>
      </div>
    )
  }
}
export default FooterComponent;