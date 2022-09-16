<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${itemDetail.user}`">
          {{itemDetail.user}}
          </router-link>
          <div class="time">
            {{itemDetail.time_ago}}
          </div>
        </div>
      </div>
      <h2>{{itemDetail.title}}</h2>
    </section>
    <section>
      <div v-html="itemDetail.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ItemView",
  computed: {
    ...mapGetters(['itemDetail'])
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM_DETAIL', id)
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.0rem;

}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>