import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Packages from './components/Packages.vue'
import Contact from './components/Contact.vue'
import Nopage from './components/Nopage.vue'

const routes =[
	{ path:'/', component:Home },
	{ path:'/home', component: Home },
	{ path:'/about', component: About },
	{ path:'/services', component: Services },
	{ path:'/pricing', component: Packages },
	{ path:'/contact', component: Contact },
	{ path:'**', component:Nopage }

]

const router = new VueRouter({
	routes
})
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
