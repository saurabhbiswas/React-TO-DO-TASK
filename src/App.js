import { useState, useEffect } from "react";
let id = 0;
export default TaskList = function () {
  const [name, setName] = useState("");
  const [task, setTasks] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  function onClickHandler() {
    setTasks([...task, { id: id++, name: name }]);
  }

  return (
    <>
    <div>
    Tasks for {data.name}
      </div>
      <input value={name} onChange={(e) => setName(e.target.value)} />{ ' '}
      <button name="Add Task" onClick={onClickHandler}>
        Add Task
      </button>
      
      
      <ul>
        {task.map((artist) => (
          <>
            <li key={artist.id}>
              {artist.name}{' '}
              <button
                onClick={() => {
                  setTasks(task.filter((item) => item.id !== artist.id));
                }} 
              >
                Delete Task
              </button>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
