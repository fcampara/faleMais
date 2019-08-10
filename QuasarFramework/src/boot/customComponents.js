import CustomSelect from '../components/CustomSelect'
import CustomNumber from '../components/CustomNumber'

export default async ({ Vue }) => {
  Vue.component('CustomSelect', CustomSelect)
  Vue.component('CustomNumber', CustomNumber)
}
