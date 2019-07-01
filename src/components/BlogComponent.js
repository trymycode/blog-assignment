import React from 'react';
import './BlogComponent.css';
import {Link} from 'react-router-dom';
export default class BlogComponent extends React.Component {

  cardStyle = { width: "18rem" };

  render() {
    let { title, description, author, image, likes, date, tags } = this.props.data;
    let shortDescription = description.toString().substring(0,50);
    return (

      <div className="card" style={this.cardStyle}>
        <Link to="/details"><img src={image} className="card-img-top" alt="..."/></Link>
        <div className="card-body">
        <Link to="/details"><h5 className="card-title">{title}</h5></Link>
          {tags.map((tag,index) =>
            <span className="badge badge-warning" key={index}>{tag}</span>
          )}
          <h6 className="text-muted">{author} | <small>{new Date(date).toLocaleString()}</small></h6>
          <p className="card-text">{shortDescription}...</p>
          <button className="btn btn-primary">Like</button>
          <div className="float-right text-muted">
            <span className="heart">&#10084;</span> {likes} likes
            </div>
        </div>
      </div>
    )
  }
}