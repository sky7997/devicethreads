import React, {useState} from "react"
import './App.css';

const Tickets=[{id:1, name:"rcb" ,unit:200},
  {id:2, name:"csk" ,unit:200},
  {id:3, name:"kkr" ,unit:200},
  {id:4, name:"srh" ,unit:200},
]

const App=()=>{

const [task,setTask]=useState("")
const [data,setData]=useState([])
const [results,setResults]=useState([])

const addOperation=()=>{
  if (!task) return
  setData((newtask)=>(prev)=>[...prev, {id:Date.now(), name: task, unit:200, toogle:completed}])
  setResults([])
  setTask("")
}
const editOper=(id)=>{
  const check=Tickets.find(id=>id.id===id)
  if (check) {
    setData(...data,{toogle:!completed})
  }
  setResults([])
}

return(
  <div>
    <input 
    placeholder="Add ticket"
    value={task}
  onChange={setTask(e=>e.target.value)}
    />
    <button onClick={addOperation}>Add</button>
    <div>
      <div>
      <ul>{
        results.map((item)=> ( item.toogle===completed) ? ( results.filter((item)=> {
          <li onClick={editOper(item.id)} key={item.id}>{item.name} "open" </li>
        })) :  ( results.filter((item)=> {
          <li onClick={editOper(item.id)} key={item.id}>{item.name} "close" </li>
        })))}
      </ul>
      
    </div>
    </div>
  </div>
)
}






export default App;
