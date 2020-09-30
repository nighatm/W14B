<template>
  <div v-if="selection.name != undefined">
    <h2>User Mode:</h2>
    <img :src="selection.image" />
  </div>
</template>

<script>
export default {
  name: "user-player",
  computed: {
    selection() {
      return this.$store.userGame;
    }
  }
};
</script>

<style scoped>
</style>