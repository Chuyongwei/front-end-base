<template>
  <div class="list">
    <ul>
      <li :key="item.name" v-for="item in list">{{item.name.trim()}} - {{item.addr}}</li>
    </ul>
    {{priceTxt}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
      list: [],
      priceTxt: ''
    }
  },
  async mounted () {
    const { data: { list, price, rate } } = await axios.get('/list')
    this.$data.list = list
    this.$data.priceTxt = navigator.language === 'zh-CN' ? `￥${price * rate}` : `$${price}`
  }
}
</script>

<style lang="css" scoped>
</style>
