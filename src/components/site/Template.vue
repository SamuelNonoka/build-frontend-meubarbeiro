<template>
	<div>
		<navigation-drawer ref="navigationDrawer" />
		<topo 
			:title="pageTitle"
			:backButton="backButton"
			:backButtonRouteName="backButtonRouteName" 
			:menuButton="menuButton"
			@navigationDrawerClicked="toggleNavigationDrawer()"
		/>
		<main class="site-main">
			<v-container :class="{ 'container--fluid': fluid, 'pa-0': noPadding }">
				<div v-show="!isLoading">
					<slot></slot>
				</div>
			</v-container>
			<v-progress-circular
				v-show="isLoading"
				indeterminate
				size="50"
				color="secondaryDark"
			></v-progress-circular>
		</main>
		<rodape
      class="primaryDark"
      :items="footerItems" 
      :bottomNav="alias"
    />
	</div>
</template>

<script>
import NavigationDrawer from '@/components/site/NavigationDrawer'
import Rodape from '@/components/globais/footer/Footer'
import Topo from '@/components/site/Header'

import LoaderMixin from '@/mixins/LoaderMixin'

export default {
	components: { NavigationDrawer, Rodape, Topo },
	mixins: [ LoaderMixin ],
	props: {
		alias: { default: '' },
		menuButton: { default: false },
	},
	data: () => ({
		backButton: null,
		backButtonRouteName: null,
		fluid: null,
		footerItems: [
      { title: 'Barbearias', icon: 'home', value: 'dashboard', routeName: 'home' },
      { title: 'Agendamentos', icon: 'calendar_today', value: 'schedule', routeName: 'site-schedule' }
		],
		noPadding: null,
		pageTitle: null
	}),
	mounted () {
		this.setPage()
	},
	updated () {
		this.setPage()
	},
	methods: {
		setPage () {
			this.fluid = this.$route.meta.fluid || false
      this.noPadding = this.$route.meta.noPadding || false
      this.backButton = this.$route.meta.backButton || null
      this.backButtonRouteName = this.$route.meta.backButtonRouteName || null
      this.pageTitle = this.$route.meta.pageTitle || 'Meu Barbeiro'
		},
		toggleNavigationDrawer () {
			this.$refs.navigationDrawer.toggleNavigationDrawer()
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.site-main { min-height: 100vh; padding-bottom: 60px; padding-top: 50px; background-color: $primary;
  .v-progress-circular { margin: auto; position: absolute; top: 0; bottom: 0; left: 0; right: 0; }
}
</style>