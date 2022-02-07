import React, { useState } from 'react';
import styles from './todo.module.css'

export const Todo = ({todo, onDeleteItem}) => {
    const [isStricked, setIsStricked] = useState(false);
    const [isEditModeOn, setIsEditModeOn] = useState(false);
  return (
      <li className={styles.todoItem}>
          {isEditModeOn ? (
              <input type="text" />
          ) : (
              <>
                <input 
                    type="checkbox"
                    onChange={() => {
                    setIsStricked(!isStricked);
                    }} 
                />
                <span className={isStricked ? styles.strike : styles.normal}>
                {todo.value}
                </span>
              </>
          )}

          <button onClick={() => onDeleteItem(todo)}>Delete</button>
          <button onClick={() => setIsEditModeOn(!isEditModeOn)}>
              {isEditModeOn ? "Cancel Edit":"Edit"}
          </button>
      </li>
  );
};
