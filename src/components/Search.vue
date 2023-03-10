<template>
  <div class="search row">
    <div class="col-12">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="searchIconPrepend">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        <input type="text" class="form-control" placeholder="Start typing..." aria-label="Username" aria-describedby="searchIconPrepend">
      </div>
    </div>
  </div>
</template>

<style scoped>
.search {
  margin-top: 20px;
}

.input-group {
  max-width: 80%;
  margin:auto;

}
</style>
