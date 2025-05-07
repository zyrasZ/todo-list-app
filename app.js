const { useState, useEffect } = React;

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    // Load todos from localStorage on mount
    useEffect(() => {
        try {
            const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
            setTodos(savedTodos);
        } catch (e) {
            console.error("Error loading todos from localStorage:", e);
        }
    }, []);

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        try {
            localStorage.setItem('todos', JSON.stringify(todos));
        } catch (e) {
            console.error("Error saving todos to localStorage:", e);
        }
    }, [todos]);

    const addTodo = () => {
        if (input.trim() === '') return;
        setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
        setInput('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') addTodo();
    };

    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-indigo-700 text-center animate-fadeIn">
                Todo List
            </h1>
            <div className="flex space-x-4 animate-fadeIn">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add a new task..."
                    className="flex-1 p-3 rounded-lg border-2 border-indigo-300 focus:outline-none focus:border-pink-400 text-gray-800"
                />
                <button
                    onClick={addTodo}
                    className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 hover-scale"
                >
                    Add
                </button>
            </div>
            <ul className="space-y-3">
                {todos.map((todo, index) => (
                    <li
                        key={todo.id}
                        className={`flex items-center justify-between p-3 bg-gray-50 rounded-lg hover-scale animate-fadeIn ${
                            todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className="h-5 w-5 text-pink-500 rounded focus:ring-pink-400"
                            />
                            <span className="flex-1">{todo.text}</span>
                        </div>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            🗑️
                        </button>
                    </li>
                ))}
            </ul>
            {todos.length === 0 && (
                <p className="text-center text-gray-600 animate-fadeIn">
                    No tasks yet! Add one to get started.
                </p>
            )}
        </div>
    );
}

// Ensure root element exists before rendering
const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(<TodoApp />, rootElement);
} else {
    console.error("Root element not found");
}