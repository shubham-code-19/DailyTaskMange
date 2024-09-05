import React,{useState} from 'react'

const TodoFrom = ({submitHandler}) => {
    const [input, setInputValue] = useState({id:"",content:"",checked:false});
    const handleInputChange = (val) => {
        setInputValue({id:val,content:val,checked:false});
      };

      const formSubmitHandler=(e)=>{
        e.preventDefault()
        submitHandler(input)
        setInputValue({...input, content:""});

      }
  return (
    <>
         <div className="form mb-8">
          <form className="flex gap-3" onSubmit={formSubmitHandler}>
            <input
              className="Todo-input flex-1 p-4 border border-gray-700 rounded-lg bg-gray-800 text-white shadow-sm outline-none focus:border-sky-500"
              placeholder="Enter a task..."
              type="text"
              value={input.content}
              autoComplete="off"
              onChange={(e) => handleInputChange(e.target.value)}
            />
            <button
              type="submit"
              className="Todo-btn flex items-center justify-center bg-sky-700 text-white px-4 py-3 rounded-lg shadow-md hover:bg-sky-600 transition duration-300"
            >
              <span className="mr-2">Add Task</span> ➕
            </button>
          </form>
        </div>
    </>
  )
}

export default TodoFrom
