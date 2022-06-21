import { createApp } from 'vue'
import  router from './router/index'
import App from './App.vue'
//call bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
//Importing all icons
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
//call font awesome
import {library} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons';
import {far} from "@fortawesome/free-regular-svg-icons"
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
library.add(fas, far, fab);

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
app.use(BootstrapIconsPlugin);
app.component("FAIHoussain", FontAwesomeIcon);
app.mount('#app')