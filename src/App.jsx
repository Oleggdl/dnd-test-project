import React, {useState} from "react"
import "./App.css"
import TodoList from "./components/TodoList"
import {DragDropContext} from "react-beautiful-dnd"

const App = () => {

    const [todos, setTodos] = useState([
        {id: 1, todo: 'test1', isDone: false},
        {id: 2, todo: 'test2', isDone: false},
        {id: 3, todo: 'test3', isDone: false},
        {id: 4, todo: 'test4', isDone: false},
    ])
    const [CompletedTodos, setCompletedTodos] = useState([])


    const onDragEnd = (result) => {
        const {destination, source} = result

        console.log(result)

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        let add;
        let active = todos
        let complete = CompletedTodos
        // Source Logic
        if (source.droppableId === "TodosList") {
            add = active[source.index]
            active.splice(source.index, 1)
        } else {
            add = complete[source.index]
            complete.splice(source.index, 1)
        }

        // Destination Logic
        if (destination.droppableId === "TodosList") {
            active.splice(destination.index, 0, add)
        } else {
            complete.splice(destination.index, 0, add)
        }

        setCompletedTodos(complete)
        setTodos(active)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="App">
                <span className="heading">Jira-clone</span>
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    CompletedTodos={CompletedTodos}
                    setCompletedTodos={setCompletedTodos}
                />
            </div>
        </DragDropContext>
    )
}

export default App
