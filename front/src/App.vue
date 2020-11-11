<template>
	<v-app>
		<v-app-bar app color="primary" dark flat>
			<!-- This icon is just to make the title cetered -->
			<v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
				<v-icon>mdi-theme-light-dark</v-icon>
			</v-btn>
			<v-spacer></v-spacer>
			<v-card-title primary-title>
				Todos App
			</v-card-title>
			<v-spacer></v-spacer>
			<v-tooltip bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-icon dark v-bind="attrs" v-on="on">
						mdi-help-circle-outline
					</v-icon>
				</template>
				<p>Click a todo to enable editing.</p>
				<p>Double click a todo to delete it.</p>
				<p>Hover the bin button for its info.</p>
			</v-tooltip>
		</v-app-bar>

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
		</v-main>
	</v-app>
</template>

<script>
	import TodoList from "./components/Todos section/TodoList";
	import Categories from "./components/Categories section/Categories";

	export default {
		components: {
			TodoList,
			Categories,
		},
	};
</script>
