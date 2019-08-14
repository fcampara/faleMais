import { LocalStorage } from 'quasar'

export function addPlans (state, payload) {
  state.list.push(payload)
  LocalStorage.set('plansList', state.list)
}
