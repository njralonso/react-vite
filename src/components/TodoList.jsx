import { useState, useRef } from "react";

function InputComponent(props) {
  return (
    <input
      onKeyUp={props.handler}
      className="border-2 border-black pl-2 rounded-md"
      type="text"
    />
  );
}

function AddTaskComponent(props) {
  return (
    <button
      onClick={props.handler}
      className="p-2 bg-blue-200 hover:bg-blue-500 rounded-md ml-2"
    >
      AddTask
    </button>
  );
}

export default function Tasks() {
  // useState
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);

  // handlers
  const handleValue = (e) => setValue(e.target.value);
  const handlerClick = () => {
    setTodo([...todo, value]);
    console.log(todo, "esto es lo que hay en el todo");
  };

  return (
    <div className="px-4">
      <InputComponent handler={handleValue} />
      <AddTaskComponent handler={handlerClick} />
      <div>
        <ul>
          {todo.map((todos, index) => (
            <li key={index}>{todos}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
