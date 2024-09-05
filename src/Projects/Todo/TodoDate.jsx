import React,{useEffect,useState} from 'react'

const TodoDate = () => {
    const [dateTime,setDataTime]=useState("")

    useEffect(()=>{
        const inerter= setInterval(()=>{
          let now=new Date()
          let cudate=now.toLocaleDateString()
          let curtime=now.toLocaleTimeString()
          setDataTime(`${cudate} - ${curtime}`)
      
        },1000)
        return ()=>{clearInterval(inerter)}
      },[])
      
  return (
    <div>
                  <h4 className="text-white">{dateTime}</h4>

    </div>
  )
}

export default TodoDate
