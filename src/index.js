import defaultDict from '../config/default.json'
export default class IlliterateEditor {
  constructor ($el, dict = defaultDict) {
    this.$el = $el
    this.dict = dict
    this.flag = true
    this.onCompositionstart = this.onCompositionstart.bind(this)
    this.onCompositionend = this.onCompositionend.bind(this)
    this.onInput = this.onInput.bind(this)
    this.replace = this.replace.bind(this)
    this.dispose = this.dispose.bind(this)
    this.init = this.init.bind(this)
    // auto init
    this.init()
  }
  onCompositionstart () {
    this.flag = false
  }
  onCompositionend () {
    this.flag = true
    this.replace()
  }
  onInput () {
    this.flag && this.replace()
  }
  replace () {
    const {$el, dict} = this
    let value = $el.value
    for (const key in dict) {
      const newer = dict[key]
      const elder = key
      value = value.replace(new RegExp(elder, 'g'), newer)
    }
    $el.value = value
  }
  init () {
    const {$el, onInput, onCompositionstart, onCompositionend} = this
    $el.addEventListener('compositionstart', onCompositionstart)
    $el.addEventListener('compositionend', onCompositionend)
    $el.addEventListener('input', onInput)
  }
  dispose () {
    const {$el, onInput, onCompositionstart, onCompositionend} = this
    $el.removeEventListener('compositionstart', onCompositionstart)
    $el.removeEventListener('compositionend', onCompositionend)
    $el.removeEventListener('input', onInput)
  }
}