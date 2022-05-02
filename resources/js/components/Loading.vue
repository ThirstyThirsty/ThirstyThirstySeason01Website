<template>
  <div class="a-square-spinner">
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square clear"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square clear"></div>
    <div class="square"></div>
    <div class="square"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style>
.a-square-spinner {
  margin: 1em auto;
}

.a-square-spinner, .a-square-spinner * {
  box-sizing: border-box;
}

.a-square-spinner {
  height: 40px;
  width: 40px;
  top: calc( -10px * 2 / 3);
}

.a-square-spinner .square {
  height: 10px;
  width: 10px;
  top: calc( -10px * 2 / 3);
  margin-right: calc(10px / 3);
  margin-top: calc(10px / 3);
  background: #ff6669;
  float: left;
  position:relative;
  opacity: 0;
  animation: a-square-spinner 6s infinite;
}

.a-square-spinner .square:nth-child(1) {
  animation-delay: calc(300ms * 6);
}

.a-square-spinner .square:nth-child(2) {
  animation-delay: calc(300ms * 7);
}

.a-square-spinner .square:nth-child(3) {
  animation-delay: calc(300ms * 8);
}

.a-square-spinner .square:nth-child(4) {
  animation-delay: calc(300ms * 3);
}

.a-square-spinner .square:nth-child(5) {
  animation-delay: calc(300ms * 4);
}

.a-square-spinner .square:nth-child(6) {
  animation-delay: calc(300ms * 5);
}

.a-square-spinner .square:nth-child(7) {
  animation-delay: calc(300ms * 0);
}

.a-square-spinner .square:nth-child(8) {
  animation-delay: calc(300ms * 1);
}

.a-square-spinner .square:nth-child(9) {
  animation-delay: calc(300ms * 2);
}

.a-square-spinner .clear{
  clear: both;
}

@keyframes a-square-spinner {
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
    top: 0;
  }
  50.9% {
    opacity: 1;
    top: 0;
  }
  55.9% {
    opacity: 0;
    top: inherit;
  }
}
</style>
