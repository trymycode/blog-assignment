import React, { Component } from 'react';
import "./FooterComponent.css";
import {Link} from 'react-router-dom';

export default class FooterComponent extends Component {
  render() {
    return (
      <div className="footer">
        <Link to='/'>Home</Link>
        <Link to='/create'>Create</Link>
      </div>
    )
  }
}
