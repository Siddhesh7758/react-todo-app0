import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import db from './firebase';


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //
  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().Task))
    })
  }, []);


  const addTodo = (event) => {
    //this will called when we click the button
    event.preventDefault();     //it stops refreshing the page
    setTodos([...todos, input]);
    setInput('');  //clear the input field
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <form>
        
        <FormControl>
          <InputLabel>Enter a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Task
        </Button>
      </form>
    
      
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />

          //<li>{todo}</li>
        ))}
      </ul>
    </div>

    
  );
}


export default App;
