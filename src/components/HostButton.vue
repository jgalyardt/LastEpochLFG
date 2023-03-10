<script setup>
defineProps({
  username: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button class="btn btn-primary float-right d-none d-lg-block">
    Host Game
  </button>
  <button class="btn btn-primary float-right d-lg-none">
    Host
  </button>
</template>

<style scoped>

</style>
