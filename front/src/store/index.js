import Vue from "vue";
import Vuex from "vuex";
import todoRequests from "../utils/axiosTodosRequestHelper";
import categoryRequests from "../utils/axiosCategoriesRequestHelper";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,

	state: {
		todos: [],
		categories: [],

		selectedCategory: 0, //0 is all categories, -1 is no category.
	},
	mutations: {
		//TODO stuff
		set_todos(state, todos) {
			todos.forEach((todo) => {
				todo.done = todo.done == 0 ? false : true;
			});
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
		delete_todo(state, todo) {
			state.todos = state.todos.filter((el) => el.id != todo.id);
		},
		patch_todo(state, [todo, key, value]) {
			todo[key] = value;
		},

		//Category stuff

		add_category(state, category) {
			state.categories.push(category);
		},
		patch_category(state, [category, key, value]) {
			category[key] = value;
		},
		delete_category(state, category) {
			state.categories = state.categories.filter((el) => el.id != category.id);
		},
	},
	actions: {
		//TODO stuff
		fetch_todos(ctx) {
			todoRequests.get_todos(ctx);
		},
		fetch_categories(ctx) {
			categoryRequests.get_categories(ctx);
		},
		add_todo(ctx, todoName) {
			todoRequests.insert_todo(ctx, todoName);
		},
		delete_todo(ctx, todo) {
			todoRequests.delete_todo(ctx, todo);
		},
		patch_todo(ctx, [todo, key, value]) {
			todoRequests.patch_todo(ctx, todo, key, value);
		},
		delete_done_todos(ctx) {
			todoRequests.delete_done_todos(ctx);
		},

		initialize(ctx) {
			ctx.dispatch("fetch_todos");
			ctx.dispatch("fetch_categories");
		},

		check_uncheck_all_todos(ctx) {
			let category = ctx.getters.get_selected_category;
			var todos = ctx.getters.get_filtered_todos_by_category;

			//If the loop bumps into an undone todo, it asks to check 'em all. Does otherwise if it doesn't.
			for (let i = 0; i < todos.length; i++) if (!todos[i].done) return todoRequests.equalize_all_from_category(ctx, category, true);
			todoRequests.equalize_all_from_category(ctx, category, false);
		},

		// Category stuff

		add_category(ctx, category) {
			categoryRequests.insert_category(ctx, category);
		},
		patch_category(ctx, [category, key, value]) {
			categoryRequests.patch_category(ctx, category, key, value);
		},
		delete_category(ctx, category) {
			categoryRequests.delete_category(ctx, category);
			ctx.commit("set_selected_category", 0);
		},
	},
	getters: {
		get_todos: (state) => state.todos,
		get_filtered_todos_by_category: (state) => state.todos.filter((todo) => (state.selectedCategory == 0 ? true : todo.category == state.selectedCategory)),
		get_categories: (state) => state.categories,
		get_selected_category: (state) => state.selectedCategory,

		get_todo_by_id: (state) => (id) => state.todos.find((todo) => todo.id === id),
		get_category_by_id: (state) => (id) => state.categories.find((category) => category.id === id),
	},
});
