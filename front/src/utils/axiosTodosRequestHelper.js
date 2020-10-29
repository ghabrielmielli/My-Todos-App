import routes from "./axiosRoutes";
import axios from "axios";

export default {
	get_todos(ctx) {
		axios.get(routes.get_todos)
			.then((res) => {
				console.log("Fetched todos successfully");
				ctx.commit("set_todos", res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	insert_todo(ctx, todoName) {
		var postingTodo = {
			name: todoName,
			category: ctx.getters.get_selected_category,
		};

		axios.post(routes.insert_todo, postingTodo)
			.then((response) => {
				console.log(response.status + " - " + response.data.message);

				postingTodo.id = response.data.insertId;
				ctx.commit("add_todo", postingTodo);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	delete_todo(ctx, todo) {
		axios.delete(routes.delete_todo(todo.id))
			.then((response) => {
				console.log(response.status + " - " + response.data.message);
				ctx.commit("delete_todo", todo);
			})
			.catch((err) => {
				console.log(err);
			});
	},
	patch_todo(ctx, todo, key, value) {
		var payload = { key, value };
		if (key) {
			axios.patch(routes.update_todo(todo.id), payload)
				.then((response) => {
					console.log(response.status + " - " + response.data.message);
					ctx.commit("patch_todo", todo);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	},
	delete_done_todos(ctx) {
		axios.delete(routes.delete_done_todos(ctx.get_selected_category))
			.then((response) => {
				console.log(response.status + " - " + response.data.message);
				ctx.dispatch("fetch_todos");
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
