import Vue from 'vue'
import Vuetify from 'vuetify/lib'
//import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: 'mdi',
  theme: {
    themes: {
      light: {
        primary: '#212121', //'#3e2723',
        primaryDark: '#000000', //'#1b0000',
        primaryLight: '#484848', //'#6a4f4b',
        secondary: '#ffc107',
        secondaryDark: '#c79100',
        secondaryLight: '#fff350',
        accent: '#DCB975',
        muted: '#e6e1d8',
        background: '#E1E2E1',
        danger: '#B71C1C',
        success: '#6CD4CA'
      }
    }
  },
  lang: {
    current: 'pt'
  }
})

// src/plugins/vuetify.js

/*import Vue from 'vue'
import Vuetify from 'vuetify'
// import Vuetify from 'src/plugins/vuetify.js'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.brown, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.amber.accent4, // #3F51B5
        muted: colors.grey.lighten3
      },
    },
  },
}

export default new Vuetify(opts)
*/