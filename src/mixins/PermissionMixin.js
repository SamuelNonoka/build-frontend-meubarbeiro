import BarberMixin from '@/mixins/BarberMixin'
import BarbershopMixin from '@/mixins/BarbershopMixin'
const PermissionMixin  = {
  mixins: [ BarberMixin, BarbershopMixin ],
  computed: {
    isAdmin () {
      let barber = this.getBarber()
      if (barber && this.barbershop) {
        if (barber.id === this.barbershop.admin_id) return true
      }
      return false
    }
  }
}

export default PermissionMixin