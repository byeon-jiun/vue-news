<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem";
import ListMixin from "@/mixins/ListMixin";
export default {
  name: "AskView",
  components: {ListItem},
  mixins: [ListMixin]
}
</script>

<style scoped>

</style>