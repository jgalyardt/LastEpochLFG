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
  color: white;
  background-color: #110f12;
  border-color: #58575a;
  max-width: 240px;
}

.input-group-append {
  border-color: #939297;
}

.input-group-append > span {
  background-color: #27262f;
  border-color: #58575a;
}

.fa-check {
  /* TODO */
}

.fa-xmark {
  color: #872635;
}

input::placeholder {
  color: gray;
}

input:focus {
  color: white;
  background-color: #140F19;
  border-color: white;
  box-shadow: none;
}
</style>