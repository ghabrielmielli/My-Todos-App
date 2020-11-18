<template>
	<v-card flat>
		<!-- Toolbar -->
		<v-toolbar color="primary" dark flat>
			<v-toolbar-title>Categories</v-toolbar-title>

			<v-spacer></v-spacer>

			<!-- The button is different depending on the currently selected category. Enables editing or adding a new category. -->
			<v-btn icon @click.stop="attDialog = true" v-if="selectedCategory > 0">
				<v-icon>mdi-pencil</v-icon>
			</v-btn>
			<v-btn icon @click.stop="addDialog = true" v-else>
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</v-toolbar>

		<!-- dialogs -->
		<EditCategoryDialog @close-dialog="attDialog = false" :attDialog="attDialog" :category="{ ...getCategory(getSelected) }"></EditCategoryDialog>

		<AddCategoryDialog @close-dialog="addDialog = false" :addDialog="addDialog"></AddCategoryDialog>

		<!-- category list -->
		<v-list color="">
			<v-list-item-group color="primary" v-model="selectedCategory">
				<v-slide-y-transition group>
					<v-list-item v-for="category in categories" :key="category.id" link>
						<v-list-item-content>
							<v-list-item-title class="textContent--text">
								{{ category.name }}
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-slide-y-transition>
			</v-list-item-group>
		</v-list>
	</v-card>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";

	import EditCategoryDialog from "./EditCategoryDialog";
	import AddCategoryDialog from "./AddCategoryDialog";

	export default {
		components: {
			EditCategoryDialog,
			AddCategoryDialog,
		},
		data() {
			return {
				attDialog: false,
				addDialog: false,
			};
		},
		computed: {
			...mapGetters({
				categories: "get_categories",
				getSelected: "get_selected_category",
				getCategory: "get_category_by_id",
			}),

			selectedCategory: {
				get() {
					return this.categories.indexOf(this.getSelected);
				},
				set(category) {
					this.set_selected_category(category != undefined ? this.categories[category].id : undefined);
				},
			},
		},
		methods: {
			...mapMutations(["set_selected_category"]),
		},
	};
</script>

<style></style>
