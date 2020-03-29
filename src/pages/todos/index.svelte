<script>
    import Todo from './todo.svelte';
    import {todoStore} from '../../stores/todos';
    import { onMount } from 'svelte';

    let newTodoText = '';
    let todos = [];

    onMount(async () => {
		await todoStore.getTodos();
	});
</script>


<div class="todos-container">
    <!-- <div class="add-todo-container">
        <input class="add-todo-text" type="text" name="add" id="add" bind:value={newTodoText}>
        <button class="add-todo-btn" on:click={addTodo}>Add Todo</button>
    </div> -->
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