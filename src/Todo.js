import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css';
import db from './Firrbase';

function Todo(props) {
    return (
        <List className="listClass">
          <div>
          <ListItem className="listClass" >
            <ListItemText className="list" primary={props.todo.todo} secondary={props.todo.desc}/>
          <div className="btndeg">
          <Button className="btn" onClick={event => {db.collection('todos').doc(props.todo.id).delete()}}>Done</Button>
            </div> 
          </ListItem>
          <hr className="hr"></hr>
          </div>  
        </List>
    )
}

export default Todo ;
