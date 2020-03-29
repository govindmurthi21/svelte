import { writable } from 'svelte/store';
import ax from 'axios';


function createTodos() {
    let todos = [];
	const { subscribe, set, update } = writable(todos);

	return {
		subscribe,
		getTodos: async () => {
            const resp = await ax.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
            update(t => t = resp.data);
        },
		addTodo: async (text) => {
            const resp = await ax.post('https://jsonplaceholder.typicode.com/todos', {title: text, completed: false});
            update(t => t.push(resp.data));
        },
		setCompleted: (id) => {
            const todo = todos.find(t => t.id === id);
            todo.completed = !todo.completed;

        }
	};
}

export const todoStore = createTodos();