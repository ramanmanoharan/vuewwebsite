<template>
	<div  class="w3-main" style="margin-left:340px;margin-right:40px">
	 <div class="w3-container" style="margin-top:80px" id="showcase">
    <h1 class="w3-jumbo"><b>{{ page }}</b></h1>
    <h1 class="w3-xxxlarge w3-text-red"><b>{{ news }}</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round">
  </div>
		
   
    <p>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
    <form action="/action_page.php" target="_blank">
      <div class="w3-section">
        <label>Name</label>
        <input class="w3-input w3-border" type="text" name="Name" required>
      </div>
      <div class="w3-section">
        <label>Email</label>
        <input class="w3-input w3-border" type="text" name="Email" required>
      </div>
      <div class="w3-section">
        <label>Message</label>
        <input class="w3-input w3-border" type="text" name="Message" required>
      </div>
      <button type="submit" class="w3-button w3-block w3-padding-large w3-red w3-margin-bottom">Send Message</button>
    </form>  
  </div>

	</div>
</template>
<script>
export default {
  name: 'Contact',
  data()
  {
  return{page:"Redback IT Solutions", news:"Contact Us"}
  },
  props: {
    user: String
  }
}
</script>
<style>
label{
	text-align:left!important;
}
</style>