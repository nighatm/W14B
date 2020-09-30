<template>
    <div v-if="selection.name != undefined">
        <h2>Computer Mode:</h2>
        <img :src="selection.image">
">
    </div>
</template>

<script>
    export default {
        name: "computer-player",
        computed:{
            selection(){
                return this.$store.computerGame;
            }
        }
    }
</script>

<style scoped>

</style>