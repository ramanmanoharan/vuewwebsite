<template>
	<div  class="w3-main" style="margin-left:340px;margin-right:40px">
	 <div class="w3-container" style="margin-top:80px" id="showcase">
    <h1 class="w3-jumbo"><b>{{ page }}</b></h1>
    <h1 class="w3-xxxlarge w3-text-red"><b>{{ news }}</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round">
  </div>
  

  <div class="w3-row-padding">
    <div class="w3-half">
      <img src="../assets/webdesign.png" style="width:100%;height:auto" onclick="onClick(this)" alt="Web Design">
      <img src="../assets/webdev.png" style="width:100%;height:auto" onclick="onClick(this)" alt="Web Development">
      <img src="../assets/android.png" style="width:100%;height:auto" onclick="onClick(this)" alt="Android Development">
    </div>

    <div class="w3-half">
      <img src="../assets/ecommerce.png" style="width:100%;height:auto" onclick="onClick(this)" alt="Ecommerce Development">
      <img src="../assets/digitalmarketing.png" style="width:100%;height:auto" onclick="onClick(this)" alt="Digital Marketing">
      <img src="../assets/image-seo.png" style="width:100%;height:auto" onclick="onClick(this)" alt="SEO">
    </div>
  </div>


  <div id="modal01" class="w3-modal w3-black" style="padding-top:0" onclick="this.style.display='none'">
    <span class="w3-button w3-black w3-xxlarge w3-display-topright">×</span>
    <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" class="w3-image">
      <p id="caption"></p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Home',
  data()
  {
  return{page:"Redback IT Solutions", news:"Software Services."}
  },
  props: {
    user: String
  }
}
</script>