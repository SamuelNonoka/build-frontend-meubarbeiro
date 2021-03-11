<template>
	<div class="schedule-group-barbers">
		<div
			:key="schedule.id"
			v-for="schedule in schedules"
			class="schedule-group-barber-item"
		>
			<div class="schedule-group-barber-item-image app-border-rounded">
				<img
					v-if="schedule.image_url"
					:src="getImage(schedule.image_url)"
					class="absolute-centering"
				/>
			</div>
				
			<div class="schedule-group-barber-item-info">
				<h2>
					{{ schedule.name }}
				</h2>
				<p>
					{{ schedule.schedules.length }} cliente(s) 
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import BarberMixin from '@/mixins/BarberMixin'
export default {
	name: 'Barbers',
	mixins: [ BarberMixin ],
	props: {
		schedules: { default: [] }
	},
	methods: {
		getImage (url) {
			return this.$url_backend + url
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/scss/theme.scss';

.schedule-group-barbers {
  .schedule-group-barber-item {
		display: flex;
		height: 70px;
		align-items: center;
		border-bottom: 1px solid #ffffff80;
		.schedule-group-barber-item-image {
      width: 50px;
      height: 50px;
      border: 1px solid;
      background-color: $primaryLight;
      position: relative;
      img { width: -webkit-fill-available; height: -webkit-fill-available; }
    }
    .schedule-group-barber-item-info { margin-left: 10px;
      h2 { font-weight: bold; font-size: 14px; margin: 0; color: #fff; }
      p { margin: 0; font-size: 12px; color: $secondary; }
    }
  }
}
</style>