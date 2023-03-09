<script setup>
defineProps({
  username: {
    type: String,
    required: true
  }
})
</script>

<template>
  <button>
    {{ username }}
  </button>
</template>

<style scoped>
button {
  background-color: red;
}
</style>
