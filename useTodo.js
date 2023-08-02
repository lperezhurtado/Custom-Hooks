import { useEffect, useReducer } from "react";
import { todoReducer } from "../useReducer/todoReducer";

//se ha pasado la lógica que habia que TodoApp a un customHook para mantener el código mas limpio
const initialState = [];
const init = () => ( JSON.parse( localStorage.getItem('todos') ) || [] );


export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    let todosCounter = todos.length;
    let pendentTodos = todos.filter( todo => !todo.done).length;
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      
    }, [todos])

    const handleTodo = ( todo ) => {
        const action = {
            type : 'Add todo',
            payload : todo,
        }
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        console.log(id)
        dispatch({
            type: 'Delete todo',
            payload: id
        });
    }
    const handleToggleTodo = ( id ) => {
        console.log({id})
        dispatch({
            type: 'Toggle todo',
            payload: id
        });
    }
  return {
    todos,
    handleTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCounter,
    pendentTodos
  }
}
