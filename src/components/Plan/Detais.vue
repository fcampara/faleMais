<template>
  <div class="row col-12 q-mt-md justify-center align-center">
    <span class="text-h3 text-center col-6"> {{ $t('withPlan') }} </span>
    <span class="text-h3 text-center col-6"> {{ $t('withoutPlan') }} </span>
    <span class="text-h4 text-center col-6"> {{ withPlan }} </span>
    <span class="text-h4 text-center col-6"> {{ withoutPlan }} </span>
  </div>
</template>
<script>
import { getPrice } from './calculation'
export default {
  props: {
    form: Object
  },
  data: () => ({
    withPlan: '$ 0,00',
    withoutPlan: '$ 0,00'
  }),
  watch: {
    form: {
      deep: true,
      handler (newValue) {
        const { withPlan, withoutPlan } = getPrice(newValue)
        this.withPlan = withPlan
        this.withoutPlan = withoutPlan
      }
    }
  }
}
</script>
