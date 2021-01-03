<template>
  <div>
    <div class="loadingio-spinner-eclipse-9p2xui93dwu">
      <div class="ldio-loesjppwd1">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
@keyframes ldio-loesjppwd1 {
  0% {
    transform: rotate(0deg)
  }
  50% {
    transform: rotate(180deg)
  }
  100% {
    transform: rotate(360deg)
  }
}

.ldio-loesjppwd1 div {
  position: absolute;
  animation: ldio-loesjppwd1 1s linear infinite;
  width: 160px;
  height: 160px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  box-shadow: 0 4px 0 0 #e15b64;
  transform-origin: 80px 82px;
  z-index: 50000000;
}

.loadingio-spinner-eclipse-9p2xui93dwu {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}

.ldio-loesjppwd1 {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}

.ldio-loesjppwd1 div {
  box-sizing: content-box;
}
</style>

