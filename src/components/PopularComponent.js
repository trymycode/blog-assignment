import React, { Component } from 'react';
import FooterComponent from './FooterComponent';

 class PopularComponent extends Component {
  render() {
    return (
      <div>
        <div className="position">Most Popular</div>
        <div className="container"></div>
        <FooterComponent/>
      </div>
    )
  }
}
export default PopularComponent;