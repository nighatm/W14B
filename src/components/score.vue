<template>
  <div id="score">
    <h4>{{ " WINS: " + wins }}</h4>
    <h4>{{ " LOSSES: " + losses }}</h4>
    <h4>{{ " TIES: " + draws }}</h4>
  </div>
</template>

<script>
export default {
  name: "game-score",
  computed: {
    wins() {
      return this.$store.state.wins;
    },
    losses() {
      return this.$store.state.losses;
    },
    draws() {
      return this.$store.state.draws;
    }
  }
};
</script>
<style scoped>
</style>