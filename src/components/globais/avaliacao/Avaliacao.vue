<style lang='scss'>@import 'src/components/globais/avaliacao/Avaliacao.scss';</style>

<template>
    <p class="avaliacao">
        <span uk-icon="icon: star" :class="setEstrelas(1)"></span>
        <span uk-icon="icon: star" :class="setEstrelas(2)"></span>
        <span uk-icon="icon: star" :class="setEstrelas(3)"></span>
        <span uk-icon="icon: star" :class="setEstrelas(4)"></span>
        <span uk-icon="icon: star" :class="setEstrelas(5)"></span>
    </p>
</template>

<script>
export default {
    name: 'Avaliacao',
    props: {
        estrelas: {
            type: Number,
            default: 0
        }
    },
    methods: {
        setEstrelas (qtdEstrelas) {
            return this.estrelas >= qtdEstrelas ? 'estrela-ativa' : ''
        }
    }
}
</script>
