# coffee-app-vuejs

> Code challenge of Flybits

## Build Setup

``` bash
# clone fist
git clone https://github.com/CharlieFan/coffee-shop-pos.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Diretory Structure
coffee-app-vuejs
```
|---src
    |---assets
    |---App.vue
    |---main.js
    |---api
    |---router
    |---components
        |---ui
        |---views
    |---styles
|---pacage.json
|---index.html
```

## Usage of Demo server 
In order to simulate REST api, I choose json-server to simulate a true server which will return json based on request URLs.

To begin:
1. Install json-server by ```npm install -g json-server```
2. Start API server by ```npm run server```
3. Open another terminal and start app by ```npm run dev```
4. or```npm run build```, and then ```http-server ./dist``` to start

p.s: api server default port is 3000


### Addtional tools:
svg sprite tool:

Put SVGs in assets/svgs

use:
```
npm run svg
```
to generate svg sprite (need restart dev server)
