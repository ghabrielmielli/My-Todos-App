<template>
  <v-row>
    <v-col cols="3">
      <v-card flat>
        <v-toolbar color="grey" dark flat>

          <v-toolbar-title>Inbox</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list color="transparent">
          <v-list-item v-for="todo in todos" :key="todo.id" link>
            <v-list-item-content>
              <v-list-item-title>
                {{ todo.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>

    <v-col cols="6">
      <v-sheet min-height="70vh" rounded="lg">
        <v-list color="transparent">
          <v-list-item v-for="todo in todos" :key="todo.id" link>
            <v-list-item-content>
              <v-list-item-title>
                {{ todo.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-sheet>
    </v-col>
  </v-row>
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