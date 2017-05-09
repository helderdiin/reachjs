import recebidas from '../components/graficos/barra/mensagens_por_usuario/recebidas.vue'
import enviadas from '../components/graficos/barra/mensagens_por_usuario/enviadas.vue'
import arquivadas from '../components/graficos/barra/mensagens_por_usuario/arquivadas.vue'
import excluidas from '../components/graficos/barra/mensagens_por_usuario/excluidas.vue'
import geralMensagensPorUsuario from '../components/graficos/barra/mensagens_por_usuario/geral.vue'

import homens from '../components/graficos/pizza/novos_usuarios/homens.vue'
import mulheres from '../components/graficos/pizza/novos_usuarios/mulheres.vue'
import geralNovosUsuarios from '../components/graficos/pizza/novos_usuarios/geral.vue'

import graficos from '../components/graficos/graficos.vue'

export default {
  path: '/graficos',
  component: graficos,
  children: [{
    path: 'barra/mensagens_por_usuario/recebidas',
    component: recebidas
  }, {
    path: 'barra/mensagens_por_usuario/enviadas',
    component: enviadas
  }, {
    path: 'barra/mensagens_por_usuario/arquivadas',
    component: arquivadas
  }, {
    path: 'barra/mensagens_por_usuario/excluidas',
    component: excluidas
  }, {
    path: 'barra/mensagens_por_usuario/geral',
    component: geralMensagensPorUsuario
  }, {
    path: 'pizza/novos_usuarios/homens',
    component: homens
  }, {
    path: 'pizza/novos_usuarios/mulheres',
    component: mulheres
  }, {
    path: 'pizza/novos_usuarios/geral',
    component: geralNovosUsuarios
  }]
}
