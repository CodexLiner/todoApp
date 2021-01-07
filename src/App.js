// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import Todo from './Todo';
import db from './Firrbase';
import firebase from 'firebase';

function App() {
  const [todos , setTodos]= useState([ ]);
  const [input , setInput] =useState('');
  const [input2 , setInput2] =useState('');
  const date = Date.now();
  const addTodo = (event)=>{
   event.preventDefault();

    db.collection('todos').add({
      todo: input ,
      desc: input2,
      time: {date}
    })
    setInput('');
    setInput2('');
    // setTodos([...todos , input])
  
  }
  useEffect(() => {
    db.collection('todos').orderBy('time', 'desc').onSnapshot(Snapshot=>{ 
      setTodos(Snapshot.docs.map(doc=>({id: doc.id , todo: doc.data().todo , desc: doc.data().desc })))

      })
    
  }, []);

  return (
    <div className="App">
      <div className="divc">
      <img className="logo"src="https://i.pinimg.com/originals/52/6a/bf/526abf16cc3e74882fa7304abc0f841c.png"/>
      <h1 className="heading">Hello <span> Welcome </span>  </h1>
      </div>
      
      <form>
      <TextField id="outlined-basic" label="Todo" variant="outlined" value={input} onChange={event=> setInput(event.target.value)}/>
      <span className="span"> </span>
      <TextField id="outlined-basic" label="About" variant="outlined" value={input2} onChange={event=> setInput2(event.target.value)}/>
      </form>
      <div className="padding">
      <Button disabled={!input , !input2} variant="contained" color="primary" href="#contained-buttons" type="submit" onClick={addTodo} className="">Add Todo</Button>

      </div>
      <ul className="list">
          {todos.map(todo=>(
            <Todo todo={todo}/>
          ))}

      </ul>
    </div>
  );
}

export default App;
