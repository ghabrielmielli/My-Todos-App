<template>
	<v-app>
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
			<ErrorAlert></ErrorAlert>
		</v-main>
	</v-app>
</template>

<script>
	import TodoList from "./components/Todos section/TodoList";
	import Categories from "./components/Categories section/Categories";
	import AppBar from "./components/AppBar";
	import ErrorAlert from "./components/ErrorAlert";

	export default {
		components: {
			TodoList,
			Categories,
			AppBar,
			ErrorAlert,
		},
	};
</script>
<style>
	html {
		overflow-y: auto;
	}
</style>
