<script>
import Logo from "@/components/Logo";
import firebase from "firebase/app";
import 'firebase/auth'
import {mapActions} from 'vuex'

export default {
  name: "Login",
  components: {Logo},
  data() {
    return {
      email: '',
      pass: '',
      error: null
    }
  },

  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
          .then((userCredential) => {
            if(userCredential.user !== null){
              this.$router.replace({name:'Home'})
            }
          }).catch(err => {
        this.error = err.message;
      })
    }
  }
}
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-12 mx-auto mt-5">
        <div class="card">
          <div class="card-body">
            <div class="col-12 d-flex justify-content-center">
              <Logo/>
            </div>
            <div class="alert-danger alert" v-if="error">{{ error }}</div>
            <form action="/login" @submit.prevent="login">
              <div class="form-group">
                <label>E-Mail </label>
                <input class="form-control" v-model="email" type="text" name="email" placeholder="E-Mail">
              </div>
              <div class="form-group">
                <label>Password </label>
                <input class="form-control" v-model="pass" type="password" name="password" placeholder="Password">
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </form>
            <div class="form-group">
              <router-link :to="{name:'Register'}">I need account!</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
a {
  font-size: 14px;
  text-decoration: underline;
}
</style>
