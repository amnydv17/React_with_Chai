import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [ // properties of each todo
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],   // functionallity of each todo
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider