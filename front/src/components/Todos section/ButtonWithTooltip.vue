<template>
	<v-tooltip bottom open-delay="800">
		<template v-slot:activator="{ on, attrs }">
			<v-btn small dark depressed :disabled="disabled" color="indigo lighten-1" v-bind="attrs" v-on="on" @click="$emit('pressed')">
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
