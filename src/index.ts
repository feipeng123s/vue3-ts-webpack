import { createApp } from 'vue';
import App from './App.vue';

let app = createApp({
    // el: 'app',
    data() {
        return {
            name: 'TypeScript'
        }
    },
    template: '<h1>Hello {{ name }}</h1>'
});
// let app = createApp(App);
app.mount('#app');