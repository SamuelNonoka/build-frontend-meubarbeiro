<template>
	<header
		id="header-site"
		class="primaryDark"
	>
		<v-container class="container py-0">
			<v-row>
				<v-col class="py-0 pr-0">
					<h1 class="header-site-titulo font-weight-regular">
					<v-btn 
						v-if="menuButton"
						text
						@click="openMenu()"
						class="px-0"
					>
						<v-icon>
							menu
						</v-icon>
					</v-btn>
					<v-btn 
						v-if="backButton"
						text
						@click="goToBackLocal()"
						class="px-0"
					>
						<v-icon>
							arrow_back_ios
						</v-icon>
					</v-btn>
					<img 
						v-else
						class="icone"
						src="/icone-180x180.png"
					/>
					<span>{{ title }}</span>
					</h1>
				</v-col>
				<v-col class="py-0 px-0 text-right" cols="auto">
					<v-menu 
						v-if="isUserAutenticated()"
						right
						offset-y
					>
						<template v-slot:activator="{ on, attrs }">
							<span class="mt-2 d-none d-md-inline">
									Olá, {{ name }}
								</span>

							<v-btn
								dark
								v-bind="attrs"
								v-on="on"
								text
							>
								<v-icon class="d-none d-md-inline">
									account_circle
								</v-icon>

								<v-icon class="d-inline d-md-none">
									more_vert
								</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								v-for="(item, index) in menuItems"
								:key="index"
								@click="menuClicked(item.action)"
							>
								<v-list-item-title>
									{{ item.title }}
								</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>

					<v-btn
						v-else
						text
						dark
						@click="goTo('login')"
						class="px-0"
					>
						<v-icon>
							account_circle
						</v-icon>
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
		<change-password-dialog ref="changePasswordDialog" />
		<profile-dialog ref="profileDialog" />
	</header>
</template>

<script>
const ChangePasswordDialog = () => import('@/components/site/ChangePassword')
const ProfileDialog = () => import('@/components/site/profile/Profile')
import NavigationMixin from '@/mixins/NavigationMixin'
import UserMixin from '@/mixins/UserMixin'

export default {
	name: 'Header',
	components: { ChangePasswordDialog, ProfileDialog },
	mixins: [ NavigationMixin, UserMixin ],
	props: {
		title: { default: 'Meu Barbeiro' },
		backButton: { default: false },
		backButtonRouteName: { default: null },
		menuButton: { default: false }
	},
	data: () => ({
		menuItems: [
			{ title: 'Meu Perfil', action: 'site-profile' },
			{ title: 'Alterar Senha', action: 'site-change-password' },
			{ title: 'Sair', action: 'logout' }
		]
	}),
	computed: {
		name () {
			return this.user ? this.user.name : ''
		}
	},
	methods: {
		goToBackLocal () {
			if (this.backButtonRouteName) this.goTo(this.backButtonRouteName)
			else this.goToBack()
		},
		menuClicked (action) {
			if (action === 'logout') this.logoutUser()
			else if (action === 'site-change-password') this.$refs.changePasswordDialog.showDialog()
			else if (action === 'site-profile') this.$refs.profileDialog.showDialog()
		},
		openMenu () {
			this.$emit('navigationDrawerClicked')
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

#header-site {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 2;
	height: 50px;
	line-height: 50px;
	color: #fff;
	$box_shadow:  1px 0px 5px 0px rgba(0,0,0,0.3);
	@include box-shadown-completo-mixin ($box_shadow);

	.header-site-titulo {
		font-size: 24px;
		color: #fff;
		display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
		
		> span {
			@include text-ellipsis (1, 24px);
			width: calc(100% - 64px);
			display: -webkit-box;
			margin-top: 4px;
			float: left;
			word-break: break-all;
			align-items: unset;
		}

		button { float: left; }
		i { color: #fff; }
	}

	.btnHeader { color: #fff; margin-bottom: 5px; }
}
.icone { margin-right: 12px; height: 40px; }
</style>