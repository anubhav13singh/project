import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faCicleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {
  const[todo,Settodo] = useState([]);

  // Temp state
  const[newTask, SetnewTask ] = useState('')//hold temporary data to be added
  const[updateData, SetupdateData ] = useState('')//hold task going to be edited

  // add task
  function addTask(){

  }

  function dltTask(id){

  }
  // mark tsk to be done or completed
  function markDone(id){

  }
// cancell update
function cancelUpdate(){
    
}
// change task for update
function changeTask(e){

}
// update task
function updateTask(){

}





  return (
    <>
    <hi>To do list</hi>
    <br/>
    <br/>
    {todo && todo.length ? '': "No Task"}
    </>
  )
}

export default App