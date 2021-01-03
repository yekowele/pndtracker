<script>
import ProjectCard from "@/components/ProjectCard";
import InputGroup from "@/components/InputGroup";
import ProjectFilter from "@/components/ProjectFilter";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Projects",
  components: {ProjectFilter, InputGroup, ProjectCard},
  data(){
    return{
    }
  },
  created() {
    this.getProjects();
  },
  methods:{
    ...mapActions(['getProjects']),
  }

}
</script>

<template>
 <section>
   <div class="container-fluid">
     <div class="row">
       <div class="col-12 mb-3">
         <div class="card">
           <div class="card-header">
            <ProjectFilter/>
           </div>
         </div>
       </div>
     </div>
     <div class="row">
       <div class="grid col-12">
          <ProjectCard v-for="project in this.$store.state.projects" :project="project" :key="project.id" />
       </div>
     </div>
   </div>
 </section>
</template>



<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 15px;

}
</style>
