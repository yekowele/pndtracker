<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-12 mx-auto">
        <div class="card">
          <div class="card-header"><h3>Add New Client</h3></div>
          <div class="card-body">
            <form action="/add-new-client" @submit.prevent="addNewClient">
              <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" v-model="form.name" class="form-control" placeholder="Company Name">
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "ClientCreate",
  data(){
    return{
      form:{
        name:'',
      }
    }
  },
  methods:{
    ...mapActions(["addClient"]),
    addNewClient(){
      this.addClient({name:this.form.name});
      this.form.name = '';
    }
  }
}
</script>

<style scoped>

</style>
