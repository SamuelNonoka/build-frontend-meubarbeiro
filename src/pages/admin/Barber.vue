<template>
  <div class="barber pa-0">
    <v-row class="mt-4">
      <v-col cols="auto">
        <btn-secondary
          text="Adicionar"
          icon="add"
          @clicked="addBarber"
        />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <barber-requests />
    <barbers class="mt-4" />
    <register-barber-dialog ref="registerBarberDialog" />
  </div>
</template>

<script>
import Barbers from '@/components/admin/barber/Barbers'
import BtnSecondary from '@/components/globais/buttons/secondary/BtnSecondary'
import RegisterBarberDialog from '@/components/admin/barber/RegisterBarberDialog'
import BarberRequests from '@/components/admin/barber/BarberRequests'
export default {
  name: 'Barber',
  components: { Barbers, BtnSecondary, RegisterBarberDialog, BarberRequests },
  methods: {
    addBarber () {
      this.$refs.registerBarberDialog.showDialog()
    }
  }
}
</script>