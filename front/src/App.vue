<template>
	<v-app>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css" />
		<AppBar></AppBar>

		<v-main class="secondary">
			<v-container fluid>
				<v-row>
					<v-col cols="3">
						<Categories></Categories>
					</v-col>
					<v-col cols="6">
						<TodoList></TodoList>
					</v-col>
				</v-row>
			</v-container>
			<!-- Pop ups -->
			<ErrorAlert></ErrorAlert>
			<Welcome></Welcome>
		</v-main>
	</v-app>
</template>

<script>
	import TodoList from "./components/Todos section/TodoList";
	import Categories from "./components/Categories section/Categories";
	import AppBar from "./components/AppBar";
	import ErrorAlert from "./components/ErrorAlert";
	import Welcome from "./components/Welcome";

	export default {
		components: {
			TodoList,
			Categories,
			AppBar,
			ErrorAlert,
			Welcome,
		},
	};
</script>
<style>
	html {
		overflow-y: auto;
	}
</style>
