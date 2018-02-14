import Vue from 'vue'
import VueResource from 'vue-resource'

import PictureComponent from './components/PictureComponent.vue'
import BorderComponent from './components/BorderComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import PrintComponent from './components/PrintComponent.vue'
import PreviewComponent from './components/PreviewComponent.vue'
import NextComponent from './components/NextComponent.vue'

Vue.use(VueResource);

new Vue({
  el: '#app',
  data: {
    currentView: 'cpicture'
  },
  methods: {
    scichView: function (view) {
      this.currentView = view;
    }
  },
  components:{
    'cpicture': PictureComponent,
    'cborder': BorderComponent,
    'cheader': HeaderComponent,
    'cprint': PrintComponent,
    'cpreview': PreviewComponent,
    'cnext': NextComponent,
  }
})
