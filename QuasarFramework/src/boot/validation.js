
export default async ({ Vue }) => {
  Vue.mixin({
    methods: {
      _resetValidation: (data) => {
        for (let key in data) {
          let ref = data[key]
          if (ref) {
            if (typeof ref.hasError === 'undefined') {
              ref = ref.$refs.input
            }
            if (!ref.rules) return console.error(`You can't pass a ref to validate with out rules - ${ref.label}`)
            ref.resetValidation()
          }
        }
      },
      _isValidForm: (data) => {
        let firstInvalidRef = null
        for (let key in data) {
          let ref = data[key]
          if (ref) {
            if (typeof ref.hasError === 'undefined') {
              ref = ref.$refs.input
            }

            if (!ref.rules) return console.error(`You can't pass a ref to validate with out rules`)
            const isValid = !ref.validate()
            if (firstInvalidRef === null && isValid) firstInvalidRef = ref
          }
        }
        if (firstInvalidRef) firstInvalidRef.focus()
        for (let key in data) {
          let ref = data[key]
          if (ref) {
            if (typeof ref.hasError === 'undefined') {
              ref = ref.$refs.input
            }

            if (ref.hasError) {
              return false
            }
          }
        }
        return true
      },
      _getRules: () => ({
        _isRequired: [val => !!val || 'Field is Required']
      }),
      log (data) {
        console.log(data)
      }
    }
  })
}
