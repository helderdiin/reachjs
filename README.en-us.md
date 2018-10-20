# ReachJS

[![Build Status](https://travis-ci.org/helderdiin/reachjs.svg?branch=master)](https://travis-ci.org/helderdiin/reachjs)
[![Coverage Status](https://coveralls.io/repos/github/helderdiin/reachjs/badge.svg?branch=master)](https://coveralls.io/github/helderdiin/reachjs?branch=master)
[![GitHub issues](https://img.shields.io/github/issues/helderdiin/reachjs.svg)](https://github.com/helderdiin/reachjs/issues)
[![NPM Version](https://img.shields.io/npm/v/reachjs.svg)](https://www.npmjs.com/package/reachjs)
[![LICENSE](https://img.shields.io/npm/l/reachjs.svg)](https://github.com/helderdiin/reachjs/blob/master/LICENSE)
[![Built With %E2%9D%A4](https://img.shields.io/badge/built%20with-%E2%9D%A4-red.svg)](https://github.com/helderdiin/reachjs)

> Javascript library to quickly find pages in your web application

[Leia em português](README.md)

The users will be able to easily find the pages from your application using only the keyboard.

ReachJS works basically as a search tool for the user (such as Windows' Search or MacOS' Spotlight), using the data that are passed at the library initialization.

See some examples:

* [Static page with direct import](https://helderdiin.github.io/reachjs/static/index.html "Example of static page with download and file import")
* [Vue.js SPA + webpack](https://helderdiin.github.io/reachjs/vue/index.html "Example of SPA built with Vue.js and webpack")

## Installation

You can directly download the file [clicking here](https://raw.githubusercontent.com/helderdiin/reachjs/master/dist/reachjs.js "Direct download link for the reach.js file") and import it to the page as the example bellow shows.

``` html
<script type="text/javascript" src="./libs/reachjs.js"></script>
```

You can also download via NPM or Yarn.

``` bash
npm install --save reachjs
yarn add reachjs
```

And import it in the `.js` files using [webpack](https://webpack.github.io/ "webpack module bundler") or [browserify](http://browserify.org/ "browserify"), for example.

``` javascript
import reachjs from 'reachjs';

// or

var reachjs = require('reachjs');
```

## Using the library

To initialize the library, the only required parameter are the **routes** available in your application. Other configurations has their own default values in case you don't want to use your custom values.

### Routes

The **routes** parameter can be passed both as an array and as an URL to fetch the items.

To load as an array, the key `routes` is required to exist for the initialization object.

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  routes: [{
    title: 'Home',
    path: 'home',
    description: 'Main page of the system',
  }, {
    title: 'Who we are',
    path: '/who_we_are',
    description: 'We are what is described here',
  }, {
    title: 'Contact',
    path: 'contact',
    description: 'There are many ways for you to contact us, and we are located at this nice place :)',
  }]
});
```

Or you can use the `setRoutes` method exposed by the library.

``` javascript
import reachjs from 'reachjs';

reachjs.setRoutes([ ... ]); // same array of the previous example

reachjs.init();
```

To load from an URL, the key `routesUrl` is required for the initialization object.

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  routesUrl: 'http://app.myapplication.com.br/system/routes'
});
```

Or you can use the `setRoutesUrl` method exposed by the library.

``` javascript
import reachjs from 'reachjs';

reachjs.setRoutesUrl('http://app.myapplication.com.br/system/routes');

reachjs.init();
```

If you need any other configuration at the routes URL, you can use the key `routesConfig` in the initialization object. The configuration that can be done is:

* Search parameter for the URL (searchQueryParam), that defaults to `q`
* Different headers in the request (customHeader)

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

Or you can use the method `setRoutesConfig` exposed by the library.

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

### Internacionalization

The supported languages are:

* Portuguese (pt)
* English (us)

The default language is portuguese.

To work with another language the key `locale` is required in the initialization object.

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  locale: 'us'
});
```

Or you can use the `setLocale` method exposed by the library.

``` javascript
import reachjs from 'reachjs';

reachjs.setLocale('us');

reachjs.init();
```

### Trigger keys

You can customize the keys that are going to show ReachJS into to the screen. Two keys are required, where the first key should necessarily stay pressed down and the second key should be pressed down during the time the first key is pressed down.

The default keys are `CTRL` + `SPACEBAR` and its keyCodes are `17` and `32` respectively.

To change the trigger keys it is required to set the `openKeys` key in the initialization object.

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  openKeys: [16, 18] // SHIFT + ALT
});
```

Or use the `setOpenKeys` method exposed by the library.

``` javascript
import reachjs from 'reachjs';

reachjs.setOpenKeys([16, 18]);

reachjs.init();
```

**OBS.:** This configutation accepts only the keys `keyCode`. The `keyCodes` can be found through [this link](http://keycode.info/ "Link for keyCodes page").

### Item select event

You can customize the event that is triggered when the user chooses one of the items brought back by the search.

By default, ReachJS will redirect the user throught the `path` parameter passed at the selected object route.

To trigger a different event it is required to inform the key `onSelect` at the initialization object.

``` javascript
import reachjs from 'reachjs';

reachjs.init({
  onSelect: data => {
    alert(`Redirecting to page ${data.title}.`);
    window.location = data.path;
  }
});
```

Or you can use the `setOnSelect` method exposed by the library.

``` javascript
import reachjs from 'reachjs';

reachjs.setOnSelect(data => {
  // ...
}));

reachjs.init();
```

## Performance testing

To test the library's performance when filtering the text passed in the search fields were used `1395` items (routes) with title with `27` words and description with `362` words. When searching with a `5` word text it took an average of `650ms` to retrieve the results and rendering the page, while searching with with a `2` word text, it took an average of `300ms` to bring results and render the page.

The filter method `getRoutes` can be found [here](https://github.com/helderdiin/reachjs/blob/master/src/components/reachService/index.js).

## Pending tasks

* ~~Visual demo of loading while searching the routes via URL~~ [1](https://github.com/helderdiin/reachjs/commit/9a84a28c52e4f974e824871b898e33c93070367c) e [2](https://github.com/helderdiin/reachjs/commit/6785f6894871cc84ea4c848af58fa2c9d1e14ae0)
* ~~Improve the way to filter data to find more results~~ [1](https://github.com/helderdiin/reachjs/commit/c60eb4087dc95780225d960a31a6c9d492890120)

New pending tasks [here](https://github.com/helderdiin/reachjs/issues "Issues").

## License

[MIT](https://github.com/helderdiin/reachjs/blob/master/LICENSE "MIT") license.
