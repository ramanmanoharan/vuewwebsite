
<template>
	<div class="w3-light-grey w3-container w3-padding-32 foot" style="margin-top:75px;padding-right:58px"><p class="w3-right">Powered by <a href="https://redbackstudios.in" title="W3.CSS" target="_blank" class="w3-hover-opacity">{{message}}</a></p></div>
</template>
<script>
export default {
  name: 'Footer',
  data(){return{ message:"Redback" } },
  props: {
    msg: String,
    data: String
  }
}
</script>
<style type="text/css">
	.foot{
		bottom: 0!important;
		// position: fixed!important;
		// text-align: center!important;
		// width:100%;
		
		
		
		

	}
</style>