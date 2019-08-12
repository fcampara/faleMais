import codeWithMin from '../../constants/codeWithMin'

export const getPrice = (form) => {
  let withPlan = 0
  let withoutPlan = 0
  const priceTime = getPriceTime(form)
  const { value: planValue = 0 } = form.plan || {}
  withPlan = calcPrice(form.time, priceTime, planValue, true)
  withoutPlan = calcPrice(form.time, priceTime, planValue, false)
  return { withPlan, withoutPlan }
}

export const getPriceTime = (form) => {
  const { priceTime = 0 } = codeWithMin.find(({ to, from }) => form.to === to && form.from === from) || {}
  return priceTime
}

export const calcPrice = (time, priceTime, planValue, withPlan) => {
  let price = time * priceTime
  if (!withPlan) return format(price)
  const timeExceeds = time - planValue
  price = timeExceeds * priceTime
  const result = timeExceeds > 0 ? (price + (price * 0.1)) : 0
  return format(result)
}

export const format = (value) => {
  return `$ ${value.toFixed(2)}`
}
