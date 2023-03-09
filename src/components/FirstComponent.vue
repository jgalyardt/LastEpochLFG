<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="myClass">
    {{ msg }}
  </div>
</template>

<style scoped>
.myClass {
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>
