<template>
<!-- templateのルート要素は一つしか登録できないのでdivで囲ってあげるのが吉 -->
  <div>
    <p>いいね({{ number }})</p>
    <p>いいねを半分にする：{{ halfNumber }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  // 親コンポーネントから子コンポーネントに変数を受け渡す1：配列で変数を定義する
  // props: ["number"],  <- これでも可能
  props: {
    number : {
      type: Number,
      // required LikeNumberコンポーネントを使用する際、number変数が必須となる
      required: true,
      default: 10,
    }
  },
  computed: {
    halfNumber() {
      // 親コンポーネントから子コンポーネントに変数を受け渡す3：propsはthisでアクセスできる
      return this.number / 2
    }
  },
  methods: {
    increment() {
      this.number += 1;
    }
  }
}
</script>


<style scoped>
/* styleタグはなくても良い */

/* scoped -> このコンポーネントの中だけで適用するという意味 */
div {
  border: 1px solid blue;
}
</style>