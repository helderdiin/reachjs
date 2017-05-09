import artigos from '../components/blog/artigos.vue'

import javascriptEAMelhorLinguagem from '../components/blog/noticias/mais_lidas/javascript-e-a-melhor-linguagem.vue'
import surfaceLaptopOuMacbook from '../components/blog/noticias/mais_lidas/surface-laptop-ou-macbook.vue'
import seusAplicativosEstaoTeMonitorando from '../components/blog/noticias/mais_lidas/seus-aplicativos-estao-te-monitorando.vue'

import cincoTecnologiasParaFicarDeOlho from '../components/blog/noticias/mais_recentes/cinco-tecnologias-para-ficar-de-olho.vue'
import appleTvOuGoogleChromecast from '../components/blog/noticias/mais_recentes/apple-tv-ou-google-chromecast.vue'

import descubraTodasAsInformacoesQueANetflixSabeSobreVoce from '../components/blog/noticias/em_alta/descubra-todas-as-informacoes-que-a-netflix-sabe-sobre-voce.vue'

import blog from '../components/blog/blog.vue'

export default {
  path: '/blog',
  component: blog,
  children: [{
    path: 'artigos',
    component: artigos
  }, {
    path: 'noticias/mais_lidas/javascript-e-a-melhor-linguagem',
    component: javascriptEAMelhorLinguagem
  }, {
    path: 'noticias/mais_lidas/surface-laptop-ou-macbook',
    component: surfaceLaptopOuMacbook
  }, {
    path: 'noticias/mais_lidas/seus-aplicativos-estao-te-monitorando',
    component: seusAplicativosEstaoTeMonitorando
  }, {
    path: 'noticias/mais_recentes/cinco-tecnologias-para-ficar-de-olho',
    component: cincoTecnologiasParaFicarDeOlho
  }, {
    path: 'noticias/mais_recentes/apple-tv-ou-google-chromecast',
    component: appleTvOuGoogleChromecast
  }, {
    path: 'noticias/em_alta/descubra-todas-as-informacoes-que-a-netflix-sabe-sobre-voce',
    component: descubraTodasAsInformacoesQueANetflixSabeSobreVoce
  }]
}
