export const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white px-4 py-4 text-gray-400 dark:bg-gray-800">
            <span>{computedItemsLeft} items left</span>
            <button onClick={clearCompleted}>Clear Completed</button>
        </section>
    );
};
