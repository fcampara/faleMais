<template>
  <q-input v-bind="_config.input" v-model="localValue" :label="label" type="number" />
</template>
<script>
export default {
  props: {
    value: [Number, String],
    label: String,
    integer: Boolean
  },
  computed: {
    localValue: {
      get () {
        return this.value && this.value.replace(/\D+/g, '')
      },
      set (newValue) {
        this.$emit('input', newValue && newValue.replace(/\D+/g, ''))
      }
    }
  }
}
</script>
<style>
</style>
