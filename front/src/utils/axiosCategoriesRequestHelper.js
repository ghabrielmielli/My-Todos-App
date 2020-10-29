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
};
