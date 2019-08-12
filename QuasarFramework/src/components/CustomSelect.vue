<template>
  <div>
    <q-select
      v-bind="_config.input"
      v-model="localValue"
      use-input
      input-debounce="0"
      ref="input"
      :options="localOptions"
      :label="label"
      :rules="rules"
      @filter="filterFn"
    >
      <template v-slot:no-option>
        <q-item>
          <q-item-section class="text-grey">
            {{ $t('noResults') }}
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    value: [Number, String, Object],
    options: Array,
    rules: Array
  },
  created () {
    this.localOptions = this.options
  },
  data: () => ({
    localOptions: []
  }),
  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.localOptions = this.options
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.localOptions = this.options.filter(v => {
          const { value } = v
          return value ? (value.toString().toLowerCase().indexOf(needle) > -1) : (v.toLowerCase().indexOf(needle) > -1)
        })
      })
    }
  }
}
</script>
