<template>
	<div  class="w3-main" style="margin-left:340px;margin-right:40px">
	  <div class="w3-container" style="margin-top:80px" id="showcase">
      <h1 class="w3-jumbo"><b>{{ page }}</b></h1>
      <h1 class="w3-xxxlarge w3-text-red"><b>{{ news }}</b></h1>
      <hr style="width:50px;border:5px solid red" class="w3-round">
    </div>
    <div class="w3-row w3-container">
    <div class="w3-center w3-padding-64">
      <span class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">What We Do</span>
    </div>
    <div class="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
      <h3>Design</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div class="w3-col l3 m6 w3-grey w3-container w3-padding-16">
      <h3>Branding</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div class="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
      <h3>Consultation</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>

    <div class="w3-col l3 m6 w3-black w3-container w3-padding-16">
      <h3>Promises</h3>
      <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
    </div>
  </div>
  </div>

</template>
<script>
export default {
  name: 'Services',
  data()
  {
  return{page:"Ram IT Solutions", news:"Services"}
  },
  props: {
    user: String
  }
}
</script>
