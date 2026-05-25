import { useState, useEffect } from 'react'

const DEFAULT_TODOS = [
  { id: 1, text: 'Review pull requests', done: false },
  { id: 2, text: 'Update documentation', done: true },
  { id: 3, text: 'Fix login bug', done: false },
  { id: 4, text: 'Deploy staging build', done: false },
]

export default function TodoList() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('dashboard-todos')
    return saved ? JSON.parse(saved) : DEFAULT_TODOS
  })
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem('dashboard-todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    setTodos((prev) => [...prev, { id: Date.now(), text, done: false }])
    setInput('')
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const remaining = todos.filter((t) => !t.done).length

  return (
    <div className="card todo-card">
      <div className="card-header">
        <h2>To-Do</h2>
        <span className="card-badge">{remaining} remaining</span>
      </div>

      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="todo-add">+</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item${todo.done ? ' done' : ''}`}>
            <button
              className="todo-check"
              onClick={() => toggleTodo(todo.id)}
              aria-label={todo.done ? 'Mark incomplete' : 'Mark complete'}
            >
              {todo.done ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <span className="todo-circle" />
              )}
            </button>
            <span className="todo-text">{todo.text}</span>
            <button
              className="todo-delete"
              onClick={() => deleteTodo(todo.id)}
              aria-label="Delete task"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
