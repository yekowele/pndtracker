<template>
  <div class="clients">
    <div class="clientSearch">
      <InputGroup placeholder="Search Client"
                  :value="clientFilter"
                  @input="clientFilter = $event"/>
    </div>
    <h3>Clients
      <router-link :to="{name:'ClientCreate'}" class="addNew">
        +
      </router-link>
    </h3>
    <div class="clientsList">
      <ClientItem
          v-for="client in filteredClients"
          :client="client"
          :key="client.id"/>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import ClientItem from "@/components/clientItem";
import InputGroup from "@/components/InputGroup";

export default {
  name: "SideClientsBar",
  components: {InputGroup, ClientItem},
  data() {
    return {
      clientFilter: '',
    }
  },
  computed: {
    filteredClients() {
      return this.$store.getters.clients.filter(clnt => {
        return clnt.name.toLowerCase().includes(this.clientFilter.toLowerCase())
      });
    }

  },
  created() {
    this.fetchClients();

  },
  methods: {
    ...mapActions(['fetchClients']),

  }
}
</script>

<style scoped lang="scss">

.addNew {
  background: #f3f6f9;
  font-weight: 500;
  font-size: 1.2rem;
  border: none;
  padding: 4px 8px;
  transition: all linear 0.2s;

  &:hover {
    background: #1BC5;
    color: #ffffff;
  }
}

h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>