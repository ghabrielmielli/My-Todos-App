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
};
