<template>
  <div class="container">
    <div class="left">
      <div class="players">
        <NuxtLink to="/sd/323123/10816717">
          asdfasdfasdfasdf<br>
          asdfasdfasdfasdf<br>
          asdfasdfasdfasdf<br>
          asdfasdfasdfasdf<br>
        </NuxtLink>
      </div>
    </div>
    <NuxtChild :key="$route.params.planId" />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition-duration: 0.5s;
  transition-property: transform;
}

.page-enter,
.page-leave-active {
  transform: translateY(100vh);
}
</style>