<template>
  <q-input v-bind="_config.input" v-model="localValue" ref="input" :label="label" type="number" :rules="rules" >
    <template v-if="append" v-slot:append>
      {{ append }}
    </template>
  </q-input>
</template>
<script>
export default {
  props: {
    value: [Number, String],
    label: String,
    append: String,
    integer: Boolean,
    rules: Array
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
