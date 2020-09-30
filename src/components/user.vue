<template>
  <div id="content" v-if="selection.name != undefined">
    <h2>You</h2>
    <div id="objects">
      <img :src="selection.image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "user-player",
  computed: {
    selection() {
      return this.$store.state.userGame;
    }
  }
};
</script>

<style scoped>
#objects {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>