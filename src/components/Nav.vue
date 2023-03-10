<template>
  <div class="nav row">
    <div class="col-10 col-lg-4">
      <slot name="username"></slot>
    </div>
    <!-- <div class="col-lg-6">
      <slot name="error"></slot>
    </div> -->
    <div class="col-2 col-lg-2">
      <slot name="hostButton"></slot>
    </div>
  </div>
</template>

<style scoped>
.nav {
  margin-top:-10px;
  margin-bottom: 40px;
  padding-top: 30px;
  border-radius: 10px;
}
</style>
