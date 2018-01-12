import React, { Component } from 'react';
import AddForm from './components/add-form';
import ListItem from './components/list-item';
import './App.css';

class App extends Component {
constructor(props){
super(props);   
this.state = ({

  title: {
    addItem: "Add Item",
    toDo: "ToDo List",
    done: "Done List"
  },

  todoItems : [
    { label: "Milk", qty: 4 },
    { label: "Banana", qty: 6 },
    { label: "Cauliflower", qty: 1 },
    { label: "Orange", qty: 2  },
    { label: "Bread", qty: 1 }],

  doneList: [
    { label: "Pastry", qty: 3 },
    { label: "Doughnut", qty: 3 }] 

  });
}

addItem = (a, b) => {    
  let newItem = [{ label: a, qty: b }]
  this.setState({
    todoItems: newItem.concat(this.state.todoItems)
  })
}

deleteItem = (item) => {       
  this.setState({
    todoItems: this.state.todoItems.filter(l => l.label !== item.label)
  })
}
  
moveToDone = (i) => {   
  const items = this.state.todoItems.filter((item, index) => index !== i);
  const itemToShop = this.state.todoItems[i];
  const itemShopped = this.state.doneList.concat(itemToShop);   
  this.setState({
    doneList: itemShopped,
    todoItems : items
  });
}

moveToDo = (i) => {
  const itemShopped = this.state.doneList.filter((item, index) => index !== i);   
  const itemToShop = this.state.todoItems.concat(this.state.doneList[i]);   
  this.setState({
    todoItems: itemToShop,
    doneList: itemShopped
  });
}

render() {   
  return (
    <div className="App">      
      <AddForm title={this.state.title.addItem} 
        initItems={this.state.todoItems} 
        addItem={this.addItem} />
      <ListItem title={this.state.title.toDo} 
        initItems={this.state.todoItems} 
        deleteItem={this.deleteItem} 
        moveItem={this.moveToDone} />
      <ListItem title={this.state.title.done} 
        initItems={this.state.doneList} 
        deleteItem={this.deleteItem} 
        moveItem={this.moveToDo} 
        className="Done" />
    </div>
)}}

export default App;