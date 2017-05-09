import contato from '../components/sobre_nos/contato.vue'
import quemSomos from '../components/sobre_nos/quemSomos.vue'

import sobreNos from '../components/sobre_nos/sobreNos.vue'

export default {
  path: '/sobre_nos',
  component: sobreNos,
  children: [{
    path: 'contato',
    component: contato
  }, {
    path: 'quem-somos',
    component: quemSomos
  }]
}
