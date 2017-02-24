import dict from '../config/default.json'

export const replace = ($el, dict = dict, reverse) => {
  let value = $el.value
  for (let item of dict) {
    const {right, wrong} = item
    const newer = reverse ? right : wrong
    const elder = reverse ? wrong : right
    value = $el.value = value.replace(new RegExp(elder, 'g'), newer)
  }
}

export default ($el, dict, reverse) => {
  let flag = true

  const onCompositionstart = e => {
     flag = false
  }
  const onCompositionend = e => {
    flag = true
    replace(e.target, dict, reverse)
  }
  const onInput = e => {
    flag && replace(e.target, dict, reverse)
  }

  $el.addEventListener('compositionstart', onCompositionstart)
  $el.addEventListener('compositionend', onCompositionend)
  $el.addEventListener('input', onInput)

  return {
    dispose() {
      $el.removeEventListener('compositionstart', onCompositionstart)
      $el.removeEventListener('compositionend', onCompositionend)
      $el.removeEventListener('input', onInput)
    }
  }
}