<template>
	<v-card flat>
		<v-toolbar color="grey" dark flat>
			<v-toolbar-title>Categories</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon>
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</v-toolbar>

		<v-list color="transparent">
			<v-list-item-group color="grey-darken-2" v-model="selectedCategory">
				<v-list-item v-for="category in categories" :key="category.id" link>
					<v-list-item-content>
						<v-list-item-title>
							{{ category.name }}
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</v-card>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";

	export default {
		computed: {
			...mapGetters({
				categories: "get_categories",
				getSelected: "get_selected_category",
			}),

			selectedCategory: {
				get() {
					return this.getSelected;
				},
				set(category) {
					this.set_selected_category(category);
				},
			},
		},
		methods: {
			...mapMutations(["set_selected_category"]),
		},
	};
</script>

<style></style>
