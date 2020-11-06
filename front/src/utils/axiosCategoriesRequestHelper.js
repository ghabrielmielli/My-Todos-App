import routes from "./axiosRoutes";
import axios from "axios";

export default {
	get_categories(ctx) {
		axios.get(routes.get_categories)
			.then((res) => {
				console.log("Fetched categories successfully");
				ctx.commit("set_categories", res.data);
			})
			.catch((err) => {
				console.log(err);
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
				console.log("deu ruim:::");
				console.log(err);
			});
	},
};
