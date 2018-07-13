/*
 * @Author: youjunkang@hqblicai.com 
 * @Date: 2018-07-13 09:57:22 
 * @Last Modified by: youjunkang@hqblicai.com
 * @Last Modified time: 2018-07-13 09:57:54
 */
<template>
  <div id="app">
    <router-view/>
    <vue-ins-progress-bar></vue-ins-progress-bar>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted () {
    this.$insProgress.finish()
  },
  created () {
    this.$insProgress.start()

    this.$router.beforeEach((to, from, next) => {
      this.$insProgress.start()
      next()
    })

    this.$router.afterEach((to, from) => {
      this.$insProgress.finish()
    })
  }
}
</script>