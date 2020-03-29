<script>
   export let todo = {};
</script>


<div id="todo-{todo.id}" class="todo" class:completed={todo.completed} on:click={() => alert(todo.id)}>
    <span>{todo.title}</span>
</div>

<style>
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
</style>