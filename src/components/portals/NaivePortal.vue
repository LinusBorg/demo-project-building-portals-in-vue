<template>
  <div>
    <slot/>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
	name: 'NaivePortal',
	props: {
		to: {
			type: String,
			required: true,
		},
	},
	mounted() {
		const el = document.querySelector(this.to)
		if (el) {
			el.append(this.$el)
		}
    },
    beforeDestroy() {
        const el = this.$el
        el.parentNode.removeChild(el)
    }
})
</script>
