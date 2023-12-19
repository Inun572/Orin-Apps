/* eslint-disable react/prop-types */
const Lists = ({ todos, onMarkToggle, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center mb-4">
          <div
            className={
              todo.isDone
                ? `font-bold line-through decoration-red-500 decoration-4`
                : `font-bold`
            }
          >
            {todo.todo}
          </div>
          <div className="flex gap-4">
            <div
              className="badge badge-accent py-4 cursor-pointer"
              onClick={() => onMarkToggle(todo.id)}
            >
              Mark as {todo.isDone ? 'Not Done' : 'Done'}
            </div>
            <div
              className="badge badge-error py-4 cursor-pointer"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Lists;
