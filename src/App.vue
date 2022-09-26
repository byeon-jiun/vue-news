<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <spinner-cmp :loading="loadingStatus"></spinner-cmp>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
import SpinnerCmp from "@/components/SpinnerCmp";
export default {
  name: 'App',
  components: {
    ToolBar, SpinnerCmp
  },
  data() {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
  created() {
    console.log(process.env.VUE_APP_TITLE)
    this.emitter.on('start:spinner', this.startSpinner);
    this.emitter.on('end:spinner', this.endSpinner);
  },
  unmounted() {
    this.emitter.off('start:spinner', this.startSpinner);
    this.emitter.off('end:spinner', this.endSpinner);
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #34495e;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}
</style>
