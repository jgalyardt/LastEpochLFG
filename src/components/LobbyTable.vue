<script setup>

</script>

<script>
export default {
  data() {
    return {
      gameMode: "",
      timeline: "",
      corruption: "",
      act: "",
      region: ""
    }
  },
  created() {
    //Load cookies
  }
}
</script>

<template>
  <div class="col-md-12 col-lg-8">
    <div class="row filters">
      <div class="col-12 col-sm-3">
        <select
          v-model="gameMode"
          :class="[gameMode === '' ? 'default' : 'notDefault']"
          id="gameMode"
          aria-label="GameMode"
          aria-describedby="GameMode"
        >
          <option selected value="">Any Game Mode</option>
          <option value="Monoliths">Monoliths</option>
          <option value="Boss Rotation">Boss Rotation</option>
          <option value="Campaign">Campaign</option>
        </select>
      </div>
      <div class="col-12 col-sm-3">
        <select
          v-model="timeline"
          :class="[timeline === '' ? 'default' : 'notDefault']"
          id="timeline"
          aria-label="Timeline"
          aria-describedby="Timeline"
        >
          <option selected value="">Any Timeline</option>
          <option value="Black Sun">Black Sun</option>
          <option value="Fall of the Outcasts">Fall of the Outcasts</option>
          <option value="Reign of Dragons">Reign of Dragons</option>
        </select>
      </div>
      <div class="col-12 col-sm-3">
        <select
          v-model="region"
          :class="[region === '' ? 'default' : 'notDefault']"
          id="region"
          aria-label="Region"
          aria-describedby="Region"
        >
          <option selected value="">Any Region</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filters > div {
  padding: 2px;
}

select {
  width: 95%;
  margin-left: 2.5%;
  color: white;
  background-color: #2b2530;
  border-color: #58575a;
  border-radius: 5px;
  padding: 5px;
}

select.default {
  color: gray;
}

@media screen {
}
</style>
