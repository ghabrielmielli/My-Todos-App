<template>
	<v-dialog v-model="attDialog" max-width="30%" overlay-opacity="0.3" @click:outside="closeDialog()">
		<v-card>
			<v-card-title class="headline">
				<v-text-field
					v-if="category"
					autofocus
					:placeholder="category.name"
					v-model="category.name"
					append-outer-icon="mdi-delete"
					@click:append-outer="deleteDialog = true"
					@keyup.enter="attCategory()"
				></v-text-field>
			</v-card-title>
		</v-card>
		<DeleteCategoryDialog :deleteDialog="deleteDialog" @close="deleteDialog = false" @delete="deleteCategory()"></DeleteCategoryDialog>
	</v-dialog>
</template>

<script>
	import DeleteCategoryDialog from "./DeleteCategoryDialog";

	export default {
		components: {
			DeleteCategoryDialog,
		},
		props: {
			attDialog: Boolean,
			category: Object,
		},
		data() {
			return {
				deleteDialog: false,
			};
		},
		methods: {
			closeDialog() {
				this.$emit("close-dialog");
			},
			attCategory() {
				this.$store.dispatch("patch_category", [this.category, "name", this.category.name]);

				this.closeDialog();
			},
			deleteCategory() {
				this.deleteDialog = false;
				this.$store.dispatch("delete_category", this.category);
				this.closeDialog();
			},
		},
	};
</script>

<style></style>
