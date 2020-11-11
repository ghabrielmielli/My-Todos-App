<template>
	<v-dialog v-model="deleteDialog" max-width="20%" persistent>
		<v-card>
			<v-card-title class="headline">
				Are you sure?
			</v-card-title>

			<v-card-text>
				Deleting the category will delete all of it's todos.
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>

				<v-btn color="accent" text @click="$emit('close')">
					no
				</v-btn>

				<v-btn color="secondary" text @click="$emit('delete')">
					yes
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: ["deleteDialog"],
	};
</script>

<style></style>
