import { createApp } from 'vue'
import App from './App.vue';
import store from './store';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faArrowLeft, faArrowRight)

const app = createApp(App);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
