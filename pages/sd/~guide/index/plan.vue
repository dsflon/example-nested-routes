<template>
  <!-- <component :is="activeTemplate" /> -->
  <div :class="$style.test">
    asfasdfasdf
  </div>
</template>

<script>
export default {
}
</script>

<style lang="postcss" module>
.test {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  z-index: 999;
}
</style>