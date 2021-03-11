<template>
  <div
    class="dashboard-painel-item"
    :class="'painel-' + color"  
  >
    <h1 class="title">
      {{ title }}
    </h1>
    <p class="text">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'DashboardPainelItem',
  props: {
    title: { required: true },
    text: { required: true },
    color: { default: '' }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/theme.scss';
.dashboard-painel-item {
  display: flex;
  padding: 0 15px;
  height: 120px;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1.title { font-size: 2.5rem !important; font-weight: 500; margin: 0; color: #fff; }
p.text { margin: 15px 0 0; color: #fff; font-size: 1rem; text-align: center; }
.painel-sucess { background: $success; }
.painel-alert { background: $secondaryDark; }
.painel-primary { background: $primaryLight; }
</style>