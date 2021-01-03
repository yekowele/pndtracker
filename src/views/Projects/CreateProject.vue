<script>
import {mapActions, mapGetters} from "vuex";
import TextArea from "@/components/TextArea";

export default {

  name: "CreateProject",
  components: {TextArea},
  data() {
    return {
      form: {
        name: '',
        clientID: '',
        startDate:'',
        endDate:'',
        description:'',
        status:''
      },
      alert: {
        'type' : '',
        'status' : null,
        'msg' : '',
      }
    }
  },
  computed:{
    ...mapGetters(['clients'])
  },
  methods:{
    ...mapActions(['addProject']),
    async createNewProject(){
     if(this.form.name !== '' &&
        this.form.clientID !== '' &&
        this.form.startDate !== '' &&
        this.form.endDate !== '' &&
        this.form.description !== '' &&
        this.form.status !== ''
     ){
       this.error = null;
       await this.addProject(this.form);
       this.form = {
         name: '',
         client: '',
         startDate:'',
         endDate:'',
         description:'',
         status:''
       }
       this.alert.type = 'success';
       this.alert.status = true;
       this.alert.msg = 'Project Added!';

     }else{
        this.alert.type = 'danger';
        this.alert.status = true;
        this.alert.msg = 'Please fill all fileds!';

     }

    }
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row" v-if="alert.status">
      <div class="col-12">
        <div :class="['alert',`alert-${alert.type}`]">{{ alert.msg }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4>Add New Project</h4>
          </div>
          <form action="/create-project" @submit.prevent="createNewProject">
            <div class="card-body">
              <div class="form-group">
                <label>Project Name</label>
                <input type="text" name="name" class="form-control" v-model="form.name" placeholder="Project Name">
              </div>
              <div class="form-group">
                <label>Client</label>
                <select name="client" v-model="form.clientID" class="form-control">
                  <option disabled selected>Please Select</option>
                  <option :value="client.name" v-for="client in clients">{{client.name}}</option>
                </select>
              </div>
              <div class="form-group">
                <label>Description</label>
                <TextArea v-model="form.description"/>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <label>Start Date</label>
                    <input type="date" name="start" class="form-control" v-model="form.startDate">
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-group">
                    <label>End Date</label>
                    <input type="date" name="end" class="form-control" v-model="form.endDate">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Status</label>
                <select name="status" v-model="form.status" class="form-control">
                  <option disabled selected>Please select</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="finished">Finished</option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" type="submit">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>