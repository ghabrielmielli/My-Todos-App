<template>
	<v-app>
		<v-icon color="white">mdi-home</v-icon>
		<!-- just to make the title cetered LOL -->
		<v-app-bar app color="white" flat>
			<v-spacer></v-spacer>
			<v-card-title primary-title>
				My Simple Todo List
			</v-card-title>
			<v-spacer></v-spacer>
			<v-tooltip bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-icon color="grey" dark v-bind="attrs" v-on="on">
						mdi-help-circle-outline
					</v-icon>
				</template>
				<p>Click a todo to enable editing.</p>
				<p>Double click a todo to delete it.</p>
				<p>Hover the bin button for its info.</p>
			</v-tooltip>
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
			Todos,
		},
		data: function() {
			return {};
		},
	};
</script>
