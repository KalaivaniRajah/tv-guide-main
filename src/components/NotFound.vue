<template>
  <div class="demo-alert-box">
    <strong>Error!</strong>
    <div id="slots-demo" class="demo">
      <alert-box> Something bad happened. </alert-box>
    </div>
  </div>
</template>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.demo-alert-box {
  padding: 10px 20px;
  background: #f3beb8;
  border: 1px solid #f09898;
}
</style>
