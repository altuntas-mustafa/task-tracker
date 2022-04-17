import React, { useState } from 'react';

const Task = () => {
    
    const [text, setText] = useState("")
    const handleChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value)
    }
  return (
      
    <div>  
        <div>
            
            <label htmlFor="">Task</label>
            <br />
            <input type="text" onChange={handleChange} placeholder='Add Task'/>
            <br />
            <label htmlFor=""> Day & Time </label>
            <br />
            <input type="date" name="date" id="date" />
            <br />
            <button>Save Task</button>
            
        </div>

    </div>
    
  )
}

export default Task