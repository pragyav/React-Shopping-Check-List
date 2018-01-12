import React, { Component } from 'react';

class AddForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      label:'',
      qty:''
  }}

  newItem = (e)=>{
    e.preventDefault();
    this.props.addItem(this.state.label, this.state.qty);
    this.setState({
      label: '',
      qty: ''
  })}     

  render() {
    return (
      <div className="container">
        <h3>{this.props.title}</h3>
        <form onSubmit={this.newItem}>
          <input id="name" type="text" placeholder='Item Name'        
           value={this.state.label} 
           onChange={(e) => this.setState({ label: e.target.value })}
           required/>
          <input id="qty" type="number" placeholder='Quantity' 
            value={this.state.qty} 
            onChange={(e) => this.setState({ qty: e.target.value })}
            required
          />
          <button className="add-btn">
            Add
          </button>
        </form>
      </div>
  )}}

export default AddForm;