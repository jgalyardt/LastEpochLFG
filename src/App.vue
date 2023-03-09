<script setup>
import Main from './components/Main.vue';
import Nav from './components/Nav.vue';
import Search from './components/Search.vue';

</script>

<template>
  <Main>
    <template #nav>
      <Nav>
        <template #username></template>
        <template #host></template>
      </Nav>
    </template>
    <template #search></template>
    <template #lobbyTable></template>
  </Main>
</template>

<style scoped>

</style>
