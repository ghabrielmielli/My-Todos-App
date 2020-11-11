<template>
	<v-list-item>
		<v-list-item-action>
			<v-checkbox :value="todo.done" v-model="checked" color="secondary"></v-checkbox>
		</v-list-item-action>

		<v-list-item-content>
			<v-list-item-title
				v-if="!isEditing"
				@click="editTodo()"
				@dblclick="delete_todo(todo)"
				:class="{ 'textContent--text': !todo.done, 'text--disabled text-decoration-line-through': todo.done }"
			>
				{{ todo.name }}
			</v-list-item-title>

			<v-list-item-title v-else>
				<v-row dense>
					<v-col cols="6">
						<v-text-field
							dense
							:placeholder="todo.name"
							autofocus
							@blur="$emit('finish-edit')"
							@keyup.enter="
								patch_todo([todo, 'name', todo.name]);
								$emit('finish-edit');
							"
							v-model="todo.name"
						></v-text-field>
					</v-col>
				</v-row>
			</v-list-item-title>
		</v-list-item-content>
	</v-list-item>
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		props: { todo: Object, isEditing: Boolean },
		methods: {
			editTodo() {
				setTimeout(
					function() {
						this.$emit("edit-me");
					}.bind(this),
					200
				);
			},
			...mapActions(["delete_todo", "patch_todo"]),
		},
		computed: {
			checked: {
				get() {
					return this.todo.done;
				},
				set() {
					return this.patch_todo([this.todo, "done", !this.todo.done]);
				},
			},
		},
	};
</script>

<style></style>
