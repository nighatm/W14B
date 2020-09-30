<template>
  <div id="content">
    <h3>Welome to the Rock Paper Scissors Game in Vue!</h3>
    <div v-if="token != undefined">
      <div>
        <button @click="select(0)">Rock</button>
        <button @click="select(1)">Paper</button>
        <button @click="select(2)">Scissors</button>
      </div>
      <div id="objects">
        <game-score />
        <user-player />
        <computer-player />
      </div>
    </div>

    <div v-else>
      <h3>to Login in.. return to "Login Page"!</h3>
      <router-link to="/"> Login Page </router-link>
    </div>
  </div>
</template>

<script>
import UserPlayer from "../components/user.vue";
import ComputerPlayer from "../components/computer.vue";
import GameScore from "../components/score.vue";
import cookies from "vue-cookies";

export default {
  components: {
    UserPlayer,
    ComputerPlayer,
    GameScore
  },
  data() {
    return {
      gameItems: [
        {
          name: "Rock",
          image:
            "https://adiihd.github.io/rock-paper-scissors-game/img/rock.png"
        },
        {
          name: "Paper",
          image: "https://projets.neworldwebsites.fr/game/paper/icons/paper.png"
        },
        {
          name: "Scissors",
          image:
            "https://goodday451999.github.io/Rock-Paper-Scissors-Neo/images/scissors.png"
        }
      ],
      gameRules: {
        Rock: {
          Rock: 0,
          Paper: -1,
          Scissors: 1
        },
        Paper: {
          Rock: 1,
          Paper: 0,
          Scissors: -1
        },
        Scissors: {
          Rock: -1,
          Paper: 1,
          Scissors: 0
        }
      },
      token: cookies.get("token")
    };
  },
  methods: {
    select: function(index) {
      let userGame = this.gameItems[index];
      let computerGame = this.gameItems[Math.floor(Math.random() * 3)];
      console.log(this.gameRules[userGame.name]);
      let score = this.gameRules[userGame.name][computerGame.name];
      console.log(score);
      this.$store.commit("updateUser", userGame);
      this.$store.commit("updateComputer", computerGame);
      this.$store.commit("updateScore", score);
    },
    logout: function() {
      cookies.remove("token");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
#content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: beige;
  text-align: center;
  justify-items: center;
}
#objects {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>