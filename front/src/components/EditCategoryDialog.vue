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
				<v-text-field v-else autofocus placeholder="nao deu certo" prepend-icon="mdi-pencil" @keyup.enter="attCategory()"></v-text-field>
			</v-card-title>
		</v-card>
		<v-dialog v-model="deleteDialog" max-width="290">
			<v-card>
				<v-card-title class="headline">
					Are you sure?
				</v-card-title>

				<v-card-text>
					Deleting the category will delete all of it's todos.
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn color="blue darken-1" text @click="deleteDialog = false">
						no
					</v-btn>

					<v-btn color="red darken-1" text @click="deleteCategory()">
						yes
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-dialog>
</template>

<script>
	export default {
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
				this.$store.dispatch("delete_category", this.category);
				this.closeDialog();
			},
		},
	};
</script>

<style></style>
