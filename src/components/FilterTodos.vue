<template>
  <div>
    <form @submit="filterTodos">
      <input type="number" v-model="limit" placeholder="Add to do ..." />
      <input v-on:click.prevent="filterTodos" type="submit" value="Filter" />
    </form>
    <br />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "FilterTodos",

  setup() {
    const limit = ref(200);
    const store = useStore();
    const filterTodos = () => {
      store.dispatch("onFilterTodos", limit.value);
    };

    return {
      limit,
      filterTodos
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
