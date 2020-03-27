<script>
    let todos = [{id: 1, title: 'Test', completed: false}];
    let newTodoText = '';

    function toggleCompleted(todo) {
        todo.completed = !todo.completed;
        todos = todos; //very dumb
    }

    function addTodo() {
        const todo =  {
            title: newTodoText,
            completed: false
        }

        todos.id = todos[todos.length - 1].id + 1;

        todos.push(todo);
        newTodoText = '';
    }
</script>

<div class="todos-container">
    <div class="add-todo-container">
        <input class="add-todo-text" type="text" name="add" id="add" bind:value={newTodoText}>
        <button class="add-todo-btn" on:click={addTodo}>Add Todo</button>
    </div>
    {#each todos as todo, i}
         <div id="todo-{todo.id}" class="todo" class:completed={todo.completed} on:click={() => toggleCompleted(todo)}>
            <span>{todo.title}</span>
         </div>
    {/each}
</div>

<style>
    .todos-container {
        display: flex;
        flex-direction: column;
        padding: 20px;
    }

    .todo {
        text-align: center;
        background: #f2f2f2;
        cursor: pointer;
        padding: 20px;
    }

    .todo.completed {
        background: #4b4b4b;
        color: #fff;
    }

    .add-todo-container {
        display: flex;
    justify-content: space-evenly;
    }

    .add-todo-text {
        width:94%;
    }
</style>