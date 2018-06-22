<template>
  <Scroll ref="structwrap" class="structwrap">
    <div>
      <div class="treeItems">
        <loading v-show="load"></loading>
        <ul>
          <Trees :model="data" :loading="load"></Trees>
        </ul>
      </div>
    </div>
  </Scroll>
</template>
<script>
import Trees from 'base/tree/tree'
import Loading from 'base/loading/loading'
import Scroll from 'base/scroll/scroll'
export default {
  data () {
    return {
      load: false,
      data: {},
      chapter: []
    }
  },
  created () {
    this._getStruct()
  },
  methods: {
    _createTree (data) {
      let tempArr = {}
      let hasParent = false
      let len = data.length
      for (let i = 0; i < len; i++) {
        hasParent = false
        let pid = data[i].parentno;
        if (pid == null || pid === '' || pid === 0) {
          tempArr = data[i]
          continue
        }
        for (let j = 0; j < len; j++) {
          if (data[j].sdcno === pid) {
            let parentArr = [];
            if (data[j].children) {
              parentArr = data[j].children
            }
            parentArr.push(data[i])
            data[j].children = parentArr
            hasParent = true
            continue
          }
        }
        if (!hasParent) {
          tempArr.push(data[i])
        }
      }
      return tempArr;
    },
    _getStruct () {
      this.load = true 
      this.$ajx.queryStruct({
        stdid: this.$route.params.fileid,
        keyword: ''
      }).then(res => {
        this.load = false
        if (res.rows[0].errcode === 0) {
          this.data = this._createTree(res.rows[0].data[0].contents)
        }
      })
    }
  },
  components: {
    Trees,
    Scroll,
    Loading
  }
}
</script>
<style lang="stylus">
.structwrap
  position: fixed
  top: 0px
  height 100%
  bottom 0
  width 100%
  z-index 1
  
.treeItems
  padding: 0 10px
  ul 
    list-style: none
    padding-left: 10px
    li
      line-height: 24px
      margin: 2px 0px
      padding: 0
      // border-bottom: 1px solid #eaeaea
      padding: 3px 0
    i
      font-style: normal   
</style>

