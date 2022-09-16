<template>
  <div>
    <p v-for="item in askList" :key="item.id">
      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>
        {{ item.time_ago }} by {{ item.user }}
      </small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AskView",
  computed: {
    ...mapGetters(['askList'])
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style scoped>

</style>