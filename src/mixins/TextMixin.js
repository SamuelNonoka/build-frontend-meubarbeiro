const TextMixin = {
  methods: {
    removeMask (text) {
      if (!text) return ''
      return text.match(/\d+/g).join('')
    },
    removeMoneyMask (text) {
      if (!text) return text
      text = text.replace('R$ ', '')
      text = text.split('.').join('')
      text = text.split(',').join('.')
      return text
    },
    setCepMask (cep) {
      if (!cep) return cep
      return cep.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3")
    },
    setPhoneMask (phone) {
      if (!phone) return ''
      return phone.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/g,"($1) $2 $3-$4")
    },
    setMoneyMask (price) {
      if (!price) return price
      price = price.toString()
      price = price.split(' ').join('')
      price = price.split('R$').join('')
      price = price.split('.').join('')
      let priceArr = price.split('').reverse()
      let count = 0
      let newPrice = priceArr.reduce((prevValue, val) => {
        count++
        if (count == 3) prevValue = ',' + prevValue
        else if (count % 3 === 0) prevValue = '.' + prevValue

        return String(val) + String(prevValue) 
      }, '')
      
      return newPrice
    },
    formatTextToUrl (text) {
      if (!text) return text
      text = text.toLowerCase()
      text = text.split(' ').join('-')
      text = this.removeSimbols(text)
      text = this.removeAccents(text)
      return text
    },
    removeAccents (text) {
      if (!text) return text
      text = text.split('á').join('a')
      text = text.split('à').join('a')
      text = text.split('ã').join('a')
      text = text.split('â').join('a')
      text = text.split('é').join('e')
      text = text.split('è').join('e')
      text = text.split('ê').join('e')
      text = text.split('í').join('i')
      text = text.split('ì').join('i')
      text = text.split('î').join('i')
      text = text.split('ó').join('o')
      text = text.split('ò').join('o')
      text = text.split('õ').join('o')
      text = text.split('ô').join('o')
      text = text.split('ú').join('u')
      text = text.split('ù').join('u')
      text = text.split('û').join('u')
      text = text.split('ç').join('c')
      return text
    },
    removeSimbols (text) {
      if (!text) return text
      return text.match(/\d+/g).join('')
    }
  }
}

export default TextMixin
