"use client";

import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    setInputValue("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-black text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-serif font-bold">TODO APP</h1>
          <p className="font-serif mt-3">
            Organize your work with our TODO APP
          </p>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto p-4 bg-slate-300 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow p-3 border-grey-400 rounded-lg"
                placeholder="Add a Todo"
              />
              <button
                onClick={addTodo}
                className="ml-2 px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800"
              >
                Add
              </button>
            </div>
          </div>
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-2 border-grey-400 rounded-lg ${
                  todo.completed ? "bg-lime-200 line-through" : "bg-sky-300"
                }`}
              >
                <span>{todo.text}</span>
                <div>
                  <button onClick={() => toggleTodo(todo.id)} className="px-2 py-2 text-sm bg-orange-500 rounded-lg hover:bg-orange-600 text-white">{todo.completed ? "Undo" : "Done"}</button>
                  <button onClick={() => deleteTodo(todo.id)} className="px-2 py-2 text-sm bg-red-600 rounded-lg hover:bg-red-700 text-white ml-2">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TodoList;
