import React, { Component } from 'react';
import FooterComponent from './FooterComponent';
class CreateComponent extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      title:"",
      description:"",
      tags: [],
      author:"",
      imageUrl:""
    }
  }
  onChange = (e) => {
      this.setState({
        [e.target.name]: [e.target.value]
      })
  }

  onSubmit = (e) =>{
    e.preventDefault();
  }
  render() {
    return (
      <div>
      <div className="container">
      <header>
        <h2>Create</h2>
      </header>
      <form>
      <div className="form-group row">
        <div className="col-sm-10">
          <input 
          type="text" 
          className="form-control rounded border border-secondary" 
          name="title" 
          placeholder="Title" 
          value= {this.state.title} 
          onChange={this.onChange}/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
        <textarea 
        className="form-control rounded border border-secondary"
        rows="3" 
        name="description"
        placeholder="Description" 
        value= {this.state.description} 
        onChange={this.onChange}></textarea>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <input 
          type="text" 
          className="form-control rounded border border-secondary" 
          name="tags"
          placeholder="Category/Tags" 
          value= {this.state.tags} 
          onChange={this.onChange}/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <input 
          type="text" 
          className="form-control rounded border border-secondary" 
          name="author" 
          placeholder="Author" 
          value= {this.state.author} 
          onChange={this.onChange}/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-10">
          <input 
          type="text" 
          className="form-control rounded border border-secondary" 
          name="imageUrl" 
          placeholder="Image URL Only" 
          value= {this.state.imageUrl} 
          onChange={this.onChange}/>
        </div>
      </div>
   </form>
   <button className="btn btn-outline-info" onSubmit={this.onSubmit}>PUBLISH</button>
    
  </div>
  <FooterComponent/> 
  </div>
          
          )
        }
      }
export default CreateComponent