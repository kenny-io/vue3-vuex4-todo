<template>
  <div>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <div>
      <button class="hide" @click="toggleVisibility">Hide Todos</button>
    </div>
    <div v-if="isVisible" class="todos">
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="todo"
        @dblclick="updateTodo(todo)"
        v-bind:class="{ 'is-complete': todo.completed }"
      >
        <p>{{ todo.title }}</p>
        <i v-on:click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { useToggle } from "@/composables/useToggle";

export default {
  name: "Todos",
  setup() {
    const store = useStore();

    // todos
    const todos = computed(() => store.state.todos);
    onMounted(() => {
      store.dispatch("onFetchTodos");
    });

    const deleteTodo = (id) => {
      store.dispatch("onDeleteTodo", id);
    };

    const updateTodo = (todo) => {
      const updatedTodo = {
        title: todo.title,
        id: todo.id,
        completed: !todo.completed,
      };
      store.dispatch("onUpdateTodo", updatedTodo);
    };

    // visibility
    const { isVisible, toggleVisibility } = useToggle();

    return {
      todos,
      isVisible,
      toggleVisibility,
      deleteTodo,
      updateTodo,
    };
  },
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
.hide {
  background: #a7b597;
  color: #fff;
  border: 1px #a7b597 solid;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
