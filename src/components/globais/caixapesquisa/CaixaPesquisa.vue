<style lang='scss'>@import 'src/components/globais/caixapesquisa/CaixaPesquisa.scss';</style>

<template>
    <div class='caixa-pesquisa' :class='ativa'>
        <span uk-icon="icon: search" class="icone-pesquisa"></span>
        <input type="text" 
                :placeholder="placeholder" 
                @focus="focus()"
                @focusout="focusout()">
    </div>
</template>

<script>
export default {
    name: 'CaixaPesquisa',
    data () {
        return {
            ativa: '',
            placeholder: 'Encontre uma barbearia próxima à você...'
        }
    },
    methods: {
        focus () {
            this.ativa = 'ativa',
            this.placeholder = 'Digite o nome da cidade ou bairro...'
        },
        focusout () {
            this.ativa = '',
            this.placeholder = 'Encontre uma barbearia próxima à você...'
        }
    }
}
</script>
