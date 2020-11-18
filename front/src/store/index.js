/**
 * This file is responsible for managing the state of the entire application.
 * Further info about how it works can be found on https://vuex.vuejs.org/
 */

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

		/**
		 * Stores the current active category on the list of categories. 0 means all categories are selected, -1 means no category is selected.
		 */
		selectedCategory: 0,
	},
	mutations: {
		//	Todo related mutations
		set_todos(state, todos) {
			todos.forEach((todo) => {
				todo.done = todo.done == 0 ? false : true;
			});
			state.todos = todos;
		},
		add_todo(state, todo) {
			state.todos.push(todo);
		},
		delete_todo(state, todo) {
			state.todos = state.todos.filter((el) => el.id != todo.id);
		},
		patch_todo(state, [todo, key, value]) {
			todo[key] = value;
		},

		//	Category related mutations
		set_categories(state, categories) {
			state.categories = categories;
		},

		add_category(state, category) {
			state.categories.push(category);
		},
		patch_category(state, [category, key, value]) {
			category[key] = value;
		},
		delete_category(state, category) {
			state.categories = state.categories.filter((el) => el.id != category.id);
		},
		set_selected_category(state, categoryId) {
			state.selectedCategory = categoryId;
		},
	},
	actions: {
		//	Todo related actions
		fetch_todos(ctx) {
			todoRequests.get_todos(ctx);
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
		check_uncheck_all_todos(ctx) {
			let category = ctx.getters.get_selected_category;
			var todos = ctx.getters.get_filtered_todos_by_category;

			//If the loop bumps into an undone todo, it asks to check 'em all. Does otherwise if it doesn't.
			for (let i = 0; i < todos.length; i++) if (!todos[i].done) return todoRequests.equalize_all_from_category(ctx, category, true);
			todoRequests.equalize_all_from_category(ctx, category, false);
		},

		//	Category related actions
		fetch_categories(ctx) {
			categoryRequests.get_categories(ctx);
		},
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

		// Other actions
		initialize(ctx) {
			ctx.dispatch("fetch_todos");
			ctx.dispatch("fetch_categories");
		},
	},
	getters: {
		// todo data
		get_todos: (state) => state.todos,
		get_filtered_todos_by_category: (state) => state.todos.filter((todo) => (state.selectedCategory == 0 ? true : todo.category == state.selectedCategory)),
		get_todo_by_id: (state) => (id) => state.todos.find((todo) => todo.id === id),

		// category data
		get_categories: (state) => state.categories,
		get_category_by_id: (state) => (id) => state.categories.find((category) => category.id === id),
		get_selected_category: (state) => state.selectedCategory,

		// other data
		get_changing_category_status: (state) => state.changingCategory,
	},
});
