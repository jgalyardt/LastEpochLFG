<script setup>
defineProps({
  username: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button class="btn btn-warning btn-sm float-right d-none d-sm-block">
    Host Game
  </button>
  <button class="btn btn-warning btn-sm float-right d-sm-none">
    Host
  </button>
</template>

<style scoped>

</style>
