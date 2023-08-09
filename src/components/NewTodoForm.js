import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(newItem);
    setNewItem("");
  };
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">new item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
