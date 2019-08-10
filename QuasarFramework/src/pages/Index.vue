<template>
  <div class="row">
    <div class="col-12 col-md-3">
      <CustomSelect
        v-model="plan"
        :label="$t('plan')"
        :options="plans"
      />
    </div>
    <div class="col-12 col-md-3">
      <CustomSelect
        v-model="from"
        :label="$t('from')"
        :options="numbers"
      />
    </div>
    <div class="col-12 col-md-3">
      <CustomSelect
        v-model="to"
        :label="$t('to')"
        :options="numbers"
      />
    </div>
    <div class="col-12 col-md-2">
      <CustomNumber
        :label="$t('time')"
        v-model="time"
      />
    </div>
    <div class="col-12 col-md-1">
      <q-btn class="full-width q-mt-xs q-mr-xs" color="primary" label="ADD"/>
    </div>
    <div class="row col-12 q-mt-md justify-center align-center">
      <span class="text-h3 text-center col-6"> {{ $t('withPlan') }} </span>
      <span class="text-h3 text-center col-6"> {{ $t('withoutPlan') }} </span>
      <span class="text-h4 text-center col-6"> {{ withPlan }} </span>
      <span class="text-h4 text-center col-6"> {{ withoutPlan }} </span>
    </div>
  </div>
</template>

<style>
</style>

<script>
import codeWithMin from '../constants/codeWithMin'
import numbers from '../constants/numbers'
import plans from '../constants/plans'
export default {
  name: 'PageIndex',
  data: () => ({
    numbers,
    plans,
    plan: null,
    time: null,
    from: null,
    to: null,
    withPlan: '$ 0,00',
    withoutPlan: '$ 0,00'
  }),
  methods: {
    getPriceTime () {
      const { priceTime = 0 } = codeWithMin.find(({ to, from }) => this.to === to && this.from === from) || {}
      return priceTime
    },
    calcPrice (time, priceTime, planValue, withPlan) {
      let price = time * priceTime
      if (!withPlan) return this.format(price)
      const timeExceeds = time - planValue
      price = timeExceeds * priceTime
      const result = timeExceeds > 0 ? (price + (price * 0.1)) : 0
      return this.format(result)
    },
    getPrice () {
      const priceTime = this.getPriceTime()
      const { value: planValue = 0 } = this.plan || {}
      this.withPlan = this.calcPrice(this.time, priceTime, planValue, true)
      this.withoutPlan = this.calcPrice(this.time, priceTime, planValue, false)
    },
    format (value) {
      return `$ ${value.toFixed(2)}`
    }
  },
  watch: {
    plan () {
      this.getPrice()
    },
    time () {
      this.getPrice()
    },
    from () {
      this.getPrice()
    },
    to () {
      this.getPrice()
    }
  }
}
</script>
