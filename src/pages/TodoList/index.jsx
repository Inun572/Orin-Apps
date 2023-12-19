import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lists from './Lists';
import { useDocumentTitle } from '../../hooks/customHooks';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useDocumentTitle('To-Do List');
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const unFinished = todos.filter((todo) => todo.isDone === false);
  const finished = todos.filter((todo) => todo.isDone === true);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (todo.length > 3) {
      setTodo(e.target.value);
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
      document.getElementById('modal').close();
      toast.success('New plan added!');
    }
  };

  const onMarkToggle = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone
          ? toast.warning('Plan marked as not done!')
          : toast.success('Plan marked as done!');
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const onDelete = (id) => {
    if (confirm('Are you sure to delete it?')) {
      setTodos(todos.filter((todo) => todo.id !== id));
      toast.done('Plan deleted!');
    }
  };

  return (
    <div className="w-full h-screen p-4 flex flex-col items-center bg-accent">
      <div className="w-4/5 flex flex-col">
        <div className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold">My Todo List</h1>
          <ToastContainer />
          <button
            onClick={() => document.getElementById('modal').showModal()}
            className="btn btn-info"
          >
            <span className="block font-bold text-xl">+</span>
          </button>
          <dialog id="modal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center mb-4">
                Add New Plan!
              </h3>
              <form
                onSubmit={onFormSubmit}
                className="form-control p-8 justify-center items-center gap-4"
              >
                <input
                  type="text"
                  id="todo"
                  name="todo"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                  placeholder="What will you do?"
                  className="input input-bordered w-full max-w-xs mb-4"
                />
                <div className="w-full flex justify-evenly items-center">
                  <button type="submit" className="btn btn-accent w-1/4">
                    Add
                  </button>
                  <button
                    type="cancel"
                    onClick={() => document.getElementById('modal').close()}
                    className="btn btn-warning w-1/4"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

        <div className="w-full mb-8 flex justify-center gap-4 items-center">
          <progress
            className="progress progress-secondary w-4/5"
            value={finished.length}
            max={todos.length}
          ></progress>
          <span className="font-bold">
            progress plan {finished.length}/{todos.length}
          </span>
        </div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab hover:bg-slate-400"
            aria-label="All Notes"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="min-h-[300px] tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <Lists
              todos={todos}
              onMarkToggle={onMarkToggle}
              onDelete={onDelete}
            />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab hover:bg-slate-400"
            aria-label="Unfinished"
          />
          <div
            role="tabpanel"
            className="min-h-[300px] tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <Lists
              todos={unFinished}
              onMarkToggle={onMarkToggle}
              onDelete={onDelete}
            />
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab hover:bg-slate-400"
            aria-label="Finished"
          />
          <div
            role="tabpanel"
            className="min-h-[300px] tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <Lists
              todos={finished}
              onMarkToggle={onMarkToggle}
              onDelete={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
