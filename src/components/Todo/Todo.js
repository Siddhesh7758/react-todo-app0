import React from 'react';
import './Todo.css';
import {List ,ListItem, ListItemText, ListItemAvatar} from '@material-ui/core';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { db } from "../../firebase";
import {
    getDoc,
    doc,
    setDoc,
    updateDoc,
    deleteField,
    deleteDoc,
  
} from "firebase/firestore";

function Todo(props) {

    const deleteTodo = async (deleteTodo) => {
         
        const docRef =  doc(db, "todos", props.user.uid);
        await getDoc(docRef).then(docSnap => { 
            const res = docSnap.data().todos.filter(todo => todo !== deleteTodo);
            console.log(res)
            updateDoc(docRef, {
                todos:res
            });

        })
    }

    
    return (
        <List className="todo_list" style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <ListItem style={{width:'auto'}}>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text} secondary="Complete it" />
            </ListItem>
            <DeleteForeverIcon
                style={{
                    cursor: 'pointer',
                }}
                onClick={() => deleteTodo(props.text)}
            />
        </List>
    )
}

export default Todo;
