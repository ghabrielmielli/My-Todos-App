<template>
	<v-dialog v-model="errorMessage" width="40vw" persistent>
		<v-card color="error" dark>
			<v-card-title primary-title>
				Oops!
			</v-card-title>

			<v-card-text>
				{{ errorMessage }}
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		computed: {
			errorMessage: {
				get: function() {
					return this.$store.getters.get_error_message;
				},
				set: function() {},
			},
		},
	};
</script>

<style></style>>
