<template>
  <div class="dashboard">
    <template v-if="barber.barbershop_id">
      <dashboard-painel v-if="isAdmin" />
      <div class="container mt-4">
        <schedule-group />
      </div>
    </template>
    <template v-else>
      <without-barber />
    </template>
  </div>
</template>

<script>
import BarberMixin from '@/mixins/BarberMixin'
import DashboardPainel from '@/components/admin/dashboard-painel/DashboardPainel'
import PermissionMixin from '@/mixins/PermissionMixin'
import ScheduleGroup from '@/components/admin/schedules/schedule-group/ScheduleGroup'
import WithoutBarber from '@/components/admin/barber/WithoutBarber'
export default {
  name: 'Dashboard',
  components: { DashboardPainel, ScheduleGroup, WithoutBarber },
  mixins: [ BarberMixin, PermissionMixin ]
}
</script>

<style lang="scss" scoped>
.dashboard { min-height: calc(100vh - 96px); }
</style>