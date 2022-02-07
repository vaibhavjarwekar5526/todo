import React, { useState } from 'react';
import { v4 as uuidv4, v4 } from 'uuid';
export const TodoInput = ({ todos, setTodos }) => {
    const [value, setValue] = useState("");
    

  return (
      <div>
          <input type="text" 
          value={value} 
          onChange={(e) => setValue(e.currentTarget.value)} 
          />
          <button onClick={() => {
              if(value){
                  setTodos([...todos, 
                    {
                      value,
                      id: v4()
                  }
                ]);
                console.log(todos)
                  setValue("");
              }
              else{
                  console.log("Enter value")
              }
          }}>ADD</button>
      </div>
  );
};
