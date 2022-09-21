<template>
  <div>
    <ul class="new-list">
      <li v-for="item in AllList" :key="item.id" class="post">
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="new-title">
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="user-text">
            {{ item.time_ago }} by
            <a :href="item.url"  v-if="item.domain">
              {{ item.domain }}
            </a>
            <router-link v-bind:to="`/user/${item.user}`" v-else>{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ListItem",
  computed: {
    ...mapGetters(['AllList'])
  }
}
</script>

<style scoped>
.new-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.new-title {
  margin: 0;
}
.user-text {
  color: #828282;
}
</style>