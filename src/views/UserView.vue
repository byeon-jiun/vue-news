<template>
  <div>
    <user-profile :info="userInfo">
      <template v-slot:username>
        <div>
        {{userInfo.id}}
        </div>
      </template>
      <template v-slot:time>
        <span>
        {{  userInfo.created}},
        </span>
      </template>
      <template v-slot:karma>
        <span>
          {{userInfo.karma}}
        </span>
      </template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile";
import {mapGetters} from "vuex";
export default {
  name: "UserView",
  components: {
    UserProfile
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created() {
    const userName = this.$route.params.id;
    this.emitter.emit('start:spinner')
    setTimeout(() => {
      this.$store.dispatch('FETCH_USER_INFO', userName)
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