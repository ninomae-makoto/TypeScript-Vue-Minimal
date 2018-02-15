<template>
  <div class="space">
    <div>コンポーネントを使用した場合</div>
    <input type="text" v-model="inputValue" v-on:input="inputField()">
    <div class="greeting" >{{inputValue}}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  data() {
    return {
      inputValue: "Hello World",
    }
  },
  methods: {
    inputField() {
      console.log(this.inputValue)
    },
  },
})
</script>

<style>
.space {
  margin-top: 40px;
}
.greeting {
  font-size: 20px;
}
</style>
