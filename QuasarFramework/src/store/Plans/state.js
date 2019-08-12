import { LocalStorage } from 'quasar'

export default {
  list: LocalStorage.getItem('plansList') || []
}
