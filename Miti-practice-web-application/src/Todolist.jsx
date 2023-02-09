import React from "react";

  function Todolist(){
    console.log("Todolist is rendered")
    const [todos, setTodos] = React.useState([
      {
        title:'clear bills',
        status:false
      },
      {
        title:'Moksha School',
        status:true
      },
      {
        title:'Manas Bus Fee',
        status:false
      },
      {
        title:'Gold Bill',
        status:false
      },
      {title:'Current Bill',
      status:true
      }
    ])
      
    function add(){
      var newTask=document.getElementById('inp').value;
      setTodos([...todos,{title:newTask,status:false}])
      document.getElementById('inp').value=''
    }
    var done=React.useCallback(function(i){ 
        var temp=[...todos];
            // ------->line below to make status true and false
            // temp[i].status=!temp[i].status;
        temp[i].status=true;
        setTodos([...temp])
        // if(temp[i].status===true){
          
        // }
    },[todos.length])
    var undo=React.useCallback(function (i){
        var tempp=[...todos]
        // console.log(tempp)
        
        // ------->line below to make status true and false
        
            // tempp[i].status=!tempp[i].status;
        tempp[i].status=false;
        setTodos([...tempp])
      },[todos.length]
    )
    return (
      <div className='Todo'>
        <h1>Todolist</h1>
        <input type="text" name="" id="inp" />
        <button onClick={()=>{add()}}>Add Todo</button>
        <br /><br />
        {
          todos.map((todo,i)=>{
            return <li style={((todo.status)?{backgroundColor:'green'}:{backgroundColor:'red'})} id='li'>{todo.title}{todo.status} 
                        <span><button  style={((todo.status)?{display:'none'}:{display:''})} onClick={()=>{done(i)}}>Done</button> 
                        <button style={((todo.status)?{display:''}:{display:'none'})} onClick={()=>{undo(i)}}>Undo</button>
                        </span>
                    </li>
            
            // return (<Todo todo={todo} done={done} undo={undo} i={i}></Todo>)
            
            // return (<Todo title={todo.title} status={todo.status} done={done} undo={undo} i={i}></Todo>)
          }) 
        }
      </div>
    )        
    }      
export default Todolist;