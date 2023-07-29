//import './bootstrap';

import { createApp } from "vue";
import Welcome from './welcome.vue';
import router from './router/index.js';
import ProductView from './components/products/ProductsView.vue';

createApp(Welcome).mount("#app");
createApp({
    components:{
        ProductView
    }
}).use(router).mount("#full-app");