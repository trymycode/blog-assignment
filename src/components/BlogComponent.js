import React from 'react';
import './BlogComponent.css';
import {Link} from 'react-router-dom';
export default class BlogComponent extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       selectedId: this.props.data.id
    }
  }
  
  cardStyle = { width: "18rem" };
  displayDetails = ()=>{
    console.log("displayDetails is called", this.state.selectedId)
  }
  render() {
    console.log("Blog id",this.props.data.id)
    let { title, description, author, image, likes, date, tags } = this.props.data;
    let shortDescription = description.toString().substring(0,50);
    return (

      <div className="card" style={this.cardStyle}>
        <Link to={"/details/"+this.props.data.id}>
          <img src={image} className="card-img-top" 
          onClick={this.displayDetails} />
        </Link>
        <div className="card-body">
        <Link to={"/details/"+this.props.data.id}><h5 className="card-title">{title}</h5></Link>
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