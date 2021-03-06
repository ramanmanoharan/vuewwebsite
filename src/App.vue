<template>
  <div id="app">
    <div id="rote">
   <nav class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style="z-index:3;width:300px;font-weight:bold;" id="mySidebar"><br>
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:22px">Close Menu</a>
  <div class="w3-container">
    <img src="./assets/logomain.png">
    <h3 class="w3-padding-64"><b>IT Services</b></h3>
  </div>
  <div class="w3-bar-block">
    <router-link to="/" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Home</router-link> 
    <router-link to="about" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">About</router-link> 
    <router-link to="services" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Services</router-link> 
    
    <router-link to="pricing" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Packages</router-link> 
    <router-link to="contact" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Contact</router-link>
  </div>
</nav>
<header class="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
  <a href="javascript:void(0)" class="w3-button w3-red w3-margin-right" onclick="w3_open()">☰</a>
  <span>Redback IT Solutions</span>
</header>
  <div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>
    </div>
    
    <router-view></router-view>
    <Footer/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'




export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  /*margin-top: 60px;*/
  /*overflow-x: hidden!important;*/
}
img{
  float:left!important;
  height: 50px;width:auto;
}
.nav-link{
  text-decoration: none!important;
  color:darkblue!important;
}
#rote{
  background-color: lightgreen;

}
*{
  padding: 0;
  margin:0;
}
</style>
