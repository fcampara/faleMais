// import something here

// "async" is optional
export default async ({ Vue }) => {
  Vue.mixin({
    computed: {
      _config: () => ({
        input: {
          outlined: true,
          dense: true,
          class: 'q-pa-xs primary'
        }
      })
    }
  })
  // something to do
}
