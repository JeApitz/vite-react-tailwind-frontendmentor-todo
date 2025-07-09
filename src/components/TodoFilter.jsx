export const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 dark:bg-gray-800">
                <button
                    onClick={() => changeFilter("all")}
                    className={`${filter === "all" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"} `}
                >
                    All
                </button>
                <button
                    onClick={() => changeFilter("active")}
                    className={`${filter === "active" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"}`}
                >
                    Active
                </button>
                <button
                    onClick={() => changeFilter("completed")}
                    className={`${filter === "completed" ? "text-blue-600 hover:text-gray-400" : "text-gray-400 hover:text-blue-600"}`}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};
