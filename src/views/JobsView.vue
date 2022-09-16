<template>
  <div>
    <p v-for="item in jobList" :key="item.id">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "JobsView",
  computed: {
    ...mapGetters(['jobList'])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>

</style>