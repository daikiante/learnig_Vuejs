<template>
  <div>
    <!-- パスカルケースで登録しているがケバブケースで書いてもOK -->
    <like-header></like-header>
    <!-- 親コンポーネントから子コンポーネントに変数を受け渡す2：属性として定義 -->
    <LikeNumber number="6"></LikeNumber>
    <!-- 動的に扱う場合はv-bind -->
    <LikeNumber v-bind:number="6"></LikeNumber>
  </div>
</template>

<script>
// コンポーネントのローカル登録
import LikeHeader from "./components/LikeHeader.vue"
export default {
  components: {
    // パスカルケースで登録
    LikeHeader: LikeHeader,
  }
}
</script>

<style>

</style>
