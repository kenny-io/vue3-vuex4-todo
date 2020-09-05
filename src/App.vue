<template>
  <div id="app">
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AddTodo from "@/components/AddTodo.vue";
import Todos from "@/components/Todos.vue";
import FilterTodos from "@/components/FilterTodos.vue";
export default {
  name: "App",
  components: {
    // HelloWorld
    AddTodo,
    Todos,
    FilterTodos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
