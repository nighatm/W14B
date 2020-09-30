<template>
  <div v-if="selection.name != undefined">
    <h2>VS</h2>
    <h2>Computer</h2>
    <img :src="selection.image" />
  </div>
</template>

<script>
export default {
  name: "computer-player",
  computed: {
    selection() {
      return this.$store.state.computerGame;
    }
  }
};
</script>

<style scoped>
</style>