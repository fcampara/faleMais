<template>
<div class="row">
  <div class="col-12 col-md-3">
    <CustomSelect
      v-model="form.plan"
      :label="`${$t('plan')} *`"
      :rules="_getRules()._isRequired"
      ref="plan"
      :options="plans"
    />
  </div>
  <div class="col-12 col-md-3">
    <CustomSelect
      v-model="form.from"
      :label="`${$t('from')} *`"
      :rules="_getRules()._isRequired"
      ref="from"
      :options="numbers"
    />
  </div>
  <div class="col-12 col-md-3">
    <CustomSelect
      v-model="form.to"
      :label="`${$t('to')} *`"
      :rules="_getRules()._isRequired"
      ref="to"
      :options="numbers"
    />
  </div>
  <div class="col-12 col-md-2">
    <CustomNumber
      :label="`${$t('time')} *`"
      :rules="_getRules()._isRequired"
      ref="time"
      :append="$t('minutes')"
      v-model="form.time"
    />
  </div>
  <div class="col-12 col-md-1">
    <q-btn class="full-width q-mt-xs q-mr-xs" color="primary" label="ADD" @click="handlerSave"/>
  </div>
</div>
</template>
<script>
import { mapMutations } from 'vuex'
import numbers from '../../constants/numbers'
import plans from '../../constants/plans'
export default {
  data: () => ({
    numbers,
    plans,
    form: {
      plan: null,
      time: null,
      from: null,
      to: null
    }
  }),
  methods: {
    ...mapMutations({
      addPlans: 'plans/addPlans'
    }),
    handlerSave () {
      if (!this._isValidForm(this.$refs)) return false
      this.addPlans(this.form)
    }
  },
  watch: {
    form: {
      deep: true,
      handler () {
        this.$emit('input', this.form)
      }
    }
  }
}
</script>
