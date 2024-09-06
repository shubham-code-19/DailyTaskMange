import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import TodoDate from "./TodoDate";

const Todo = () => {
  const getLocalStorgeTodoData = () => {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  };
  const [input, setInputValue] = useState("");
  const [tasks, setTasks] = useState(() => getLocalStorgeTodoData());
  const [isEditing, setIsEditing] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  

  const setLocalStroageTodoData = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (isEditing) {
      // Edit existing task
      const updatedTasks = tasks.map((task) =>
        task.id === editTaskId ? { ...task, content: input } : task
      );
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditTaskId(null);
    } else {
      // Add new task
      const ifTodoContentMatched = tasks.find((curElm) => curElm.content === input);
      if (ifTodoContentMatched) return;

      setTasks([...tasks, { id: new Date().getTime().toString(), content: input, checked: false }]);
    }

    setInputValue("");
  };

  useEffect(() => {
    setLocalStroageTodoData(tasks);
  }, [tasks]);

  const deleteItemHandler = (auth) => {
    const filteredTasks = tasks.filter((elm) => elm.content !== auth);
    setTasks(filteredTasks);
  };

  const clearHandler = () => {
    setTasks([]);
  };

  const handleCheckedTodo = (auth) => {
    const updatedTasks = tasks.map((curTask) => {
      if (curTask.content === auth) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });

    setTasks(updatedTasks);
  };

  const editHandler = (task) => {
    setIsEditing(true);
    setEditTaskId(task.id);
    setInputValue(task.content);
  };

  return (
    <div className="Todo bg-black min-h-screen flex justify-center items-center p-4">
      <div className="todoContainer w-full max-w-lg bg-gray-900 p-6 rounded-2xl shadow-2xl">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">My Todo List</h2>
            <TodoDate/>
          <p className="text-gray-400">Organize your tasks beautifully</p>
        </header>
        <div className="form mb-8">
          <form className="flex gap-3" onSubmit={submitHandler}>
            <input
              className="Todo-input flex-1 p-4 border border-gray-700 rounded-lg bg-gray-800 text-white shadow-sm outline-none focus:border-sky-500"
              placeholder="Enter a task..."
              type="text"
              value={input}
              autoComplete="off"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="Todo-btn flex items-center justify-center bg-sky-700 text-white px-4 py-3 rounded-lg shadow-md hover:bg-sky-600 transition duration-300"
            >
              <span className="mr-2">
                {isEditing ? <span>Edit Task ✏️</span> : <span>Add Task ➕</span>}
              </span>
            </button>
          </form>
        </div>

        <ul className="task-list space-y-3">
          {tasks.map((elm) => (
            <TodoList
              key={elm.id}
              task={elm}
              deleteItemHandler={deleteItemHandler}
              handleCheckedTodo={handleCheckedTodo}
              editHandler={editHandler}
            />
          ))}
          <div className="flex justify-center">
            <button
              onClick={clearHandler}
              className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold px-6 py-2 rounded-md shadow-sm hover:shadow-md hover:from-gray-600 hover:to-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"
            >
              Clear All
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

const TodoList = ({ task, deleteItemHandler, handleCheckedTodo, editHandler }) => {
  const { content, checked } = task;

  return (
    <>
      <li className="flex justify-between items-center bg-gray-900 p-4 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <span
          className={`text-gray-300 ${
            checked ? "line-through decoration-zinc-700 decoration-4" : ""
          } text-lg font-medium`}
        >
          {content}
        </span>
        <div className="flex space-x-3">
          <button
            onClick={() => editHandler(task)}
            className="p-2 text-white rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200"
          >
            <MdEdit className="text-2xl text-blue-400" />
          </button>
          <button
            onClick={() => handleCheckedTodo(content)}
            className="p-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-200"
          >
            <FaCircleCheck className="text-2xl text-green-400" />
          </button>
          <button
            onClick={() => deleteItemHandler(content)}
            className="p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-200"
          >
            <MdDeleteForever className="text-2xl text-red-400" />
          </button>
        </div>
      </li>
    </>
  );
};

export default Todo;
