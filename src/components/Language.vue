<template>
  <q-select
    v-bind="_config.input"
    v-model="lang"
    bg-color="white"
    :options="langOptions"
    :label="$t('language')"
    emit-value
    style="min-width: 150px"
  />
</template>

<script>
import { i18n } from '../boot/i18n'
export default {
  data: () => ({
    langOptions: [
      { label: 'English (US)', value: 'en-us' },
      { label: 'Português (BR)', value: 'pt-br' }
    ]
  }),
  computed: {
    lang: {
      get () {
        return this.$q.lang.nativeName
      },
      set (lang) {
        import(`quasar/lang/${lang}`).then(lang => {
          this.$q.lang.set(lang.default)
        })
        i18n.locale = lang
        console.log(this.$q.lang.nativeName)
      }
    }
  }
}
</script>
