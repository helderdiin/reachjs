import reachjs from 'reachjs';
import toastr from 'toastr';

import Vue from 'vue'
import router from './router'
import App from './App.vue'

import './toastrOptions'
import '../node_modules/toastr/build/toastr.min.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

reachjs.setOnSelect((data) => {
  toastr.info(`Você foi redirecionado para página <b>${data.title}</b> :)`, 'Se segure!')
  router.push(data.path)
})

reachjs.init({
  routes: [{
    title: 'Home',
    path: 'home',
    description: 'Página principal do sistema.',
  }, {
    title: 'Quem Somos',
    path: 'sobre_nos/quem-somos',
    description: 'Nós somos o que está nessa pequena descrição aqui.',
  }, {
    title: 'Contato',
    path: 'sobre_nos/contato',
    description: 'Nós temos várias formas de contato e estamos localizados nesse lugar aqui bem bacana :)',
  }, {
    title: 'Artigos',
    path: 'blog/artigos',
    description: 'Página de artigos do sistema.',
  }, {
    title: 'JavaScript é a melhor linguagem?',
    path: 'blog/noticias/mais_lidas/javascript-e-a-melhor-linguagem',
    description: 'Muitas pessoas se perguntam se JavaScript é a melhor linguagem de desenvolvimento da atualidade. Hoje iremos descobrir a resposta.',
  }, {
    title: 'Surface Laptop ou MacBook?',
    path: 'blog/noticias/mais_lidas/surface-laptop-ou-macbook',
    description: 'Em qual devo investir? Qual é mais rápido? Qual é mais bonito? São perguntas comuns quando estamos fazendo uma compra desse nível.',
  }, {
    title: 'Seus aplicativos estão te monitorando!',
    path: 'blog/noticias/mais_lidas/seus-aplicativos-estao-te-monitorando',
    description: 'Você já parou para ler todas as permissões que os aplicativos pedem no momento da instalação? Saiba quais estão deixando seu microfone ligado e ouvindo tudo o que acontece por perto.',
  }, {
    title: '5 tecnologias para ficar de olho',
    path: 'blog/noticias/mais_recentes/cinco-tecnologias-para-ficar-de-olho',
    description: 'Listamos aqui 5 das mais novas tecnologias de desenvolvimento web para você ficar por dentro dessas novidades.',
  }, {
    title: 'Apple TV ou Google ChromeCast?',
    path: 'blog/noticias/mais_recentes/apple-tv-ou-google-chromecast',
    description: 'Ambos tem inúmeras vantagens, mas qual será que é o mais indicado para sua necessidade?',
  }, {
    title: 'Descubra todas as informações que a Netflix sabe sobre você',
    path: 'blog/noticias/em_alta/descubra-todas-as-informacoes-que-a-netflix-sabe-sobre-voce',
    description: 'A Netflix vive te monitorando! Saiba quais informações e por que ela quer saber tanto sobre você.',
  }, {
    title: 'Mensagens recebidas por usuário',
    path: 'graficos/barra/mensagens_por_usuario/recebidas',
    description: 'Representação de mensagens recebidas separadas por usuários do sistema.',
  }, {
    title: 'Mensagens enviadas por usuário',
    path: 'graficos/barra/mensagens_por_usuario/enviadas',
    description: 'Representação de mensagens enviadas separadas por usuários do sistema.',
  }, {
    title: 'Mensagens arquivadas por usuário',
    path: 'graficos/barra/mensagens_por_usuario/arquivadas',
    description: 'Representação de mensagens arquivadas separadas por usuários do sistema.',
  }, {
    title: 'Mensagens excluídas por usuário',
    path: 'graficos/barra/mensagens_por_usuario/excluidas',
    description: 'Representação de mensagens excluídas separadas por usuários do sistema.',
  }, {
    title: 'Mensagens por usuário',
    path: 'graficos/barra/mensagens_por_usuario/geral',
    description: 'Representação de todas as mensagens separadas por usuários do sistema.',
  }, {
    title: 'Novos usuário homens',
    path: 'graficos/pizza/novos_usuarios/homens',
    description: 'Representação de novos usuários homens do sistema.',
  }, {
    title: 'Novos usuário mulheres',
    path: 'graficos/pizza/novos_usuarios/mulheres',
    description: 'Representação de novos usuários mulheres do sistema.',
  }, {
    title: 'Novos usuário',
    path: 'graficos/pizza/novos_usuarios/geral',
    description: 'Representação de todos os novos usuários do sistema.',
  }],
})
