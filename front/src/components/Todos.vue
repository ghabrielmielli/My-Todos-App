<template>
  <v-row>
    <v-col cols="3">
      <v-card flat>
        <v-toolbar color="grey" dark flat>
          <v-toolbar-title>Categories</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list color="transparent">
          <v-list-item-group color="green">
            <v-list-item
              v-for="category in categories"
              :key="category.id"
              link
              @click="attCategorySelected(category.id)"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ category.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>

    <v-col cols="6">
      <v-sheet min-height="70vh" rounded="lg">
        <v-list color="transparent">
          <template v-for="todo in todos">
            <v-list-item
              v-if="todo.category == selectedCategory"
              :key="todo.id"
              link
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{ todo.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <v-list-item v-if="selectedCategory != 0">
            <v-list-item-title>
              <v-row dense>
                <v-col cols="6">
                  <v-text-field 
                    dense
                    append-outer-icon="mdi-plus"
                    placeholder="New todo"
                    @click:append-outer="postNewTodo"
                    @keyup.enter="postNewTodo"
                    v-model="newTodo"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-list-item-title>
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
      categories: [],

      selectedCategory: 0,
      newTodo: "",
    };
  },
  mounted: function () {
    //FETCH TODOS
    axios
      .get("http://localhost:3000/todos/")
      .then((res) => {
        console.log("Fetched todos successfully");
        this.todos = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    //FETCH CATEGORIES
    axios
      .get("http://localhost:3000/categories/")
      .then((res) => {
        console.log("Fetched categories successfully");
        this.categories = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    attCategorySelected: function (id) {
      this.selectedCategory = id;
    },
    postNewTodo: function () {
      var postingTodo = {
        name: this.newTodo,
        category: this.selectedCategory,
      }
      axios
      .post("http://localhost:3000/todos/", postingTodo)
      .then((response) => {
        console.log("Posted new todo!");
        console.log("Status " + response.status + " - " + response.data.message);
        this.todos.push(postingTodo);
        this.newTodo = "";
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
<style scoped>
</style>