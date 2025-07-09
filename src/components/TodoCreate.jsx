import { useState } from "react";

export const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");
    const handleSubmit = (evento) => {
        evento.preventDefault();
        if (title.trim().length > 0) {
            createTodo(title);
            setTitle("");
        }
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 dark:bg-gray-800"
        >
            <span className="inline-block h-5 w-5 flex-none rounded-full border-[1.5px] border-gray-400"></span>
            <input
                className="grow text-gray-400 outline-none"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(evento) => {
                    setTitle(evento.target.value);
                }}
            />
        </form>
    );
};
