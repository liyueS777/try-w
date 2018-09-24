//有时候我们要引入polyfills.js  但不希望把它放在包里面，这样显得体积过大，可以单独开一个包
import 'babel-polyfill'
import 'whatwg-fetch'