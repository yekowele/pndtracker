<script>
import InputGroup from "@/components/InputGroup";
import {mapActions, mapGetters, mapMutations} from "vuex";
export default {
  name: "ProjectFilter",
  components: {InputGroup},
  data(){
    return{
      projectFilter:'',
      status: [],
    }
  },
  methods:{
    ...mapActions(['filterProjects']),
    filters:function () {
      let filterObject = {text : this.projectFilter ,status : this.status}
      console.log(filterObject);
      this.filterProjects(filterObject);
    },
  },
  watch:{
    status: function (){
      this.filters();
    }
  }
}
</script>

<template>
  <div class="filterProjects">

    <div class="input">
      <InputGroup @keyup="filters($event)" placeholder="Search Projects" :value="projectFilter" @input="projectFilter = $event" />
    </div>
    <div class="status">
      <div class="input-group">
        <input type="checkbox" name="status" value="active" v-model="status" id="active">
        <label for="active">Active</label>
      </div>
      <div class="input-group">
        <input type="checkbox" name="status" value="pending" v-model="status" id="Pending">
        <label for="Pending">Pending</label>
      </div>
      <div class="input-group">
        <input type="checkbox" name="status" value="finished" v-model="status" id="Finished">
        <label for="Finished">Finished</label>
      </div>
    </div>
    <div class="addProjectButton">
      <router-link :to="{name:'ProjectCreate'}" class="button">
        Add Project
      </router-link>
    </div>
  </div>
</template>


<style scoped lang="scss">
  .filterProjects{
    display: flex;
    align-items: center;
    justify-content:flex-start;
  }
  .input{
    width: 35%;
    margin-right: 32px;
  }
  .status{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
  }
  .input-group{
    display: flex;
    align-items: center;
    font-size: 14px;
    flex-wrap: nowrap;
    justify-content: center;
    margin-right: 12px;
    & label{
      margin-bottom: 0;
    }
    & input[type="checkbox"]{
      margin-right: 4px;
    }
  }
  .addProjectButton{
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
</style>