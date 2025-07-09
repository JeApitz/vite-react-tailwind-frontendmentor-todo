import { Droppable, Draggable } from "@hello-pangea/dnd";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvider) => (
                <div
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                    className="mt-8 overflow-hidden rounded-t-md bg-white dark:bg-gray-800"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvider) => (
                                <TodoItem
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.draggableProps}
                                    {...draggableProvider.dragHandleProps}
                                    todo={todo}
                                    removeTodo={removeTodo}
                                    updateTodo={updateTodo}
                                />
                            )}
                        </Draggable>
                    ))}
                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};
