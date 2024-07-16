import React from "react";
import Todo from "./Todo";

interface ITodoListProps {}

interface MyTodo {
  id: string;
  title: string;
  isDone: boolean;
}

const TodoList: React.FC<ITodoListProps> = () => {
  const [myTodos, setMyTodos] = React.useState<Array<MyTodo>>([
    {
      id: "1",
      title: "hello astro!",
      isDone: false,
    },
  ]);

  return (
    <div>
      {myTodos.map((item) => {
        return (
          <Todo
            id={item.id}
            isDone={item.isDone}
            title={item.title}
            onChange={() => {
              console.log("you clicked on " + item.title);
            }}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
