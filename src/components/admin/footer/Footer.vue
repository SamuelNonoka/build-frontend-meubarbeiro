<template>
  <div>
    <div class="text-center pa-1 footer d-none d-md-block">
      Copyright &#169; {{ new Date(Date.now()).getFullYear() }} | Meu Barbeiro
    </div>

    <v-bottom-navigation
      v-model="bottomNavModel"
      padless
      :inset="false"
      fixed
      grow
      shift
      class="primary d-md-none"
      dark
    >
      <v-btn
        v-for="(item, indice) in items"
        :key="indice"
        :value="item.value"
        @click="goTo(item)"
      >
        <span>{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
// Modules
import './Footer.scss'

export default {
  name: 'Footer',
  props: {
    items: {
      default: Array
    },
    bottomNav: {
      default: ''
    }
  },
  computed: {
    bottomNavModel: {
      set () {},
      get () {
        return this.bottomNav
      }
    }
  },
  methods: {
    goTo (item) {
      this.$emit('clicked', item)
    }
  }
}
</script>