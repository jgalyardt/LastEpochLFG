<script setup>
import Main from './components/Main.vue';
import Nav from './components/Nav.vue';
import Search from './components/Search.vue';
import UsernameInput from './components/UsernameInput.vue';
import HostButton from './components/HostButton.vue';
</script>

<script>
export default {
  data() {
    return {
      username: 'Test'
    }
  },
  methods: {
    updateUsername(event) {
      //TODO: Validate

      //TODO: Update firebase

      this.username = event.target.value;
    },
    hostGame() {
      return true;
    }
  }
}
</script>

<template>
  <Main>
    <template #nav>
      <Nav>
        <template #username>
          <UsernameInput @change="updateUsername" :username="username"></UsernameInput>
        </template>
        <template #hostButton>
          <HostButton :username="username"></HostButton>
        </template>
      </Nav>
    </template>
    <template #search>
      <Search></Search>
    </template>
    <template #lobbyTable>
      
    </template>
  </Main>
</template>

<style scoped>

</style>
