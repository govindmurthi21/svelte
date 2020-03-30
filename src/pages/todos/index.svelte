<script>
    import Todo from './todo.svelte';
    import AddTodo from './addtodo.svelte';
    import {todoStore} from '../../stores/todos';
    import { onMount } from 'svelte';

    let newTodoText = '';
    let todos = [];

    onMount(async () => {
		await todoStore.getTodos();
	});
</script>


<div class="todos-container">
    <AddTodo />
    {#each $todoStore as todo, i}
         <Todo todo={todo} />
    {/each}
</div>

<style>
    .todos-container {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }
</style>