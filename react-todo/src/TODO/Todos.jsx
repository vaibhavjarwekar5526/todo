import React, { useState } from 'react';
import { Todo } from './Todo';
import { TodoInput } from './TodoInput';

export const Todos = () => {
    const [todos, setTodos] = useState([]);
  
  const onUpdate = (updatedTodo) => {
    const newTodoList = todos.map((todo) => {
        if(todo.id === updatedTodo.id){
            return updatedTodo;
        }else{
            return todo
        }
    });
    setTodos(newTodoList);
  }
  const onDeleteItem = (itemToDelete) => {
    const newTodoList = todos.filter((todo) => todo.id !== itemToDelete.id);
    setTodos(newTodoList);
  }
  return (
      <div>
            <TodoInput todos={todos} setTodos={setTodos}/>
            <div>
                <ul>
                    {todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} onDeleteItem={onDeleteItem}
                        onUpdate={onUpdate}/>
                    ))}
                </ul>
            </div>
      </div>
  );
};
