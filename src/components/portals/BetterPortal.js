import Vue from 'vue'
import Wrapper from './Wrapper'

export default Vue.extend({
	props: {
		to: String,
	},
	render(h) {
		return h()
	},
	mounted() {
		this.mount()
	},
	updated() {
		this.update()
	},
	beforeDestroy() {
		this.cleanup()
	},
	methods: {
		mount() {
			const mountEl = document.createElement('div')
			document.querySelector(this.to).append(mountEl)
			const content = this.$slots.default
			this.target = new Wrapper({
				el: mountEl,
				propsData: {
					content,
				},
			})
		},
		update() {
			this.target.newContent = this.$slots.default
		},
		cleanup() {
			const { target } = this
			// destroy the compponent
			target.$destroy()
			// remove DOM nodes for garbage collection
			const el = target.$el
			el && el.parentNode.removeChild(el)
		},
	},
})
