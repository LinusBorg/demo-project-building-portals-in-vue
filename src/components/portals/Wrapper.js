import Vue from 'vue'
export default Vue.extend({
	props: {
		content: Array,
	},
	data: () => ({
		newContent: null,
	}),
	computed: {
		dynamicContent() {
			if (typeof this.newContent === 'undefined') return null

			return this.newContent || this.content
		},
	},
	render(h) {
		return h('div', this.dynamicContent)
	},
})
