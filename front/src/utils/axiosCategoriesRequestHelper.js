//This file is responsible for making requests related to category data to the backend and sending their results to the vuex store.

import routes from "./axiosRoutes";
import axios from "axios";
import errorHandler from "./errorHandler";

export default {
	get_categories(ctx) {
		axios.get(routes.get_categories)
			.then((res) => {
				console.log("Fetched categories successfully");
				ctx.commit("set_categories", res.data);
			})
			.catch((err) => {
				errorHandler(ctx, err);
			});
	},

	insert_category(ctx, categoryName) {
		axios.post(routes.insert_category, { name: categoryName })
			.then((response) => {
				console.log(response.status + " - " + response.data.message);
				let postingCategory = {
					name: categoryName,
					id: response.data.insertId,
				};
				ctx.commit("add_category", postingCategory);
			})
			.catch((err) => {
				errorHandler(ctx, err);
			});
	},

	patch_category(ctx, category, key, value) {
		var payload = { key, value };
		if (key) {
			axios.patch(routes.update_category(category.id), payload)
				.then((response) => {
					console.log(response.status + " - " + response.data.message);
					ctx.commit("patch_category", [ctx.getters.get_category_by_id(category.id), key, value]);
				})
				.catch((err) => {
					errorHandler(ctx, err);
				});
		}
	},

	delete_category(ctx, category) {
		axios.delete(routes.delete_category(category.id))
			.then((response) => {
				console.log(response.status + " - " + response.data.message);
				ctx.commit("delete_category", category);
				ctx.dispatch("fetch_todos");
			})
			.catch((err) => {
				errorHandler(ctx, err);
			});
	},
};
