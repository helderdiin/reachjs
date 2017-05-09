<template>
  <div id="app">
    <div class="navbar navbar-default" role="navigation">
      <div class="container">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <router-link class="navbar-brand" to="/">ReachJS</router-link>
          </div>
          <div class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                  <li><a href="https://github.com/helderdiin/reachjs" target="_blank">GitHub Project</a></li>
              </ul>
              <ul class="nav navbar-nav">
                  <li>
                      <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Principal<b class="caret"></b></a>
                      <ul class="dropdown-menu multi-level">
                          <li class="active"><router-link to="/">Home</router-link></li>
                          <li class="dropdown-submenu">
                              <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Sobre nós</a>
                              <ul class="dropdown-menu">
                                  <li><router-link to="/sobre_nos/quem-somos">Quem somos</router-link></li>
                                  <li><router-link to="/sobre_nos/contato">Contato</router-link></li>
                              </ul>
                          </li>
                          <li class="divider"></li>
                          <li class="dropdown-submenu">
                              <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Blog</a>
                              <ul class="dropdown-menu">
                                  <li><router-link to="/blog/artigos">Artigos</router-link></li>
                                  <li class="dropdown-submenu">
                                      <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Notícias</a>
                                      <ul class="dropdown-menu">
                                          <li class="dropdown-submenu">
                                              <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Mais lidas</a>
                                              <ul class="dropdown-menu">
                                                  <li><router-link to="/blog/noticias/mais_lidas/javascript-e-a-melhor-linguagem">JavaScript é a melhor linguagem?</router-link></li>
                                                  <li><router-link to="/blog/noticias/mais_lidas/surface-laptop-ou-macbook">Surface Laptop ou MacBook?</router-link></li>
                                                  <li><router-link to="/blog/noticias/mais_lidas/seus-aplicativos-estao-te-monitorando">Seus aplicativos estão te monitorando!</router-link></li>
                                              </ul>
                                          </li>
                                          <li class="dropdown-submenu">
                                              <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Mais recentes</a>
                                              <ul class="dropdown-menu">
                                                  <li><router-link to="/blog/noticias/mais_recentes/cinco-tecnologias-para-ficar-de-olho">5 tecnologias para ficar de olho</router-link></li>
                                                  <li><router-link to="/blog/noticias/mais_recentes/apple-tv-ou-google-chromecast">Apple TV ou Google ChromeCast?</router-link></li>
                                              </ul>
                                          </li>
                                          <li class="dropdown-submenu">
                                              <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Em alta</a>
                                              <ul class="dropdown-menu">
                                                  <li><router-link to="/blog/noticias/em_alta/descubra-todas-as-informacoes-que-a-netflix-sabe-sobre-voce">Descubra todas as informações que a Netflix sabe sobre você</router-link></li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Sistema<b class="caret"></b></a>
                      <ul class="dropdown-menu">
                          <li class="dropdown-submenu">
                              <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Gráficos</a>
                              <ul class="dropdown-menu">
                                  <li class="dropdown-submenu">
                                      <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Barra</a>
                                      <ul class="dropdown-menu">
                                          <li class="dropdown-submenu">
                                              <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Mensagens por usuário</a>
                                              <ul class="dropdown-menu">
                                                  <li><router-link to="/graficos/barra/mensagens_por_usuario/recebidas">Recebidas</router-link></li>
                                                  <li><router-link to="/graficos/barra/mensagens_por_usuario/enviadas">Enviadas</router-link></li>
                                                  <li><router-link to="/graficos/barra/mensagens_por_usuario/arquivadas">Arquivadas</router-link></li>
                                                  <li><router-link to="/graficos/barra/mensagens_por_usuario/excluidas">Excluídas</router-link></li>
                                                  <li><router-link to="/graficos/barra/mensagens_por_usuario/geral">Geral</router-link></li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                                  <li class="dropdown-submenu">
                                      <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Pizza</a>
                                      <ul class="dropdown-menu">
                                          <li class="dropdown-submenu">
                                              <a class="" href="#" class="dropdown-toggle" data-toggle="dropdown">Novos usuários</a>
                                              <ul class="dropdown-menu">
                                                  <li><router-link to="/graficos/pizza/novos_usuarios/homens">Homens</router-link></li>
                                                  <li><router-link to="/graficos/pizza/novos_usuarios/mulheres">Mulheres</router-link></li>
                                                  <li><router-link to="/graficos/pizza/novos_usuarios/geral">Geral</router-link></li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                      </ul>
                  </li>
              </ul>
          </div><!--/.nav-collapse -->
      </div>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.dropdown-submenu {
    position: relative;
}

.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block;
}

.dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
}

.dropdown-submenu:hover>a:after {
    border-left-color: #fff;
}

.dropdown-submenu.pull-left {
    float: none;
}

.dropdown-submenu.pull-left>.dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}
</style>
