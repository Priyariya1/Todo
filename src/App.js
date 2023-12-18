import React,{useState} from 'react';

const App = () => {
  const[todo,setTodo] = useState("");
  const[todoList,setTodoList] = useState([]);
  


  const handleForm = (e) => {
      e.preventDefault();
      setTodoList([...todoList, {todoName: todo }]);
      setTodo("");
  }
 
  const deleteTodo = (deleteValue) =>{
      const restTodoList = [...todoList.filter((val) =>{
         if (val.todoName === deleteValue) {
          return false;
         }
         return true;
      })];
      setTodoList(restTodoList)
  }
 
  return (
   
   <div className="bg-gray-200 w-full h-screen flex items-center ">
      <div className="w-[500px] mx-auto text-center bg-white p-5">
        <h1 className="text-5xl  font-bold mb-8">Todo List</h1>
        
        <form onSubmit = {handleForm}>
          <input 
          className="border-2 border-black w-full p-5 mb-5 placeholder:text-gray-500 rounded-lg text-black" 
          type = "text" 
          placeholder="Add Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          />
        
          <button 
             type="submit" 
             className="bg-red-600 text-white px-8 py-3 rounded-lg mb-8">
              Add Todo
          </button>
        </form>
        
        <div className="todo-show-area">
        
          <ul>
            {todoList.map((singleTodo,index) =>{
            return(
               <li 
               key={index}
               className="bg-black mb-5 flex justify-between text-white rounded-lg py-2 text-1xl px-2 ">
              {singleTodo.todoName} {""}
              <span onClick={() => deleteTodo (singleTodo.todoName) } 
              className="text-red-600 cursor-pointer">x</span>
              </li>);
            })}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
