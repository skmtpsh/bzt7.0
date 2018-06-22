<template>
  <li class="tree_p">
    <div class="tree_name" v-if="model.content">
      <i>{{model.chapter}}</i>
      <div v-html="model.content" style="display: inline"></div>
    </div>
    <div v-if="!loading && !model.content" style="text-align:center">
      暂无数据
    </div>
    <ul>
      <treeItem v-for="(item, index) in model.children" :model="item" :key="index"></treeItem>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'treeItem',
  props: ['model', 'loading'],
  created () {
  },
  methods: {
     
  }
}
</script>
<style lang="stylus" scoped>

</style>

