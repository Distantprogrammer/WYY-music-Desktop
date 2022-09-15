<template>
  <div class="popover"></div>
</template>

<script>
export default {
  name: 'songListPopover',
  props: {
    listClass: {
      type: [Array, Object]
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.popover{
  border-top: 1px #878787 solid;
}
</style>
