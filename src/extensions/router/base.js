import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import HomePage from './../../components/pages/HomePage';

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomePage,
		}
	]
});