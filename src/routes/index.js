import Vue from 'vue'
import Router from 'vue-router'
import AdminRoutes from './admin'
import AuthRoutes from './auth'
import SiteRoutes from './site'
const NotFound = () => import('@/components/site/NotFound')

const routes = [
	{ path: '*', component: NotFound }
]

Vue.use(Router)

const router = new Router({
	mode: 'history',
  routes: [].concat(SiteRoutes, AuthRoutes, AdminRoutes, routes)
})

router.beforeEach((to, from, next) => {
	let tokenValidado = false

	if (to.meta.requiresAuth) {
		let token = to.meta.isAdmin ? localStorage.token : localStorage.userToken
		if (token) {
			let partesToken = token.split('.')

			if (partesToken.length === 3) {
				try {
					let payloadToken = JSON.parse(atob(partesToken[1]))
					let date = Math.floor(Date.now() / 1000)
					let expDate = Math.floor(new Date (payloadToken.data_expiracao) / 1000)
					if (expDate > date) tokenValidado = true
				} catch (err) { tokenValidado = false }
			}
		}
	} else tokenValidado = true

	if (tokenValidado) next()
	else {
		if (to.meta.isAdmin) {
			localStorage.routePathAdmin = to.path
			window.location = `${window.location.origin}/autenticacao/barbeiro/login`
		}
		else {
			localStorage.routePathSite = to.path
			window.location = `${window.location.origin}/autenticacao/login`
		}
	}
})

export default router
