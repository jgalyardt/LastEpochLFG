<script>
export default {
  methods: {},
};
</script>

<template>
  <div class="nav">
    <div class="container">
      <div class="row">
        <div class="col-6 float-left">
          <img class="logo" src="../assets/LE_LFG_logo.png" />
        </div>
        <div class="col-6 text-right">
          <a href="https://github.com/jgalyardt/LastEpochLFG" target="_blank">
            <i class="fa-brands fa-git-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav {
  z-index: 10;
  padding: 13px 10px 10px 10px;
  position: fixed;
  width: 100%;
}

.logo {
  display: block;
  max-height: 30px;
}

.fa-git-alt {
  padding-top: 2px;
  color: lightgray;
  font-size: 24px;
}

.fa-git-alt:hover {
  cursor: pointer;
}
</style>
