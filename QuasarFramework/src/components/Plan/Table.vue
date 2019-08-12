<template>
    <q-table flat dense :data="plansList" :columns="columns" row-key="name"/>
</template>
<script>
import { getPrice } from './calculation'
import { i18n } from '../../boot/i18n'
import { mapState } from 'vuex'
export default {
  data: () => ({
    columns: [
      { name: 'from', label: 'Origem', align: 'left', field: 'from', sortable: true },
      { name: 'Destino', label: 'Destino', align: 'left', field: 'to', sortable: true },
      { name: 'Tempo', label: 'Tempo', field: 'time', sortable: true, format: (val) => `${val} ${i18n.t('minutes')}` },
      { name: 'Plano FaleMais', label: 'Plano FaleMais', field: (row) => row.plan.label },
      { name: 'Com FaleMais', label: 'Com FaleMais', format: (val, form) => getPrice(form).withPlan || '-' },
      { name: 'Sem FaleMais', label: 'Sem FaleMais', format: (val, form) => getPrice(form).withoutPlan || '-' }
    ]
  }),
  computed: {
    ...mapState({
      plansList: state => state.plans.list
    })
  }
}
</script>
