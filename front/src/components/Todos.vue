<template>
	<v-card flat min-height="70vh" rounded="lg">
		<v-list>
			<!-- add/delete done todos section -->
			<v-list-item>
				<v-list-item-title>
					<v-row dense>
						<v-col cols="6">
							<v-text-field
								:disabled="!selectedCategory"
								dense
								append-outer-icon="mdi-plus"
								placeholder="New todo"
								@click:append-outer="postNewTodo"
								@keyup.enter="postNewTodo"
								v-model="newTodo"
							></v-text-field>
						</v-col>
						<v-spacer></v-spacer>
						<v-col cols="auto">
							<v-tooltip bottom open-delay="800">
								<template v-slot:activator="{ on, attrs }">
									<v-btn small dark depressed :disabled="selectedCategory == undefined" color="grey" v-bind="attrs" v-on="on" @click="cleanDone"
										><v-icon>mdi-trash-can-outline</v-icon></v-btn
									>
								</template>
								<p>Delete all marked todos from this category.</p>
								<p>Delete all marked todos if no category is selected.</p>
							</v-tooltip>
						</v-col>
					</v-row>
				</v-list-item-title>
			</v-list-item>
			<transition-group name="fade" mode="out-in">
				<!-- items-->
				<v-list-item v-for="todo in filteredTodos" :key="todo.id" class="fade-item">
					<v-list-item-action>
						<v-checkbox v-model="todo.done" color="grey" @click="checkTodo(todo)"></v-checkbox>
					</v-list-item-action>

					<v-list-item-content>
						<v-list-item-title v-if="editingTodo != todo.id" @click="editTodo(todo)" @dblclick="deleteTodo(todo)" :class="{ 'text--disabled': todo.done }">
							{{ todo.name }}
						</v-list-item-title>
						<v-list-item-title v-else>
							<v-row dense>
								<v-col cols="6">
									<v-text-field
										dense
										:placeholder="todo.name"
										autofocus
										@blur="editingTodo = -1"
										@keyup.enter="updateTodo(todo)"
										v-model="todo.name"
									></v-text-field>
								</v-col>
							</v-row>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</transition-group>
		</v-list>
	</v-card>
</template>
<script>
	import axios from "axios";
	import { mapGetters } from "vuex";

	export default {
		name: "App",
		data: () => {
			return {
				newTodo: "",
				editingTodo: -1,
			};
		},
		computed: {
			...mapGetters({
				todos: "get_todos",
				selectedCategory: "get_selected_category",
				filteredTodos: "get_filtered_todos_by_category",
			}),
		},
		methods: {
			postNewTodo: function() {
				this.$store.dispatch("add_todo", this.newTodo);
			},
			deleteTodo: function(todo) {
				axios.delete(`http://localhost:3000/todos/${todo.id}`)
					.then((response) => {
						console.log(response.status + " - " + response.data.message);
						this.todos.splice(this.todos.indexOf(todo), 1);
					})
					.catch((err) => {
						console.log(err);
					});
			},
			checkTodo(todo) {
				axios.patch(`http://localhost:3000/todos/${todo.id}`, {
					done: todo.done,
				})
					.then((response) => {
						console.log(response.status + " - " + response.data.message);
					})
					.catch((err) => {
						console.log(err);
					});
			},
			updateTodo(todo) {
				this.editingTodo = null;
				axios.patch(`http://localhost:3000/todos/${todo.id}`, {
					name: todo.name,
				})
					.then((response) => {
						console.log(response.status + " - " + response.data.message);
					})
					.catch((err) => {
						console.log(err);
					});
			},
			editTodo(todo) {
				setTimeout(
					function() {
						this.editingTodo = this.todos.indexOf(todo) != null ? todo.id : -1;
					}.bind(this),
					200
				);
			},
			cleanDone() {
				axios.delete(`http://localhost:3000/todos/checked/${this.selectedCategory}`)
					.then((response) => {
						console.log(response.status + " - " + response.data.message);
						this.$store.dispatch("fetch_todos");
					})
					.catch((err) => {
						console.log(err);
					});
			},
		},
	};
</script>

<style scoped>
	.fade-item {
		transition: all 0.5s;
	}
	.fade-enter, .fade-leave-to
/* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
		transform: scaleY(0);
	}
	.fade-leave-active {
		position: absolute;
	}
</style>
