<script setup>
import { app, db } from './firebaseConfig';
import { getDatabase, ref, onValue } from "firebase/database";
import Main from './components/Main.vue';
import Nav from './components/Nav.vue';
import UsernameInput from './components/UsernameInput.vue';
import HostButton from './components/HostButton.vue';
</script>
<script>
export default {
    data() {
        return {
            username: "",
            dbUsername: "Nothing yet..."
        };
    },
    created() {
        //Check cookies for username
        let username = $cookies.get("lastepochlfg-username");
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
    mounted() {
        let fontawesome = document.createElement("script");
        fontawesome.setAttribute("src", "https://kit.fontawesome.com/693c1f5058.js");
        fontawesome.setAttribute("crossorigin", "anonymous");
        document.head.appendChild(fontawesome);
    },
    methods: {
        updateUsername(event) {
            //TODO: Validate
            this.username = event.target.value;
            $cookies.set("lastepochlfg-username", this.username);
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
      <Nav></Nav>
    </template>
    <template #username>
      <UsernameInput @change="updateUsername" :username="username"></UsernameInput>
    </template>
    <template #lobbyTable>
      
    </template>
  </Main>
</template>

<style scoped>

</style>
