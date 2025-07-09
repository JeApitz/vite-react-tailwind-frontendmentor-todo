import React from "react";
import { IconCheck } from "./icons/IconCheck";
import { IconCross } from "./icons/IconCross";

export const TodoItem = React.forwardRef(
    ({ todo, removeTodo, updateTodo, ...props }, ref) => {
        const { id, title, completed } = todo;
        return (
            <article
                {...props}
                ref={ref}
                className="flex justify-between gap-4 border-b-[1.5px] border-gray-400 px-4 py-4"
            >
                <button
                    onClick={() => updateTodo(id)}
                    className={`grid h-5 w-5 flex-none items-center justify-items-center rounded-full border-[1.5px] border-gray-400 ${completed && "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}`}
                >
                    {completed && <IconCheck />}
                </button>
                <p
                    className={`grow text-gray-500 ${completed && "line-through"}`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => removeTodo(id)}>
                    <IconCross />
                </button>
            </article>
        );
    }
);
