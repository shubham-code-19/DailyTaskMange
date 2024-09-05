import React, { useEffect, useState } from "react";

import TodoFrom from "./TodoFrom";
import TodoList from "./todoList";
import TodoDate from "./TodoDate";
import { getLocalStorgeTodoData, setLocalStroageTodoData } from "./TodoLocalStorage";




const Todo = () => {
  const [tasks, setTasks] = useState(()=>getLocalStorgeTodoData());





  const submitHandler = (input) => {
    const {id,content,checked}=input
    if (!content.trim()) return;

    // if (tasks.includes(content)) return;
    const ifTodoConetntmatched=tasks.find((curElm)=>curElm.content==content)
    
    if(ifTodoConetntmatched) return;

    setTasks((prev) => [...prev, {id,content,checked}]);

  };



//  add  todo localStorage 
setLocalStroageTodoData(tasks)




const  deletItemHandler=(auth)=>{
  const filterTask=tasks.filter((elm)=>{
    return elm.content != auth
  })

  setTasks(filterTask)
  }

  const clearhandler=()=>{
    setTasks([])

  }

  const handleChekedTodo=(auth)=>{
      const updatedtasks=tasks.map((curTask)=>{
        if(curTask.content==auth){
          return {...curTask,checked:!curTask.checked}
        }
        else{
          return curTask
        }
      })

      setTasks(updatedtasks)

  }
  return (
    <div className="Todo bg-black min-h-screen flex justify-center items-center p-4">
      <div className="todoContainer w-full max-w-lg bg-gray-900 p-6 rounded-2xl shadow-2xl">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">My Todo List</h2>
          <TodoDate/>
          <p className="text-gray-400">Organize your tasks beautifully</p>
        </header>
        <TodoFrom submitHandler={submitHandler}/>
        <ul className="task-list space-y-3">
          {tasks.map((elm) => {
            return (
              <TodoList key={elm.id} elm={elm.content} checked={elm.checked} deletItemHandler={deletItemHandler} handleChekedTodo={handleChekedTodo}/>
            );
          })}
          <div className="flex justify-center">
          <button onClick={clearhandler}    className="bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold px-6 py-2 rounded-md shadow-sm hover:shadow-md hover:from-gray-600 hover:to-gray-800 transition duration-300 ease-in-out transform hover:-translate-y-1 active:translate-y-0"

>Clear All</button>

          </div>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
