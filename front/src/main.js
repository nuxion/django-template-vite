// add the beginning of your app entry
import 'vite/modulepreload-polyfill'
import './styles.css'
// import javascriptLogo from './assets/javascript.svg'
import Alpine from 'alpinejs'
 
window.Alpine = Alpine
Alpine.start()

console.log("Welcome to django-template-front")
