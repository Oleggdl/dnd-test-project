import React from "react"
import {Draggable} from "react-beautiful-dnd"

const SingleTodo = ({index, todo}) => {


    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {provided => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    // className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
                >
                    <span className="todos__single--text">{todo.todo}</span>

                </div>
            )}
        </Draggable>
    )
}

export default SingleTodo
