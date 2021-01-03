<script>
import {mapGetters, mapState} from 'vuex';
export default {
  data(){
    return{

    }
  },
  computed:{
    ...mapState(['clients'])
  },
}
</script>

<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "src/assets/styles/app";
</style>
