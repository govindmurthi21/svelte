<script>
  import { todoStore } from '../../stores/todos';
  export let todo = {}
</script>

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

<div
  id="todo-{todo.id}"
  class="todo"
  class:completed={todo.completed}
  on:click={() => todoStore.toggleCompleted(todo)}>
  <span>{todo.title}</span>
</div>
