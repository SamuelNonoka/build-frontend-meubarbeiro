<template>
  <div class="whithout-barbershop">
    <img src="/logo_escuro.png" class="logo" />
    <span class="mt-2 text-center">
      Seu usuário ainda não possui uma barbearia vinculada
    </span>
    <div class="btn mt-8">
      <btn
        text="Criar sua barbearia"
        icon="add"
        @clicked="createBarbershop"
      />
    </div>
    <div class="btn mt-4">
      <btn
        text="Encontrar uma barbearia"
        icon="search"
        @clicked="findBarbershop"
      />
    </div>
    <create-barbershop-dialog ref="barbershopDialog" />
    <find-barbershop-dialog ref="findBarbershopDialogRef" />
  </div>
</template>

<script>
import Btn from '@/components/globais/buttons/secondary/BtnSecondary'
import CreateBarbershopDialog from '@/components/admin/barbershop/RegisterBarbershopDialog'
import FindBarbershopDialog from '@/components/admin/barbershop/FindBarbershopDialog'
export default {
  name: 'WithoutBarber',
  components: { Btn, CreateBarbershopDialog, FindBarbershopDialog },
  methods: {
    createBarbershop () {
      this.$refs.barbershopDialog.showDialog()
    },
    findBarbershop () {
      this.$refs.findBarbershopDialogRef.showDialog()
    }
  }
}
</script>

<style lang="scss" scoped>
.logo { width: 250px; }
.whithout-barbershop {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 96px);
  justify-content: center
}
.btn { min-width: 300px; margin: 10px 0; }
span { font-size: 1.2rem; }
</style>