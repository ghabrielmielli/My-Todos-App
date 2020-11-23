<template>
	<v-dialog v-model="isOpen" width="50vw" @click:outside="$emit('close')">
		<v-card>
			<v-toolbar flat color="primary" dark>
				<v-toolbar-title>User Manual</v-toolbar-title>
			</v-toolbar>
			<v-tabs vertical>
				<v-tab v-for="tab in tabs" :key="tab.title">
					{{ tab.title }}
				</v-tab>

				<v-tab-item v-for="tab in tabs" :key="tab.title">
					<v-card flat>
						<v-card-text>
							{{ tab.content }}
						</v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs>
		</v-card>
	</v-dialog>
</template>

<script>
	export default {
		props: ["open"],
		data() {
			return {
				isOpen: false,
				tabs: [
					{
						title: "Introduction",
						content:
							"Feel free to guide yourself through the items on the left. This page will be always accessible by clicking on the '?' icon displayed on the top right of the application. We recommend that new users read this guide on descending order for best learning. Enjoy!",
					},
					{
						title: "General advises",
						content:
							"First, notice that there's a category named 'All Todos' displayed on the 'Categories' card. As the name says, it shows all the todos from each category. This category can neither be erased nor edited. Furthermore, there's an icon on the top left of the screen. You can click on it to toggle between the application's light and dark mode.",
					},
					{
						title: "Creating categories",
						content:
							"To create a new category, click on the '+' icon on the top right of the 'Categories' card. Notice that the 'plus' icon is displayed when there is no category selected or the 'All Todos' category is selected. After clicking on it, a field will pop up the screen, so you can type the new category name as you wish. Press 'enter' to confirm, or click outside the card to cancel the operation.",
					},
					{
						title: "Editing categories",
						content:
							"To edit a category, first select it on the 'Categories' card. Notice the 'pencil' icon that is displayed on the top rigth of the 'Categories' card. Click on it to open the editing pop up. The dialog should have a field with the current category name typed on it. Make the changes as you wish and press the 'enter' key to confirm, or click outside the card to cancel the operation.",
					},
					{
						title: "Deleting categories",
						content:
							"To delete a category, first select it on the 'Categories' card. Notice the 'pencil' icon that is displayed on the top rigth of the 'Categories' card. Click on it to open the editing pop up. The dialog should have a 'trash can' icon on the right corner of the editing text field. Click on it and confirm on the next modal to delete the category, or click outside the card to cancel the operation.",
					},
					{
						title: "Creating todos",
						content:
							"A todo must be from a category, so make sure to have at least one category other than 'All Todos' on the 'Categories' card. To create a new todo, first select the category this todo shall be from. Then, click on the text field with a '+' icon next to it. Now, just type the todo as you wish, and click on the plus icon or press the 'enter' key to add the todo.",
					},
					{
						title: "Editing todos",
						content:
							"To edit a todo, click on it on the todo list. A text field will be enabled, so you can type your changes. Press the 'enter' key to confirm the changes, or click outside the text field to cancel the operation.",
					},
					{
						title: "Deleting todos",
						content:
							"There are three ways to delete todos. The first one is by double clicking the todo on the list. The second, by clicking on the 'trash can' icon on the top right of the 'todos' card. This action shall remove all the todos marked as 'done' from the current selected todo list. To erase all todos from a list, first click on the button with the 'check' icon on it to select all the todos from the current displayed list. Then, click on the button with the 'trash can' icon to delete them. Notice that all these actions can be done on the 'All Todos' category, so make sure to check the selected category on the list before performing the second and third actions described.",
					},
					{
						title: "Wrapping up + contact",
						content:
							"Remember you can always come back to this page by clicking on the '?' button on the top right of the screen. For further information, feel free to contact me (Ghabriel Mielli) through my e-mail: 'ghabrielmielli@hotmail.com'. Enjoy the app!",
					},
				],
			};
		},
		watch: {
			open: function(value) {
				this.isOpen = value;
			},
		},
	};
</script>

<style scoped>
	* {
		text-transform: none !important;
	}
</style>
