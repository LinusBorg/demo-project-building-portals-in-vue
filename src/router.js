import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Naive from './components/NaivePortal.vue'
import Better from './components/BetterPortalPage.vue'
import VueSimplePortal from './components/VueSimplePortal.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/naive',
			component: Naive,
		},
		{
			path: '/better',
			component: Better,
		},
		{
			path: '/simple',
			component: VueSimplePortal,
		},
	],
})
