<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "App",
  data: () => {
    return {
      todos: [],
    };
  },
  mounted: function () {
    axios
      .get("http://localhost:3000/todos/")
      .then((res) => {
        console.log("Fetched data successfully");
        this.todos = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
</style>