<template>
	<v-dialog v-model="hasNoCategories" width="40vw">
		<v-card color="primary" dark>
			<v-card-title primary-title>
				Welcome!
			</v-card-title>

			<v-card-text>
				Welcome message
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		data() {
			return {
				hasNoCategories: null,
				unwatch: null,
			};
		},
		computed: {
			...mapGetters(["get_categories"]),
		},
		methods: {
			checkForCategories() {
				this.hasNoCategories = this.get_categories.length < 2;
				this.unwatch();
			},
		},
		created() {
			this.unwatch = this.$watch("get_categories", this.checkForCategories);
		},
	};
</script>

<style></style>>
