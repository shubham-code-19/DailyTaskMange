import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const TodoList = ({elm,checked,deletItemHandler,handleChekedTodo}) => {
    console.log(checked)
  return (
    <>
    <li
  className="flex justify-between items-center bg-gray-900 p-4 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
  <span className={`text-gray-300 ${checked ? "line-through decoration-zinc-700	decoration-4	" : ""} text-lg font-medium`}>
    {elm}
  </span>
  <div className="flex space-x-3">
    <button
      onClick={() => handleChekedTodo(elm)}
      className="p-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-200"
    >
      <FaCircleCheck className="text-2xl text-green-400" />
    </button>
    <button
      onClick={() => deletItemHandler(elm)}
      className="p-2 rounded-full hover:bg-red-600 hover:text-white transition-colors duration-200"
    >
      <MdDeleteForever className="text-2xl text-red-400" />
    </button>
  </div>
</li>

    </>
  )
}

export default TodoList
