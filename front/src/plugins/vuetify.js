import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		dark: localStorage.darkMode == "true",
		themes: {
			light: {
				primary: colors.teal.base,
				secondary: colors.teal.lighten2,
				accent: colors.teal.accent3,
				textContent: colors.shades.black,
			},
			dark: {
				primary: colors.blueGrey.darken4,
				secondary: colors.teal.darken4,
				accent: colors.teal.base,
				textContent: colors.grey.lighten2,
			},
		},
	},
});
