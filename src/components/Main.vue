<template>
  <div class="main">
    <slot name="nav"></slot>
    <div class="container">
      <div class="row">
        <div class="col-12 usernameSlot">
          <slot name="username"></slot>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <slot name="lobbyTable"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-height: 100vh;
}

.usernameSlot {
  padding-top: 100px;
}
</style>