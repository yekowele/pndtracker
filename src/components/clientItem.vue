<script>
export default {
  name: "clientItem",
  props:['client'],
  created() {

  },
  computed : {
    randomBg(){
      return Math.floor(Math.random()*16777215).toString(16);
    },
    clientAvatar(){
      return this.client.name.substring(0,2).toUpperCase();

    }
  }
}
</script>


<template>

  <router-link to="/">
    <div class="clientItem">
      <div class="logo" :style="{'backgroundColor': `#${randomBg}` }">
        {{ clientAvatar }}
      </div>
      <div class="name">
        {{client.name}}
        <span>12 Task</span>
      </div>
    </div>
  </router-link>

</template>

<style scoped lang="scss">
.clientItem {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all linear 0.2s;
  padding: 0.8rem 2rem 0.8rem 0.75rem;
  &:hover{
    background: aliceblue;
  }
}

.logo {
  width: 36px;
  height: 36px;
  /*background: #3f4254;*/
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
}

.name {
  display: flex;
  flex-direction: column;

  & span {
    font-size: 0.8rem;
  }
}
</style>
