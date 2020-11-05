/**
 * This file's burden is just to convert backend routes
 * into more legible names, as well as to help devs have a
 * smoother understanding of supplementary code.
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

	//multiple categories
	get_categories: `${URL}categories`,
};
