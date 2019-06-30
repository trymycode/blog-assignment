import React, { Component } from 'react';

class CreateComponent extends Component {
  render() {
    return (
      <div>
      <header>
        <h2>Create</h2>
      </header>
      <form>
      <div className="form-group row">
        <div className="col-sm-10">
          <input type="text" className="form-control rounded border border-secondary" id="staticEmail" placeholder="Title" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
        <textarea className="form-control rounded border border-secondary" id="exampleFormControlTextarea1" rows="3" 
        placeholder="Description"></textarea>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <input type="text" className="form-control rounded border border-secondary" id="staticEmail" placeholder="Category/Tags" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <input type="text" className="form-control rounded border border-secondary" id="staticEmail" placeholder="Author" />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <input type="text" className="form-control rounded border border-secondary" id="staticEmail" placeholder="Image URL Only" />
        </div>
      </div>
   </form>
   <button className="btn btn-outline-info">PUBLISH</button>
  </div>  
          
          )
        }
      }
export default CreateComponent