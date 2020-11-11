/**
 * This file converts and exports backend routes
 * with more legible names
 */

const URL = "http://localhost:3000/";

module.exports = {
	URL,

	//single todo
	insert_todo: `${URL}todos`,
	update_todo: (todoId) => `${URL}todos/${todoId}`,
	delete_todo: (todoId) => `${URL}todos/${todoId}`,

	//multiple todos
	get_todos: `${URL}todos`,
	delete_done_todos: (selectedCategory) => `${URL}todos/fromCategory/${selectedCategory}`,
	check_uncheck_todos_from_category: (selectedCategory) => `${URL}todos/fromCategory/${selectedCategory}`,

	//single category
	insert_category: `${URL}categories`,
	update_category: (categoryId) => `${URL}categories/${categoryId}`,
	delete_category: (categoryId) => `${URL}categories/${categoryId}`,

	//multiple categories
	get_categories: `${URL}categories`,
};
