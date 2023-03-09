<script setup>
import { app, db } from './firebaseConfig';
import { getDatabase, ref, onValue } from "firebase/database";
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
      username: '',
      dbUsername: 'Nothing yet...'
    }
  },
  created() {
    //Check cookies for username
    let username = $cookies.get('lastepochlfg-username');
    if (username != null) {
      this.username = username;
    }

    // const playerRef = ref(db, 'players/player');
    // onValue(playerRef, (snapshot) => {
    //   //TODO: Validate
    //   console.log(snapshot);
    //   const data = snapshot.val();
      
    // });
  },
  methods: {
    updateUsername(event) {
      //TODO: Validate
      this.username = event.target.value;
      $cookies.set('lastepochlfg-username', this.username);
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
