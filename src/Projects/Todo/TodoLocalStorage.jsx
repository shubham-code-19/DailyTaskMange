const todoKey="todoData"

export const getLocalStorgeTodoData=()=>{
    const rewTodos=localStorage.getItem(todoKey)
    if(rewTodos=="undefined"){
      return []
    }
    try {
      return rewTodos ? JSON.parse(rewTodos) : [];
    } catch (e) {
      console.error("Error parsing JSON from localStorage:", e);
      return [];
    }
  }

  export const setLocalStroageTodoData=(tasks)=>{
    localStorage.setItem(todoKey,JSON.stringify( tasks))

  }