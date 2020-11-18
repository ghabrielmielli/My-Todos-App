<template>
	<v-tooltip bottom open-delay="800">
		<template v-slot:activator="{ on, attrs }">
			<v-btn small depressed :disabled="disabled" color="primary" v-bind="attrs" v-on="on" @click="$emit('pressed')">
				<v-icon>{{ icon }}</v-icon>
			</v-btn>
		</template>
		{{ tooltip }}
	</v-tooltip>
</template>

<script>
	export default {
		props: ["disabled", "icon", "tooltip"],
	};
</script>

<style></style>>
