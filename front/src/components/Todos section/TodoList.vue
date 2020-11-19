<template>
	<v-card flat rounded="lg" min-height="85vh" max-height="85vh" class="overflow-y-auto hide-scroll-bar">
		<!-- toolbar section -->
		<v-toolbar flat class="mb-0 pb-0" max-height="5vh">
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
					<ButtonWithTooltip
						:disabled="selectedCategory == undefined"
						icon="mdi-check"
						tooltip="Checks/unchecks all todos"
						@pressed="check_uncheck_all_todos()"
					></ButtonWithTooltip>
				</v-col>

				<!-- Delete done todos button -->
				<v-col cols="auto">
					<ButtonWithTooltip
						:disabled="selectedCategory == undefined"
						icon="mdi-trash-can-outline"
						tooltip="Delete all marked todos from this page"
						@pressed="delete_done_todos()"
					></ButtonWithTooltip>
				</v-col>
			</v-row>
		</v-toolbar>

		<!-- items section -->
		<v-list>
			<transition-group name="list" mode="out-in">
				<TodoItem
					v-for="todo in filteredTodos"
					:key="todo.id"
					class="list-item"
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
	import { mapGetters, mapActions } from "vuex";
	import TodoItem from "./TodoItem";
	import ButtonWithTooltip from "./ButtonWithTooltip";

	export default {
		components: {
			TodoItem,
			ButtonWithTooltip,
		},
		data() {
			return {
				newTodo: "",
				editingTodo: -1, //the index of the todo that is being edited. -1 means no todo is being edited.
				invalidTodo: false, //controls the display of the new todo input field
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

				setTimeout(() => {
					this.invalidTodo = false;
				}, 2000);
			},
		},
	};
</script>

<style scoped>
	.list-item {
		transition: all 0.6s;
	}

	.list-enter {
		opacity: 0;
		transform: rotate(-10deg) scaleY(2);
	}
	.list-enter-active {
		transition-duration: 0.5s;
	}
	.list-enter-to,
	.list-leave {
		opacity: 1;
		transform: scaleY(1);
	}
	.list-leave-active {
		transition-duration: 0.5s;
		position: absolute;
	}
	.list-leave-to {
		transform: rotate(-20deg) translateX(-10vw) scale(0.5);
		opacity: 0;
	}

	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}
	.hide-scroll-bar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
