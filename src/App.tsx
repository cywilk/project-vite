import {useState} from "react";
import Modal from "./components/Modal.tsx"

function App() {
  // TODO: fix the state of this `todos`
  const [todos, setTodos] = useState([
    {id: Date.now(), text: "Do the dishes"},
    {id: Date.now()+1, text: "Finish this project"}
  ])

  const [inputs, setInputs] = useState("")

  function getInput(e) {
    setInputs(e.target.value);
  }

  function deleteTask(id) {
    setTodos(todos.filter(task => task.id !== id));
  }

  function addTask(e) {
    e.preventDefault();
    if (inputs === "") {
      alert("Please enter a task!");
    } else {
      const newTask = { id: Date.now(), text: inputs };
      setTodos([...todos, newTask]);
      setInputs("");
    }
  }

  // TODO: make components needed for TODO
  return (
    <>
      <div className="container">
        <h1 className="header">Today's Agenda!</h1>

        <div id="newtask">
          <form
            onSubmit = {addTask}
            style={{
              marginTop: '10px',
            }}
          >
            {
              // TODO: lift input text into a state so you can
              // handle it and add to `todos` array
            }
            <input 
              value = {inputs}
              onChange = {getInput}
            />
            <button
              type = "submit"
              id = "push"
            >Create Task</button>
          </form>
        </div>

        <div id="tasks">
          <ul>
            {
              // TODO: use `map` to render tasks from `todos`
              // remember about `keys` prop!
              todos.map((task) => (
                <ul key={`${task.id}-${todos.length}`} className="task">
                  <span id="taskname">
                    {task.text}
                  </span>
                  <button onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                  {/* <input type="button" value="Delete" onChange={() => deleteTask(task.id)}/> */}
                </ul>
              ))
            }
          </ul>
        </div>
      </div>

      <Modal />
    </>
  )
}

export default App
