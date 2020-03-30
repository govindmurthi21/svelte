<script>
  import { todoStore } from '../../stores/todos'
  let text = ''
</script>

<style>
  .add-todo-container {
    display: flex;
    justify-content: space-evenly;
  }

  .add-todo-text {
    width: 94%;
  }
</style>

<div class="add-todo-container">
  <input
    class="add-todo-text"
    type="text"
    name="add"
    id="add"
    bind:value={text} />
  <button class="add-todo-btn" on:click={() => todoStore.addTodo(text)}>Add Todo</button>
</div>

