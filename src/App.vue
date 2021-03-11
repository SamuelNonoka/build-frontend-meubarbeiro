<template>
  <v-app>
    <snackbar />
    <router-view></router-view>
    <div id="app-prompt" class="app-prompt white elevation-1">
      <div class="container">
        <div class="prompt-container">
          <div>
            <img src="/icone-180x180.png" width="80" class="elevation-2 btnIcon" />
          </div>
          <div class="ml-4 py-0 content-prompt">
            <strong>Meu Barbeiro</strong>
            <small class="d-block">
              Deseja instalar o <b>Meu Barbeiro</b> na home do seu dispositivo?
            </small>
            <v-btn id="app-prompt-btn" class="btnAddIcon py-3 px-6" height="auto" dark>
              Instalar
            </v-btn>
          </div>
          <div @click="removerBanner">
            <v-btn text class="px-0 btn-close">
              <v-icon>close</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import Snackbar from '@/components/globais/snackbar/Snackbar'

export default {
  name: 'App',
  components: { Snackbar },
  data: () => ({
    deferredPrompt: null
  }),
  created () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js', { scope: '/' })
    }
  },
  mounted () {
    if ('serviceWorker' in navigator && !localStorage.recuseInstallApp) {
      let deferredPrompt
      let prompt = window.document.querySelector('#app-prompt')
      let btnInstallIcon = window.document.querySelector('#app-prompt-btn')
      
      window.addEventListener('beforeinstallprompt', function (e) {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault()
        // Stash the event so it can be triggered later.
        deferredPrompt = e
        // Update UI notify the user they can install the PWA
        setTimeout(() => {
          prompt.classList.add('active')
        }, 3000)
      })

      btnInstallIcon.addEventListener('click', function () {
        // Hide the app provided install promotion
        prompt.classList.remove('active')
        // Show the install prompt
        deferredPrompt.prompt()
      })
    }
  },
  methods: {
    removerBanner () {
      let btnInstallIcon = window.document.querySelector('#app-prompt')
      btnInstallIcon.classList.remove('active')
      localStorage.recuseInstallApp = true
    }
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Montserrat', sans-serif;
}

/* Change the white to any color ;) */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 

.app-prompt {
  font-size: 1.5rem;
  position: fixed;
  bottom: -300px;
  width: 100%;
  padding: 15px 0;
  transition: 1s all;
  &.active {
    z-index: 4;
    bottom: 0;
    transition: 1s all;
  }
	.btnIcon { cursor: pointer; margin-top: 12px; }
  .btnAddIcon { margin-top: 15px; }
	small { font-size: 1rem; }
}
.prompt-container { display: flex; 
  div { width: auto; }
}
.content-prompt { min-width: calc(100% - 160px); padding-left: 16px; }

@media all and (max-width: 599px) {
  .app-prompt { bottom: -230px; }
  .content-prompt { padding-left: 8; min-width: 0; width: calc(100% - 138px); }
  .btnIcon { width: 72px; }
  .btn-close { min-width: 32px !important; }
}
</style>
