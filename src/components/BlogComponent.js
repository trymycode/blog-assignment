import React from 'react';
import './BlogComponent.css';

export default class BlogComponent extends React.Component {

  cardStyle = { width: "18rem" };

  render() {
    // let { title, description, author, image, likes, date, tags } = this.props;

    return (
      // <div className="card">
      //   <img className="card-image" src={image} alt="Card caption" />
      //   <div className="card-body">
      //     <h2 className="card-title">{title}</h2>
      //     <div>
      //       {tags.map(tag =>
      //         <span className="tags">{tag}</span>
      //       )}
      //     </div>
      //     <h5 className="text-muted">{author} | <small className="date">{new Date(date).toLocaleString()}</small></h5>
      //     <p className="card-text">{description.substring(0, 100)}...</p>
      //     <hr />
      //     <button className="button primary">Favourite</button>
      //     <div className="likes text-muted">
      //       <span className="heart">&#10084;</span> {likes} likes
      //         </div>
      //   </div>
      // </div>

      <div className="card" style={this.cardStyle}>
        <img src="https://image.shutterstock.com/image-vector/demo-grunge-rubber-stamp-vector-260nw-155195639.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary">Go somewhere</button>
          </div>
        </div>
        )
      }
}