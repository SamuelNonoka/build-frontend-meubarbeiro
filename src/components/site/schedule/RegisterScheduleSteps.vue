<template>
  <v-stepper-header>
    <v-stepper-step :complete="step > 1" step="1">
      Escolha os serviços
    </v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step :complete="step > 2" step="2">
      Escolha o barbeiro
    </v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step :complete="step > 3" step="3">
      Escolha o horário
    </v-stepper-step>

    <v-divider></v-divider>

    <v-stepper-step :complete="step > 4" step="4">
      Finalizar
    </v-stepper-step>
  </v-stepper-header>
</template>

<script>
export default {
  name: 'RegisterScheduleSteps',
  props: {
    step: { default: 1 }
  }
}
</script>