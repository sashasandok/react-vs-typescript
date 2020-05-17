import React, { useRef } from "react";
import { ITodoFormProps } from "../../interfaces";

const TodoForm: React.FC<ITodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (evt: React.KeyboardEvent) => {
    if (evt.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="inpit-field mt2">
      <label htmlFor="title" className="active">
        Enter todo
      </label>
      <input
        type="text"
        id="title"
        placeholder="Enter todo"
        onKeyPress={keyPressHandler}
        ref={ref}
      />
    </div>
  );
};

export default TodoForm;
