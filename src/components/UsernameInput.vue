<script setup>
defineProps({
  username: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="username">
    <input type="text" :value="username">
  </div>
</template>

<style scoped>
</style>