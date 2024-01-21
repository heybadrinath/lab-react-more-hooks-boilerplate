import React, { useReducer, useRef } from "react";
import TodoItem from "./TodoItem";

const initialState = [
  {
    data: null,
    isHidden: false,
  },
];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          data: action.payload,
          isHidden: false,
        },
      ];
    case "CHANGE_HIDDEN_VALUE":
      return state.map((ele, i) =>
        i === action.payload ? { ...ele, isHidden: !ele.isHidden } : ele
      );
    default:
      return state;
  }
}

function TodoApp() {
  const [todoData, dispatch] = useReducer(todoReducer, initialState);

  const returnedData = useRef(null);

  return (
    <>
      <input
        type="text"
        placeholder="Type Here"
        ref={returnedData}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch({ type: "ADD_ITEM", payload: e.target.value });
            returnedData.current.value = "";
          }
        }}
      />
      <div>
        {todoData.map((e, i) => (
          <TodoItem key={i} ele={e} index={i} dispatch={dispatch} />
        ))}
      </div>

      <button className="btn" onClick={() => returnedData.current.focus()}>Go Back</button>
    </>
  );
}

export default TodoApp;
