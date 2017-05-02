import reachjs from './reachjs';

reachjs.init({
  locale: 'us',
  routes: [{
    title: 'Home',
    path: 'home',
    description: 'Descrição da Home',
  }, {
    title: 'Quem Somos',
    path: '/quem_somos',
    description: 'Descrição da Quem Somos',
  }, {
    title: 'Contato',
    path: 'contato',
    description: 'Descrição da Contato',
  }, {
    title: 'Blog',
    path: '/blog',
    description: 'Descrição da Blog',
  }, {
    title: 'Notícias',
    path: '/noticias',
    description: 'Descrição da Notícias',
  }, {
    title: 'Lorem ipsum dolor sit amet',
    path: 'lorem/ipsum',
    description: 'consectetur adipiscing elit',
  }, {
    title: 'Donec dignissim erat eget neque rutrum',
    path: '/donec/dignissim',
    description: 'quis eleifend ante consectetur',
  }, {
    title: 'Curabitur sagittis',
    path: '/curabitur',
    description: 'mi id augue aliquet auctor',
  }, {
    title: 'Cras et rhoncus mi',
    path: '/cras/et/rhoncus',
    description: 'Donec non odio sem',
  }, {
    title: 'Cras vitae nunc non turpis',
    path: 'cras/vitae/nunc',
    description: 'bibendum eleifend at sollicitudin turpis',
  }, {
    title: 'Morbi eros sem',
    path: '/morbi',
    description: 'tristique a ornare in',
  }, {
    title: 'blandit at velit',
    path: '/blandit/at/velit',
    description: 'facilisis sed est sit amet',
  }, {
    title: 'Nunc quam nulla',
    path: 'nunc/quam/nulla',
    description: 'luctus blandit dolor',
  }, {
    title: 'Suspendisse commodo',
    path: '/suspendisse/commodo',
    description: 'mauris purus, tempus sagittis massa faucibus sit amet',
  }],
  onSelect: (data) => {
    /* eslint-disable no-alert */
    alert(`Você será redirecionado para a página ${data.title}.`);
    window.location = data.path;
  },
});
