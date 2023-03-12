<script setup>
defineProps({
  username: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div
    class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4"
  >
    <div class="input-group w-100">
      <input
        :value="username"
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="isUsernameValid"
      />
      <div class="input-group-append">
        <span class="input-group-text" id="isUsernameValid">
          <i v-if="username" class="fa-solid fa-check"></i>
          <i v-else class="fa-solid fa-xmark"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
input {
  color: white;
  background-color: #110f12;
  border-color: #58575a;
  max-width: 100%;
}

.input-group-append {
  border-color: #939297;
}

.input-group-append > span {
  background-color: #27262f;
  border-color: #58575a;
}

.fa-check {
  color: #358726;
}

.fa-xmark {
  color: #872635;
}

input::placeholder {
  color: gray;
}

input:focus {
  color: white;
  background-color: #140f19;
  border-color: white;
  box-shadow: none;
}

@media screen {
}
</style>
