<template>
	<v-card flat rounded="lg" min-height="70vh">
		<v-toolbar color="white" flat>
			<!-- toolbar section -->
			<v-row>
				<!-- Add todo field -->
				<v-col cols="6">
					<v-text-field
						:disabled="!selectedCategory"
						dense
						append-outer-icon="mdi-plus"
						placeholder="New todo"
						@click:append-outer="addTodo()"
						@keyup.enter="addTodo()"
						:error="invalidTodo"
						v-model="newTodo"
					></v-text-field>
				</v-col>

				<v-spacer></v-spacer>

				<!-- check all todos button -->
				<v-col cols="auto">
					<v-tooltip bottom open-delay="800">
						<template v-slot:activator="{ on, attrs }">
							<v-btn small dark depressed :disabled="selectedCategory == undefined" color="grey" v-bind="attrs" v-on="on" @click="check_uncheck_all_todos()">
								<v-icon>mdi-check</v-icon>
							</v-btn>
						</template>
						Checks/unchecks all todos
					</v-tooltip>
				</v-col>

				<!-- Delete done todos button -->
				<v-col cols="auto">
					<v-tooltip bottom open-delay="800">
						<template v-slot:activator="{ on, attrs }">
							<v-btn small dark depressed :disabled="selectedCategory == undefined" color="grey" v-bind="attrs" v-on="on" @click="delete_done_todos()">
								<v-icon>mdi-trash-can-outline</v-icon>
							</v-btn>
						</template>
						Delete all marked todos from this category.<br />
						Delete all marked todos if no category is selected.
					</v-tooltip>
				</v-col>
			</v-row>
		</v-toolbar>

		<!-- items section -->
		<v-list>
			<transition-group name="fade" mode="out-in">
				<TodoItem
					v-for="todo in filteredTodos"
					:key="todo.id"
					class="fade-item"
					:todo="{ ...todo }"
					:isEditing="todo.id == editingTodo"
					@edit-me="editingTodo = todo.id"
					@finish-edit="editingTodo = -1"
				></TodoItem>
			</transition-group>
		</v-list>
	</v-card>
</template>
<script>
	import { mapGetters } from "vuex";
	import { mapActions } from "vuex";
	import TodoItem from "./TodoItem";

	export default {
		components: {
			TodoItem,
		},
		data() {
			return {
				newTodo: "",
				editingTodo: -1,
				invalidTodo: false,
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
			...mapActions(["add_todo", "delete_done_todos", "check_uncheck_all_todos"]),
			addTodo() {
				this.invalidTodo = !this.newTodo;
				if (this.newTodo) {
					this.add_todo(this.newTodo);
					this.newTodo = "";
				}
			},
		},
	};
</script>

<style scoped>
	.fade-item {
		transition: all 0.3s;
	}
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
		transform: scaleY(0);
	}
	.fade-leave-active {
		position: absolute;
	}
</style>
