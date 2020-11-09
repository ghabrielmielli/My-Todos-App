<template>
	<v-dialog v-model="attDialog" max-width="30%" overlay-opacity="0.3" @click:outside="closeDialog()">
		<v-card>
			<v-card-title class="headline">
				<v-text-field v-if="category" autofocus :placeholder="category.name" v-model="category.name" prepend-icon="mdi-pencil" @keyup.enter="attCategory()"></v-text-field>
				<v-text-field v-else autofocus placeholder="nao deu certo" prepend-icon="mdi-pencil" @keyup.enter="attCategory()"></v-text-field>
			</v-card-title>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: {
			attDialog: Boolean,
			category: Object,
		},
		methods: {
			closeDialog() {
				this.$emit("close-dialog");
			},
			attCategory() {
				this.$store.dispatch("patch_category", [this.category, "name", this.category.name]);

				this.closeDialog();
			},
		},
	};
</script>

<style></style>
