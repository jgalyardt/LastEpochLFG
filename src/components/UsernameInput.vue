<script setup>
defineProps({
  username: {
    type: String,
    required: true
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
