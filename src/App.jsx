import React from 'react'
import Todo from './Projects/Todo/Todo'
import "./App.css"
const App = () => {
  return (
    <div>
    <Todo/>
    <h2 className="bg-gradient-to-tr from-gray-800 to-green-900 text-white text-sm px-4 py-2  font-semibold font-serif text-center">
  &copy; 2024 Shubham. All rights reserved.
</h2>
    </div>
  )
}

export default App





// my todo 

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const getLocalData=()=>{
//     const loclaData=localStorage.getItem("myTodo")
//     if(!loclaData){
//       return []
//     }
//     else{
//       return JSON.parse(loclaData)
//     }
    
//   }

//   const [input,setinput]=useState("")
//   const[item,setItem]=useState(()=>getLocalData())

//   const [AddEitToogler,setAddEditToggler]=useState(true)
//   const[editValue,setEditValue]=useState("")

//   const onSubmitHandler=(e)=>{
//     e.preventDefault()
//     if(!input.trim()){
//       alert("enter the task")
//       return
//     }
//     const AlredYEdit=item.find((elm)=>{
//       return elm.name==input
//     })
//     if(AlredYEdit){
//       alert("already edit in todo")
//       setinput("")
//       return
//     }
//     if(!AddEitToogler){
//       const editArray=item.map((elm)=>{
//         if(elm.id==editValue){
//           return {...elm,name:input}
//         }
//         else{
//           return elm
//         }
//       })
//       setItem(editArray)
//       setAddEditToggler(true)
//       setinput("")

//     }else{
//       setItem([...item,{id:new Date().getTime().toString(),name:input}])
//       setinput("")
//       setAddEditToggler(true)
//     } 
  
    
//   }


//   const editHander=(auth)=>{
//     setAddEditToggler(false)
//     const findEdit=item.find((elm)=>{
//       return elm.id==auth
//     })
//     setinput(findEdit.name)
//     setEditValue(findEdit.id)
//   }

//   const remove=(auth)=>{
//     const updateItem=item.filter((elm)=>{
//       return elm.id!==auth
//     })
//     setItem(updateItem)

//     if (updateItem.length == 0) {
//       setAddEditToggler(true);
//       setinput("");
//       console.log("susu")
//     }
//   }

//   useEffect(()=>{
//     localStorage.setItem("myTodo",JSON.stringify(item))
//   },[item])
//   return (
//     <div className='flex justify-center items-center h-screen'>
//         <div className='bg-green-400 w-full max-w-lg min-h-[300px] p-5'>
//           <div>
//             <form action="" onSubmit={onSubmitHandler} className='flex gap-5 items-center'>
//               <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder='Enter Task' name="" id="" className='p-3' />
//               <div>
//                 {
//                   AddEitToogler?
//                   <button type='submit' className='bg-green-900 p-3 px-5 text-white'>Add</button>
//                   : <button type='submit' className='bg-red-900 p-3 px-5 text-white'>Edit</button>

//                 }
//               </div>
//             </form>
//           </div>

//           <div className=' mt-5 flex flex-col gap-4'>
//             {item.map((elm)=>{
//               return(
//                 <div key={elm.id} className='flex gap-5 items-center'>  
//                   {elm.name}
//                   <button onClick={()=>editHander(elm.id)} className='bg-black text-white px-5 py-3'>Edit</button>
//                   <button onClick={()=>remove(elm.id)} className='bg-black text-white px-5 py-3'>remove</button>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//     </div>
//   )
// }

// export default App

