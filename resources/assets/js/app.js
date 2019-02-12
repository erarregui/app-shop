require('./bootstrap');

window.Vue = require('vue');

//Vue.component('my-thoughts-component', require('./components/MyThoughtsComponent.vue'));
//Vue.component('form-component', require('./components/FormComponent.vue'));
//Vue.component('thought-component', require('./components/ThoughtComponent.vue'));
Vue.component('idea', require('./components/Idea.vue'));
Vue.component('tareas', require('./components/tareas.vue'));

const app = new Vue({
    el: '#app'
});
