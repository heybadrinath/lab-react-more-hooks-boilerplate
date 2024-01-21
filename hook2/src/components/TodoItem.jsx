import React from "react";

function TodoItem(props) {
  let { ele, index, dispatch } = props;
  let { data, isHidden } = ele;

  if(data == null || data.trim() == ""){
    return null;
  }
  return (
    <div className="orr">
      <h3>{isHidden ? "Content is Hidden" : data}</h3>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_HIDDEN_VALUE", payload: index });
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default TodoItem;
