import React from 'react'
import { useState } from 'react'
import './form.css'

function Form() {
  
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);
    const [editid, setEditid] = useState(0)

    const handleSubmit = (e) =>{
      e.preventDefault();
    
      if(editid){
        const editlist = list.find((i) =>i.id === editid)
      }
      if(!input){
        
      }else{
      //  const allinput = { id: new Date().getTime().toString(), name:allinput }
        setList([...list, { id: new Date().getTime().toString(), name:input }]);
        console.log([...list, { id: new Date().getTime().toString(), name:input }]);
        setInput("")
      }
      }
    
     const handleDlt = (id) => {
      // setList(list.filter((val, index)=>(index!== id)))
      setList(list.filter((l)=>(
        id!==l.id
      )))
    }

    const handleEdit = (id) => {
      const editlist = list.find((i) => (i.id===id));
      setInput(editlist.name);
      setEditid(id);
    }
      
    

  return (
    <>
     <div className='container'>
       <h1>To-Do List</h1>
       <form onSubmit={handleSubmit}>
        <input 
        type={'text'}
        placeholder='enter the task'
        value={input}
        onChange={(e) => setInput(e.target.value)} />

            <button className='addBtn' type="submit" >{editid ? "edit" : "Add"}</button>
        
       </form>

        <div>
          
            {list.map((val) => (
              <div key={val.id}  className='list'>
                 <li> {val.name} </li>
                 <button className='dlt' onClick={() =>handleDlt(val.id)}>dlt</button>
                 <button className='dlt' onClick={() =>handleEdit(val.id)}>edit</button>
                 {/* arrow fun to get unique id */}
              </div>
            
             ))}
          
        </div>

              <button className='remove'>Remove All</button>


     </div>
    </>
  )
}

export default Form;