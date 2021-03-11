<template>
	<div class="barbershop-item-box">
		<div class="barbershop-item app-border-radius-small elevation-1">
			<header>
				<img :src="imageUrl" class="absolute-centering" />
				<v-icon
					v-if="false"
					color="secondary"
					class="barbearia-item-header-icone barbearia-item-icone-local"
				>
					place
				</v-icon>
			</header>

			<div class="barbershop-item-content primaryDark pa-4">
				<h1 class="barbershop-item-titulo font-weight-bold">
					{{ barbershop.name }}
				</h1>

				<div class="px-2">
					<hr />
				</div>

				<p class="barbershop-item-endereco ma-0">
					<v-icon class="mb-1 mr-2">place</v-icon>
					{{ barbershop.address.neighborhood }} - {{ barbershop.address.city }}
				</p>

				<p class="barbershop-item-telefone ma-0 mt-2">
					<v-icon class="mb-1 mr-2">phone</v-icon>
					{{ phoneNumber }}
				</p>

				<btn-confirm
					text="Agendar Horário"
					class="mt-8 mx-auto"
					cssClass="text-uppercase"
					icon="event_available"
					:block="true" 
					@clicked="goToDetails()"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import BtnConfirm from '@/components/globais/buttons/confirm/BtnConfirm'

import NavigationMixin from '@/mixins/NavigationMixin'
import TextMixin from '@/mixins/TextMixin'

export default {
	name: 'BarbershopItem',
	components: { BtnConfirm },
	mixins: [ NavigationMixin, TextMixin ],
	props: {
		barbershop: null
	},
	computed: {
		imageUrl () {
			return this.$url_backend + this.barbershop.image_url
		},
		phoneNumber () {
			return this.setPhoneMask(this.barbershop.phone_number)
		}
	},
	methods: {
		goToDetails () {
			let name = this.formatTextToUrl(this.barbershop.name)
			let path = `barbearia/${this.barbershop.id}/${name}`
			this.goToPath(path)
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'src/scss/mixin.scss';
@import 'src/scss/theme.scss';

.barbershop-item-box { position: relative; width: 300px; max-width: 100%; margin: auto; }
.barbershop-item {
	@include box-shadown-mixin(0.5);
	&:hover { @include box-shadown-mixin(5); }
	header { position: relative; height: 200px; width: 100%; overflow: hidden;
		img { width: 100%; height: auto; }
		.barbearia-item-header-icone { position: absolute; z-index: 1;
			&.barbearia-item-icone-local { right: 10px; bottom: -20px;
				* { width: 40px; color: $muted; fill: $primary; }
			}
		}
	}
	.barbershop-item-content { color: #fff; position: relative;
		.barbershop-item-titulo {
			$linhas: 2;
			color: #fff;
			$fontSize: 28px;
			margin: auto;
			@include text-ellipsis ($linhas, $fontSize);
			margin-bottom: 5px;
		}
		.barbershop-item-endereco { $fontSize: 16px;
			i { color: #fff; }
		}
		.barbershop-item-telefone { font-size: 16px;
			i { color: #fff; }
		}
	}
}
@media all and (max-width: 959px) {
	.barbershop-item-box { width: 280px; }
}
</style>