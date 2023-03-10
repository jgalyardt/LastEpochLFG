<script setup>
defineProps({
  username: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="input-group mb-3">
    <input :value="username" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="isUsernameValid">
    <div class="input-group-append">
      <span class="input-group-text" id="isUsernameValid">
        <i v-if="username" class="fa-solid fa-check"></i>
        <i v-else class="fa-solid fa-xmark"></i>
      </span>
    </div>
  </div>
</template>

<style scoped>
input {
  max-width: 240px;
}
</style>