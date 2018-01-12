import React from 'react';

const ListItem = ({ title, initItems, moveItem, deleteItem, className }) => { 
  return (
    <div>
      <h3>{title}</h3>
      <ul className={className}>
        {initItems.map((item, i) => { 
          return (
            <li key={i}>
              <input type="checkbox" onClick = {() => moveItem(i)} />
              <label>{item.label}</label>
              <label>{item.qty}</label>
              <button className="delete"
                onClick={() => deleteItem(item)}>
                Delete
              </button>
            </li> )   
        })}
      </ul>
    </div>
  )}

export default ListItem;