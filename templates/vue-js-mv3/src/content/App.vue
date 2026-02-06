<template>
  <div
    @click="handleClick"
    :style="{
      width: '250px',
      height: '50px',
      lineHeight: '50px',
      borderColor: '#6777ef',
      cursor: 'pointer',
    }"
    class="crx-btn"
  >
    Created by VueJS Extension 🚀
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick() {
      window.open('https://github.com/it235/create-crx-app-plus.git', '_blank')
    },
  },
}
</script>

<style lang="less" scoped>
@import "../style/popup.less";
</style>
