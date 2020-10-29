import Vue from "vue";
import Vuex from "vuex";
import todoRequests from "../utils/axiosTodosRequestHelper";
import categoryRequests from "../utils/axiosCategoriesRequestHelper";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: [],
		categories: [],

		selectedCategory: 0, //0 is all categories, -1 is no category.
		editingTodo: -1,
	},
	mutations: {
		set_todos(state, todos) {
			state.todos = todos;
		},
		set_categories(state, categories) {
			state.categories = categories;
		},
		add_todo(state, todo) {
			state.todos.push(todo);
		},
		set_selected_category(state, categoryId) {
			state.selectedCategory = categoryId;
		},
	},
	actions: {
		fetch_todos(ctx) {
			todoRequests.get_todos(ctx);
		},
		fetch_categories(ctx) {
			categoryRequests.get_categories(ctx);
		},
		add_todo(ctx, todoName) {
			todoRequests.insert_todo(ctx, todoName);
		},

		initialize(ctx) {
			ctx.dispatch("fetch_todos");
			ctx.dispatch("fetch_categories");
		},
	},
	getters: {
		get_todos: (state) => state.todos,
		get_filtered_todos_by_category: (state) => state.todos.filter((todo) => (state.selectedCategory == 0 ? true : todo.category == state.selectedCategory)),
		get_categories: (state) => state.categories,
		get_selected_category: (state) => state.selectedCategory,
	},
});
