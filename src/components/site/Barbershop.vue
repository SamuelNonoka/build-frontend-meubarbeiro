<template>
  <div>
    <v-row
      v-if="barbershops.length > 0"
      class="barbearias"
    >
      <v-col
        v-for="(barbershop, index) in barbershops"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="py-0"
      >
        <barbershop-item
          class="d-block mt-2 my-sm-4 my-lg-8" 
          :barbershop="barbershop" 
        />
      </v-col>
    </v-row>

    <div 
      v-else
      class="d-flex justify-center align-center barbershop-empty"
    >
      <p>
      Nenhuma barbearia encontrada.
    </p>
    </div>
  </div>
</template>

<script>
import Axios from '@/plugins/axios'

import BarbershopItem from './BarbershopItem'

import LoaderMixin from '@/mixins/LoaderMixin'

export default {
  name: 'Barbershop',
	components: { BarbershopItem },
	mixins: [ LoaderMixin ],
	data: () => ({
		barbershops: []
	}),
	mounted () {
		this.getBarbershop()
  },
  methods: {
    getBarbershop () {
      this.showLoader()
      Axios.get(`/barbershop`)
      .then(response => {
        if (response.data.codigo === 200) this.onGetBarbershopSuccess(response.data.corpo)
        else this.onGetBarbershopError()
      })
      .catch ((err) => {
        this.onGetBarbershopError()
        window.console.error(err)
      })
    },
    onGetBarbershopSuccess (response) {
      this.barbershops = response
      this.hideLoader()
    },
    onGetBarbershopError () {
      this.barbershops = []
      this.hideLoader()
    }
  }
}
</script>

<style lang="scss" scoped>
.barbershop-empty { color: #fff; height: calc(100vh - 114px); }
</style>