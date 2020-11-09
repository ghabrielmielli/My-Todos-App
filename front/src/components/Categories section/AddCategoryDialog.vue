<template>
	<v-dialog v-model="addDialog" max-width="30%" overlay-opacity="0.3" @click:outside="closeDialog()">
		<v-card>
			<v-card-title class="headline">
				<v-text-field autofocus placeholder="New Category" v-model="newCategory" prepend-icon="mdi-plus" @keyup.enter="addCategory()"></v-text-field>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: {
			addDialog: Boolean,
		},
		data() {
			return {
				newCategory: "",
			};
		},
		methods: {
			closeDialog() {
				this.newCategory = "";
				this.$emit("close-dialog");
			},
			addCategory() {
				this.$store.dispatch("add_category", this.newCategory);

				this.closeDialog();
			},
		},
	};
</script>

<style></style>
