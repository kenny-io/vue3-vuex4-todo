<template>
  <div>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>
    <div class="todos">
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
// import axios from "axios";
import { computed, onMounted } from "vue";

export default {
  name: "Todos",
  setup() {
    //Init vuex store instance
    const store = useStore();
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

    return {
      todos,
      //count,
      deleteTodo,
      updateTodo,
    };
  },
  // setup() runs before the component is created so we don't need to fetch
  // todos from the store in a created() hook like we did in Vue 2
  // const getTodos = async () => {
  //   const response = await axios.get(
  //     "https://jsonplaceholder.typicode.com/todos"
  //   );
  //   const data = response.data;
  //   store.commit("setTodos", data);
  // };
  // getTodos();
  // Need to figure out how to do ...mapGetters(["allTodos"]) and ...mapActions in Vuex 4
  // UPDATE-- The vuex4 docs is still vague and doesn't provide a
  // standard way of using mapGetters/mapActions yet
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

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
