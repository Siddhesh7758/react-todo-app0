import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo/Todo';
import { auth } from "../firebase";
import { signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase";
import {
  getDoc,
  doc,
  setDoc,
  
} from "firebase/firestore";




function HomePage({ user }) {
  
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();
  
  async function getData(){
        await getDoc(doc(db, "todos", user.uid)).then(docSnap => {
        if (docSnap.exists()) {
          setTodos(docSnap.data().todos);
        } else {
          console.log("No such document!");
      }
    })
  }


  useEffect( () => {
    if (user) { 
      getData();   
    }
     else {
      navigate('/login');
    }
    
  },);


  const addTodo = async (e) => {
    e.preventDefault();

    if (user) {
      await setDoc(doc(db, "todos", user.uid ), {
        todos: [...todos, input]
        
      });
    }
    else {
      navigate('/login');
    }
    
    setInput('')
  }
  
  

  const logout = () => { 
    signOut(auth)
    navigate('/login');
  }


  return (
      <div>
       
          <h1 style={{
            fontWeight: '600',
            fontSize: '36px',
            marginBottom: '40px',
          }}>Add Todos</h1>
            <form>
                
                <FormControl>
                <InputLabel>Enter a Todo</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)} style={{width:'280px'}} />
                </FormControl>
                <Button onClick={addTodo} style={{marginLeft:'10px'}}  disabled={!input} type="submit" variant="contained" color="primary">
                Add Task
                </Button>
          </form>
          <Button style={{marginTop:'40px'}} variant="contained" onClick={logout}>Logout</Button>
              
            <ul>
                {todos.map(todo => (
                <Todo user={user} text={todo} />
                ))}
            </ul>
          
        </div>
  )
}

export default HomePage