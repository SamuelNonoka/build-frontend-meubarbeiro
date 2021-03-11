const ValidationMixin = {
  data: () => ({
    nameRules: [
      v => !!v || 'Informe o nome',
      v => !v || v.length <= 50 || 'O nome deve ter no máximo 50 dígitos'
    ],
    emailRules: [
      v => !!v || 'Informe o e-mail',
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Informe um e-mail válido'
    ],
    passwordRules: [
      v => !!v || 'Informe a senha',
      v => !v || v.length >= 6 || 'A senha precisa ter pelo meno 6 dígitos',
      v => !v || v.length <= 10 || 'A senha deve ter no máximp 10 dígitos'
    ]
  }),
  methods: {
    isEmailValid (email) {
      if (!email) return false
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(email) ? true : false
    },
    isPasswordValid (password) {
      if (!password) return false
      if (password.length < 6 || password.length > 10) return false
      return true
    },
    isNameValid (name) {
      if (!name || name.length > 50) return false
      return true
    }
  }
}

export default ValidationMixin