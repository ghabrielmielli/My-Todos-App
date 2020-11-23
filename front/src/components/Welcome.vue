<template>
	<v-dialog v-model="hasNoCategories" width="45vw">
		<v-card color="primary" dark>
			<v-card-title primary-title>
				Hey, welcome!
			</v-card-title>

			<v-card-text>
				Looks like it's your first time around here!<br />
				You can quickstart by first creating a category to organize your todos.<br />
				Do you want more information about <strong>how to use the app</strong>?
			</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn text @click="hasNoCategories = false">
					Nah, I can handle it.
				</v-btn>
				<v-btn @click="showMoreInfo()" outlined dark>
					Yes, please!
				</v-btn>
			</v-card-actions>
		</v-card>
		<AppInformation :open="openInfo"></AppInformation>
	</v-dialog>
</template>

<script>
	import { mapGetters } from "vuex";
	import AppInformation from "./AppInformation";
	export default {
		components: {
			AppInformation,
		},
		data() {
			return {
				hasNoCategories: null,
				unwatch: null,
				openInfo: false,
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
			showMoreInfo() {
				this.openInfo = true;
				this.hasNoCategories = false;
			},
		},
		created() {
			this.unwatch = this.$watch("get_categories", this.checkForCategories);
		},
	};
</script>

<style></style>>
