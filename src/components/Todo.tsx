import React from "react";

interface ITodoProps {
  id: string;
  title: string;
  isDone: boolean;
  onChange: () => void;
}

const Todo: React.FC<ITodoProps> = ({ title, isDone, id, onChange }) => {
  return (
    <div onClick={onChange}>
      <input
        type="checkbox"
        id={id}
        name={title}
        // checked={isDone}
        defaultChecked={isDone}
        onChange={onChange}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default Todo;
