<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <slot name="nav"></slot>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1>LastEpochLFG</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <slot name="search"></slot>
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

h1 {
  color: white;
  text-align: center;
}
</style>