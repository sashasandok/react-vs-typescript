import React from "react";
import { ITodo } from "../../interfaces";

type TodoListProps = {
  todos: ITodo[];
  toggleHandler(id: number): void;
  removeHandler(id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleHandler,
  removeHandler,
}) => {
  if (todos.length === 0) {
    return <p className="center">No todos yet</p>;
  }

  const removeByClick = (evt: React.MouseEvent, id: number) => {
    evt.preventDefault();

    removeHandler(id);
  };
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleHandler.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(evt) => removeByClick(evt, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
