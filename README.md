# ReachJS

[![Build Status](https://travis-ci.org/helderdiin/reachjs.svg?branch=master)](https://travis-ci.org/helderdiin/reachjs)
[![Coverage Status](https://coveralls.io/repos/github/helderdiin/reachjs/badge.svg?branch=master)](https://coveralls.io/github/helderdiin/reachjs?branch=master)
[![GitHub issues](https://img.shields.io/github/issues/helderdiin/reachjs.svg)](https://github.com/helderdiin/reachjs/issues)
[![NPM Version](https://img.shields.io/npm/v/reachjs.svg)](https://www.npmjs.com/package/reachjs)
[![LICENSE](https://img.shields.io/npm/l/reachjs.svg)](https://github.com/helderdiin/reachjs/blob/master/LICENSE)
[![Built With %E2%9D%A4](https://img.shields.io/badge/built%20with-%E2%9D%A4-red.svg)](https://github.com/helderdiin/reachjs)

> Biblioteca JavaScript para pesquisa rápida de páginas em sua aplicação.

[Read this in english](README.en-us.md)

Seus usuários poderão encontrar mais facilmente as páginas da sua aplicação utilizando apenas o teclado.

ReachJS funciona basicamente como uma ferramenta de busca para o usuário (como o Pesquisar do Windows ou o Spotlight do macOS), utilizando os dados que são passados na inicialização da biblioteca.

Veja alguns exemplos

* [Página estática com import direto](https://helderdiin.github.io/reachjs/static/index.html "Exemplo página estática com download e import do arquivo")
* [Vue.js SPA + webpack](https://helderdiin.github.io/reachjs/vue/index.html "Exemplo de SPA feita com Vue.js e webpack")

## Instalação

Você pode fazer o download direto do arquivo [clicando aqui](https://raw.githubusercontent.com/helderdiin/reachjs/master/dist/reachjs.js "Link direto para o arquivo reachjs.js") e importar ele na página como no exemplo.

``` html
<script type="text/javascript" src="./libs/reachjs.js"></script>
```

Ou pode também fazer o download via NPM ou Yarn.

``` bash
npm install --save reachjs
yarn add reachjs
```

E importa-lo nos arquivos `.js` utilizando [webpack](https://webpack.github.io/ "webpack module bundler") ou [browserify](http://browserify.org/ "browserify") por exemplo.

``` javascript
import reachjs from 'reachjs';

// ou

var reachjs = require('reachjs');
```

## Utilização

Para inicializar a biblioteca, o único parâmetro obrigatório são as **rotas** disponíveis da sua aplicação. As demais configurações têm seus valores padrões caso você não queira customizá-los.

### Rotas

O parâmetro de **rotas** pode ser passado tanto como um array de items como uma URL para serem resgatadas.

Para carregar como um array de items é necessário passar a chave `routes` no objeto de inicialização.

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  routes: [{
    title: 'Home',
    path: 'home',
    description: 'Página principal do sistema',
  }, {
    title: 'Quem Somos',
    path: '/quem_somos',
    description: 'Nós somos o que está nessa pequena descrição aqui',
  }, {
    title: 'Contato',
    path: 'contato',
    description: 'Nós temos várias formas de contato e estamos localizados nesse lugar aqui bem bacana :)',
  }]
});
```

Ou utilizar o método `setRoutes` exposto pela biblioteca.

``` javascript
import reachjs from 'reachjs';

reachjs.setRoutes([ ... ]); // mesmo array do exemplo anterior

reachjs.init();
```

Para carregar os items por uma URL é necessário passar a chave `routesUrl` no objeto de inicialização.

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  routesUrl: 'http://app.minhaaplicacao.com.br/sistema/rotas'
});
```

Ou utilizar o método `setRoutesUrl` exposto pela biblioteca.

``` javascript
import reachjs from 'reachjs';

reachjs.setRoutesUrl('http://app.minhaaplicacao.com.br/sistema/rotas');

reachjs.init();
```

Para configurações especiais na url de rotas você pode utilizar a chave `routesConfig` no objeto de inicialização. As alterações que podem ser feitas são:

* Parâmetro de pesquisa da URL (searchQueryParam), que por padrão é `q`
* Headers diferentes na requisição (customHeader)

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  routesConfig: {
    searchQueryParam: 'search',
    customHeader: {
      Authorization: 'UmVhY2hKUw=='
    }
  }
});
```

Ou utilizar o método `setRoutesConfig` exposto pela biblioteca.

``` javascript
import reachjs from 'reachjs';

reachjs.setRoutesConfig({
  searchQueryParam: 'search',
  customHeader: {
    Authorization: 'UmVhY2hKUw=='
  }
});

reachjs.init();
```

### Internacionalização

Os idiomas com suporte são:

* Português (pt)
* Inglês (us)

O idioma padrão é o português.

Para selecionar um idioma diferente é necessário passar a chave `locale` no objeto de inicialização.

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  locale: 'us'
});
```

Ou utilizar o método `setLocale` exposto pela biblioteca.

``` javascript
import reachjs from 'reachjs';

reachjs.setLocale('us');

reachjs.init();
```

### Teclas para disparo

Você pode customizar as teclas que irão fazer o ReachJS aparecer na tela. É obrigatório passar 2 teclas, sendo que a primeira tecla deverá obrigatoriamente ficar pressionada e a segunda ser apertada durante o pressionamento da primeira tecla.

As teclas padrões são `CTRL` + `SPACEBAR` e seus respectivos keyCodes são `17` e `32`.

Para utilizar teclas de disparo diferentes é necessário passar a chave `openKeys` no objeto de inicialização.

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  openKeys: [16, 18] // SHIFT + ALT
});
```

Ou utilizar o método `setOpenKeys` exposto pela biblioteca.

``` javascript
import reachjs from 'reachjs';

reachjs.setOpenKeys([16, 18]);

reachjs.init();
```

**OBS.:** Essa configuração aceita apenas o `keyCode` das teclas. Os `keyCodes` podem ser encontrados [neste link](http://keycode.info/ "Link para site de keyCodes").

### Evento de item selecionado

Você pode customizar o evento que é disparado sempre que o usuário escolher um dos items pesquisado.

Por padrão o ReachJS vai apenas redirecionar o usuário para o parâmetro `path` passado no objeto da rota selecionada.

Para disparar um evento diferente é necessário passar a chave `onSelect` no objeto de inicialização.

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  onSelect: data => {
    alert(`Você será redirecionado para a página ${data.title}.`);
    window.location = data.path;
  }
});
```

Ou utilizar o método `setOnSelect` exposto pela biblioteca.

``` javascript
import reachjs from 'reachjs';

reachjs.setOnSelect(data => {
  // ...
}));

reachjs.init();
```
## Teste de performance

Para realizar o teste de performance da biblioteca filtrando os textos passados no campo de pesquisa utilizei `1395` items (routes) com title de `27` palavras e description de `362` palavras. Ao pesquisar com um texto de `5` palavras levou em média `650ms` para trazer o resultado e renderizar a tela, enquanto pesquisando com um texto de `2` palavra levou em média `300ms`.

O método de filtro se encontra nesse [arquivo](https://github.com/helderdiin/reachjs/blob/master/src/components/reachService/index.js) e dentro do método `getRoutes`.

## Pendências

* ~~Demonstração visual de carregando enquanto busca as rotas via URL~~ [1](https://github.com/helderdiin/reachjs/commit/9a84a28c52e4f974e824871b898e33c93070367c) e [2](https://github.com/helderdiin/reachjs/commit/6785f6894871cc84ea4c848af58fa2c9d1e14ae0)
* ~~Melhorar a forma de filtrar os dados para encontrar mais resultados~~ [1](https://github.com/helderdiin/reachjs/commit/c60eb4087dc95780225d960a31a6c9d492890120)

Novas pendências [aqui](https://github.com/helderdiin/reachjs/issues "Issues").

## License

[MIT](https://github.com/helderdiin/reachjs/blob/master/LICENSE "MIT") license.
