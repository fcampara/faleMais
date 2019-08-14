<template>
  <div class="row">
    <div class="col-12 q-my-md">
      <PlansForm v-model="form"/>
    </div>
    <div class="col-12 q-my-md">
      <PlansDetails :form="form"/>
    </div>
    <div class="col-12 q-my-md">
      <PlansTable/>
    </div>
  </div>
</template>

<style>
</style>

<script>
import PlansForm from '../components/Plan/Form'
import PlansTable from '../components/Plan/Table'
import PlansDetails from '../components/Plan/Detais'
export default {
  name: 'PageIndex',
  components: { PlansForm, PlansDetails, PlansTable },
  data: () => ({
    form: {}
  })
}
</script>
