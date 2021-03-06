
<template>
	
		<div  class="w3-main" style="margin-left:340px;margin-right:40px">
	 <div class="w3-container" style="margin-top:80px" id="showcase">
    <h1 class="w3-jumbo"><b>{{ page }}</b></h1>
    <h1 class="w3-xxxlarge w3-text-red"><b>{{ news }}</b></h1>
    <hr style="width:50px;border:5px solid red" class="w3-round">
  </div>
	<div >
		<h1>{{ missing }}<br><br><br></h1>
	</div>
</div>
</template>
<script>
export default {
  name: 'Nopage',
   data()
  {
  return{page:"Ram IT Solutions", news:"IT Services", missing: "Visited Page Not Found"}
  },
  props: {
    user: String
  }
  
}
</script>
<style type="text/css">
	.footer{
		bottom: 0!important;
		position: absolute!important;
		text-align: center!important;
		background-color:lightgreen!important;
		color:darkblue;
		width:99%!important;
		overflow-x: hidden;
		padding: 5px;

	}
</style>
