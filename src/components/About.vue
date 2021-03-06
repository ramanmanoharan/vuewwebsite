<template>
	<div  class="w3-main" style="margin-left:340px;margin-right:40px">
	 <div class="w3-container" style="margin-top:80px" id="showcase">
    <h1 class="w3-jumbo"><b>{{ page }}</b></h1>
    <h1 class="w3-xxxlarge w3-text-red"><b>{{ news }}</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round">
  </div>
  

 <p style="text-align:justify">
 	We have built an enviable reputation in the consumer goods, heavy industry, high-tech, manufacturing, medical, recreational vehicle, and transportation sectors. multidisciplinary team of engineering experts, who loves or pursues or desires to obtain pain of itself, because it is pain occasionally.
 </p>
 <br>
 <p style="text-align:justify">Who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain desires to obtain pain of itself, because it is pain, but because occur in which toil and pain.</p>
<br>
<p style="text-align:justify">
	We are experts in this industry with over 10 years experience. What that means is you are going to get right solution. please find our services. Adapt the Right Technology Solution to Reach your business Destination.
</p>

  
</div>
</template>
<script>
export default {
  name: 'About',
  data()
  {
  return{page:"Redback IT Solutions", news:"About Us"}
  },
  props: {
    user: String
  }
}
</script>