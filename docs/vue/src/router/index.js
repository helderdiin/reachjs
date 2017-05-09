import Vue from 'vue'
import Router from 'vue-router'

import sobreNos from './sobreNos'
import home from './home'
import blog from './blog'
import graficos from './graficos'

Vue.use(Router)

const defaultRedirect = {
  path: '/',
  redirect: 'home'
}

const routes = [defaultRedirect, home, sobreNos, blog, graficos]

export default new Router({ routes })
