export function Todos({ todos }) {
    return (
        <div>
            {todos.map(function(todo) {
                return (
                    <div> 
                        <h2>{todo.title}</h2>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                    </div>
                );
            })}
        </div>
    );
}
