<template>
  <div>

    <section>
      <user-profile :info="itemDetail">
        <template v-slot:username>
          <router-link :to="`/user/${itemDetail.user}`">
            {{itemDetail.user}}
          </router-link>
        </template>
        <template v-slot:time>{{itemDetail.time_ago}}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{itemDetail.title}}</h2>
    </section>
    <section>
      <div v-html="itemDetail.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "@/components/UserProfile";
export default {
  name: "ItemView",
  components: {UserProfile},
  computed: {
    ...mapGetters(['itemDetail'])
  },
  created() {
    const id = this.$route.params.id;
    this.emitter.emit('start:spinner')
    setTimeout(() => {
      this.$store.dispatch('FETCH_ITEM_DETAIL', id)
          .then(() => {
            this.emitter.emit('end:spinner')
          })
          .catch((err) => {
            console.log(err);
          })
    }, 2000);
  }
}
</script>

<style scoped>

</style>