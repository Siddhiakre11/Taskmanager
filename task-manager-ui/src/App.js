import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import TaskCard from "./components/TaskCard";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");

  const API = "http://localhost:8081/tasks";

  const loadTasks = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  };
  const deleteTask = (id) => {
  fetch(`${API}/${id}`, {
    method: "DELETE",
  }).then(() => loadTasks());
};
  const addTask = () => {
    if (!title) return;

    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body: JSON.stringify({
     title,
     description,
     deadline,
     priority,
     status,
})
    }).then(() => {
     setDeadline("");
     setPriority("Medium");
     setStatus("Pending");
      loadTasks();
    });
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        {/* Stats Cards */}

        <div className="grid grid-cols-3 gap-5 mb-8">

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-gray-500">
              Total Tasks
            </h3>

            <p className="text-3xl font-bold">
              {tasks.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-gray-500">
              Completed
            </h3>

            <p className="text-3xl font-bold text-green-500">
              0
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="text-gray-500">
              Pending
            </h3>

            <p className="text-3xl font-bold text-orange-500">
              {tasks.length}
            </p>
          </div>

        </div>

        {/* Add Task Form */}

        <div className="bg-white rounded-xl shadow p-6 mb-8">

          <h2 className="text-xl font-semibold mb-4">
            Create New Task
          </h2>

          <div className="grid gap-4">

            <input
              className="border rounded-lg p-3"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              className="border rounded-lg p-3"
              placeholder="Task Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />
            <input
  type="date"
  className="border rounded-lg p-3"
  value={deadline}
  onChange={(e) => setDeadline(e.target.value)}
/>

<select
  className="border rounded-lg p-3"
  value={priority}
  onChange={(e) => setPriority(e.target.value)}
>
  <option>Low</option>
  <option>Medium</option>
  <option>High</option>
</select>

<select
  className="border rounded-lg p-3"
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option>Pending</option>
  <option>In Progress</option>
  <option>Completed</option>
</select>

            <button
              onClick={addTask}
              className="
                bg-cyan-500
                text-white
                p-3
                rounded-lg
                hover:bg-cyan-600
              "
            >
              Add Task
            </button>

          </div>

        </div>

        {/* Task List */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
  {tasks.map((task) => (
    <TaskCard
      key={task.id}
      task={task}
      onDelete={deleteTask}
    />
  ))}
</div>

        </div>

      </div>
  
  );
}

export default App;