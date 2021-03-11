<style lang='scss'>@import 'src/components/globais/paginacao/Paginacao.scss';</style>

<template>
    <ul class="paginacao uk-pagination uk-flex-center">
        <li v-if="exibirPrimeiraPagina">
            <a @click='alterarPagina(1)'>
                1
            </a>
        </li>

        <li v-if="exibirPrimeiraPagina" class="uk-disabled">
            <span>...</span>
        </li>

        <li v-for='pagina in paginas' 
            :key='pagina'
            :class='setPaginaAtual(pagina)'
            v-show='exibirPagina(pagina)'>
            <a @click='alterarPagina(pagina)'>
                <span>
                    {{ pagina }}
                </span>
            </a>
        </li>

        <li v-if="exibirUltimaPagina" class="uk-disabled">
            <span>...</span>
        </li>

        <li v-if="exibirUltimaPagina">
            <a @click='alterarPagina(paginas)'>
                {{ paginas }}
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Paginacao',
    props: {
        paginas: {
            type: Number,
            default: 0
        },
        qtdPaginas: {
            type: Number,
            default: 5
        },
        paginaAtual: {
            type: Number,
            default: 1
        }
    },
    data () {
        return {
            exibirPrimeiraPagina: true,
            exibirUltimaPagina: true,
            paginaAtualData: 1     
        }
    },
    created () {
        this.paginaAtualData = this.paginaAtual
    },
    methods: {
        setPaginaAtual (pagina) {
            return (pagina === this.paginaAtualData) ? 'paginacao-item-ativo' : ''
        },
        alterarPagina (pagina) {
            this.paginaAtualData = pagina
        },
        exibirPagina (pagina) {
            let corte = (this.qtdPaginas % 2 === 0) ? 1 : 0
            let fator = (this.qtdPaginas - corte) / 2
            this.exibirPrimeiraPagina = (this.paginaAtualData > fator) ? true : false
            this.exibirUltimaPagina = (this.paginaAtualData >= (this.paginas - fator)) ? false : true

            if (pagina >= 1 && pagina <= this.paginas) {
                if (pagina >= this.paginaAtualData - fator && pagina <= this.paginaAtualData + fator) {
                    return true
                }
            }
            return false
        }
    }
}
</script>