<template>
	<v-card flat>
		<!-- Toolbar -->
		<v-toolbar color="grey" dark flat>
			<v-toolbar-title>Categories</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-btn icon @click.stop="editDialog = true" v-if="selectedCategory > 0">
				<v-icon>mdi-pencil</v-icon>
			</v-btn>
			<v-btn icon @click.stop="addDialog = true" v-else>
				<v-icon>mdi-plus</v-icon>
			</v-btn>
		</v-toolbar>

		<!-- dialogs -->
		<v-dialog v-model="editDialog" max-width="30%" overlay-opacity="0.3">
			<EditCategoryDialog @close-dialog="editDialog = false"></EditCategoryDialog>
		</v-dialog>

		<AddCategoryDialog @close-dialog="addDialog = false" :addDialog="addDialog"></AddCategoryDialog>

		<!-- category list -->
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

	import EditCategoryDialog from "./EditCategoryDialog";
	import AddCategoryDialog from "./AddCategoryDialog";

	export default {
		components: {
			EditCategoryDialog,
			AddCategoryDialog,
		},
		data() {
			return {
				editDialog: false,
				addDialog: false,
			};
		},
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
					this.set_selected_category(this.categories[category].id);
				},
			},
		},
		methods: {
			...mapMutations(["set_selected_category"]),
		},
	};
</script>

<style></style>
