<template>
  <div class="main">
    <slot name="nav"></slot>
    <slot name="search"></slot>
    <slot name="lobbyTable"></slot>
  </div>
</template>

<style scoped>
.main {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
