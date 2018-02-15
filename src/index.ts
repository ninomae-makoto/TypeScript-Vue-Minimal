
import Vue from "vue"
import HelloComponent from "./components/Hello.vue"

/// 初期化処理
window.addEventListener("load", (e) => {

  // コンポーネント不使用
  const v = new Vue({
    el: "#app",
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

  // コンポーネント使用
  const v2 = new Vue({
    el: "#app2",
    components: {
      HelloComponent,
    },
  })
})
