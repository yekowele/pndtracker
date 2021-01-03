<script>
import firebase from "firebase/app";

export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    }
  },
  methods: {
    submit() {
      firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
          .then((result) => {
            return result.user.updateProfile({
              displayName : this.form.name
            });
          })
          .then(()=>{
            this.$router.replace({name: 'Login'});
          })
          .catch(err => {
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
        <transition name="page">
          <div class="alert alert-danger" v-if="error">{{ error }}</div>
        </transition>
        <div class="card">
          <div class="card-body">
            <form action="#" @submit.prevent="submit">
              <div class="form-group">
                <label>E-Mail</label>
                <input type="text" class="form-control" v-model="form.email" name="email" placeholder="E-Mail">
              </div>
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" v-model="form.name" name="name" placeholder="Name">
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="form.password" name="password"
                       placeholder="Password">
              </div>
              <div class="form-group text-center">
                <button type="submit" class="w-75 btn btn-primary">Register</button>
              </div>
              <div class="form-group">
                <router-link :to="{name:'Login'}">I've already account!</router-link>
              </div>
            </form>
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
