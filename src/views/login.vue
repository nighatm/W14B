<template>
    <div>
        <br><br>
        <h3>Please enter your Login information! </h3>
        <br>
        <p>Username</p>
        <input type="text" id="" v-model="username">
        <p>Password</p>
        <input type="password" id="" v-model="password"> 
        <br><br>
        <button @click="login"> Enter </button>
        <h4>{{status}}</h4>
    </div>
</template>

<script>
import Axios from 'axios';
import cookies from "vue-cookies";
    export default {
        name:"login-form",
        data() {
            return {
                username: "",
                password: "",
                status: "",
                error:false
            }
        },
        methods: {
            login: function() {
                this.status = "Loading"
                Axios.request({
                    url:"https://reqres.in/api/login",
                    method:"POST",
                    headers:{
                        'Content-Type': "application/json"
                    },
                    data:{
                        email:this.username,
                        password: this.password
                    }
                }).then((response) => {
                    console.log(response);
                    this.status = "Login Success!";
                    cookies.set("token", response.data.token);
                    this.$router.push("game");
                                
                }).catch((error) => {
                    console.log(error);
                    this.status = "Login Error!";
                    this.error = true;
                });
                
            }
        },
    }
</script>

<style scoped>

</style>