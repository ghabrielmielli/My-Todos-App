<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      flat
    >
    <v-spacer></v-spacer>
      <v-card-title primary-title>
        Todos!
      </v-card-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    
    <v-main class="grey lighten-1">
      <v-container fluid>
        
        <Todos></Todos>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Todos from "./components/Todos";
  export default {
    components: {
      Todos
    },
    data: function () {
      return {

      }
    },
    
  }
</script>