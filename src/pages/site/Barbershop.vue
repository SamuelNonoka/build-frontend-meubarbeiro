<template>
	<div class="barbershop-detail">
		<div class="barbershop-page">
			<div class="barbershop-page-background">
				<img
					v-if="backgroundImageUrl"
					:src="backgroundImageUrl"
					class="absolute-centering barbershop-page-background-image"
				/>
			</div>
			<div class="app-border-radius-small barbershop-page-main-image-content elevation-1">
				<img
					:src="mainImageUrl"
					class="absolute-centering barbershop-page-main-image"
				/>
			</div>
			<v-row class="container mx-auto mt-8">
				<v-col cols="12">
					<service
						:id="id"
						@onServiceChoosed="onServiceChoosed" 
					/>
				</v-col>
			</v-row>
			<v-row class="container mx-auto pb-8">
				<v-col cols="12" sm="12" md="6">
					<div class="barbershop-page-schedules primary">
						<table class="barbershop-page-table elevation-1 app-border-radius-small">
							<thead>
								<tr class="text-center">
									<th class="pa-2">Dia</th>
									<th class="pa-2">Horários</th>
								</tr>
							</thead>
							<tbody>
								<tr
									:key="index"
									v-for='(schedule, index) in schedules'
									class="text-center"
									:class="{ primaryDark: schedule.isToday }"
								>
									<td class="pa-2">{{ schedule.day }}</td>
									<td class="pa-2">
										<span v-if="schedule.open">
											{{ schedule.start }} - {{ schedule.end }}
										</span>
										<span v-else>-</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</v-col>
				<v-spacer></v-spacer>
				<v-col cols="12" sm="12" md="5">
					<card dark class="mb-4">
						<div 
							v-if="barbershopObj"
							class="mb-2"
						>
							<span class="font-weight-bold">Telefone:</span> {{ setPhoneMask(barbershopObj.phone_number) }}
						</div>
						<span class="font-weight-bold">
							Endereço:
						</span>

						<p class="mt-1 mb-0">
							{{ address }}
						</p>
					</card>

					<div
						v-if="mapUrl"
						class="elevation-1 app-border-radius-small barbershop-page-address-map"
					>
						<iframe
							:src="mapUrl"
							frameborder="0" 
							allowfullscreen aria-hidden="false"
							tabindex="0"
						></iframe>
					</div>
				</v-col>
			</v-row>
		</div>
		<!-- Modal de Agendamento -->
		<create-schedule-dialog
			ref="createScheduleDialog" 
			:barbershopId="id"
			:userId="userId"
		/>
		<!-- FAB -->
		<fab
			text="Agendar Horário"
			@clicked="showScheduleDialog"
		/>
	</div>
</template>
<script>
import Card from '@/components/globais/Card'
import CreateScheduleDialog from '@/components/site/schedule/RegisterSchedule'
import Fab from '@/components/globais/Fab'
import Service from '@/components/site/service/Service'

import BarbershopMixin from '@/mixins/BarbershopMixin'
import LoaderMixin from '@/mixins/LoaderMixin'
import SnackbarMixin from '@/mixins/SnackbarMixin'
import TextMixin from '@/mixins/TextMixin'
import TimeMixin from '@/mixins/TimeMixin'
import UserMixin from '@/mixins/UserMixin'

export default {
	name: 'Barbershop',
	components: { Card, CreateScheduleDialog, Fab, Service },
	mixins: [ BarbershopMixin, LoaderMixin, SnackbarMixin, TextMixin, TimeMixin, UserMixin ],
	data: () => ({
		id: null,
		barbershopObj: null
	}),
	computed: {
		userId () {
			return this.getUser() ? this.getUser().id : null 
		},
		address () {
			if (!this.barbershopObj) return ''
			let address = this.barbershopObj.address
			let text = address.public_place
			if (address.number) text += ', ' + address.number
			text += '\n' + address.neighborhood + ' - ' + address.city + '/' + address.uf
			return text
		},
		backgroundImageUrl () {
			if (!this.barbershopObj || !this.barbershopObj.background_url) return null
			return this.$url_backend + this.barbershopObj.background_url
		},
		mainImageUrl () {
			if (!this.barbershopObj || !this.barbershopObj.image_url) return null
			return this.$url_backend + this.barbershopObj.image_url
		},
		mapUrl () {
			if (!this.barbershopObj) return null
			else if (!this.barbershopObj.address.map_url) return null
			let map = this.barbershopObj.address.map_url.match(/src="\w+.+?"/g).toString()
			return map.replace('src="', '').replace('"', '') 
		},
		schedules () {
			let schedules = [
				{ id: 1, day: 'Segunda', start: '', end: '', open: false, isToday: false },
				{ id: 2, day: 'Terça', start: '', end: '', open: false, isToday: false },
				{ id: 3, day: 'Quarta', start: '', end: '', open: false, isToday: false },
				{ id: 4, day: 'Quinta', start: '', end: '', open: false, isToday: false },
				{ id: 5, day: 'Sexta', start: '', end: '', open: false, isToday: false },
				{ id: 6, day: 'Sábado', start: '', end: '', open: false, isToday: false },
				{ id: 7, day: 'Domingo', start: '', end: '', open: false, isToday: false }
			]

			let today = new Date().getDay()
			let i = schedules.findIndex(i => i.id == today)
			schedules[i].isToday = true

			if (this.barbershopObj) {
				this.barbershopObj.schedule_days.forEach(i => {
					let index = schedules.findIndex(s => s.id == i.schedule_day_id)
					schedules[index].open = i.open
					schedules[index].start = this.formatResponseToTime(i.start)
					schedules[index].end = this.formatResponseToTime(i.end)
				})
			}

			return schedules
		},
		title () {
			return this.barbershopObj ? this.barbershopObj.name : null
		}
	},
	mounted () {
		this.showLoader()
		this.id = this.$route.params.id
		this.getBarbershopByIdOnService(this.id)
	},
	methods: {
		onGetBarbershopByIdOnServiceSuccess (response) {
			this.barbershopObj = response
			this.$route.meta.pageTitle = this.barbershopObj.name
			this.hideLoader()
    },
    onGetBarbershopByIdOnServiceError (error) {
			this.showSnackbarErro(error)
			this.hideLoader()
		},
		onServiceChoosed (service) {
			this.showScheduleDialog(service.id)
		},
		showScheduleDialog (serviceId = null) {
			if (this.isUserAutenticated()) this.$refs.createScheduleDialog.showDialog(serviceId)
			else { 
				localStorage.routePathSite = window.location.pathname
				this.goTo('login') 
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'src/scss/theme.scss';

.barbershop-page {
  .barbershop-page-background {
    width: 100%;
    position: relative;
    height: 250px;
    overflow: hidden;
    border-bottom: 4px solid $primaryDark;
    background-color: $primaryDark;
    .barbershop-page-background-image { min-width: 100%; min-height: 100%; height: auto; width: auto; }
  }
  .barbershop-page-main-image-content {
    display: block;
    width: 300px;
    height: 225px;
    position: relative;
    margin: -150px auto 0;
    @include box-shadown-mixin(1);
    border: 2px solid $primaryDark;
    background-color: #fff;
    &:before {
      content: "";
      border: 4px solid #fff;
      width: 298px;
      height: 223px;
      position: absolute;
      top: 0;
      z-index: 1;
      @include border-radius-mixin(5px);
    }
    .barbershop-page-main-image { min-width: 100%; width: auto; height: auto; }
  }
  .barbershop-page-items-title { color: #fff; font-size: 22px; }
  .barbershop-page-address { color: #fff;
    .barbershop-page-address-text { font-size: 14px; }
  }
  .barbershop-page-address-map { width: 100%; position: relative; padding-top: 100%;
    iframe { position: absolute; width: 100%; height: 100%; top: 0; }
  }
  .barbershop-page-table { color: #fff; border-spacing: 0; width: 100%; max-width: 100%;
    tr { width: 100%;
      &.primaryDark {
        td { color: $secondary; }
      }
    }
    thead th { background-color: $secondary; color: $primaryDark; border-bottom: 2px solid $primaryDark; }
    tbody {
      td { border-bottom: 1px solid $primaryDark; }
    }
  }
}

@media all and (max-width: 959px) {
  .barbershop-page {
    .barbershop-page-background { height: 200px; }
    .barbershop-page-main-image-content { width: 265px; height: 200px; }
    .barbershop-page-address-map { padding-top: 60%; }
  }
}

@media all and (max-width: 599px) {
  .barbershop-page {
    .barbershop-page-background { height: 150px; }
    .barbershop-page-main-image-content { width: 200px; height: 150px; margin-top: -90px; }
    .barbershop-page-address-map { padding-top: 100%; }
  }
}
</style>
