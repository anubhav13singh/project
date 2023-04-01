import React, {useState} from 'react'


function App() {
  const [input, setInput] = useState('');
  
  const [list, setList] = useState([]);

   
  function addName(){
    setList([...list, input])
    setInput('')
  }

  return (
    <>

     <ul>
      {list.map((h) => (
        <li key={h}>{h}</li>
      ))}
    </ul>

    <input type={"text"} value={input} onChange={(e)=> setInput(e.target.value)}></input>
    <button onClick={addName}>click to add</button>
    </>
  )
}

export default App