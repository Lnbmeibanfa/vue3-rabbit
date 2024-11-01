<script setup>
const PaymentMethod = [
  {
    id: 'ONLINE',
    content: '在线支付'
  },
  {
    id: 'COD',
    content: '货到付款'
  }
]
import { ref } from 'vue'
// 选择付款方式
const curPaymentMethod = ref('ONLINE')
const changePaymentMethod = (item) => {
  curPaymentMethod.value = item.id
}
defineExpose({
  curPaymentMethod
})
</script>

<template>
  <h3 class="box-title">支付方式</h3>
  <div class="box-body">
    <a
      class="my-btn"
      v-for="item in PaymentMethod"
      href="javascript:;"
      :class="{ active: item.id === curPaymentMethod }"
      @click="changePaymentMethod(item)"
      >{{ item.content }}</a
    >
    <span style="color: #999">货到付款需付5元手续费</span>
  </div>
</template>
<style scoped lang="scss">
.xtx-pay-checkout-page {
  margin-top: 20px;

  .wrapper {
    background: #fff;
    padding: 0 20px;

    .box-title {
      font-size: 16px;
      font-weight: normal;
      padding-left: 10px;
      line-height: 70px;
      border-bottom: 1px solid #f5f5f5;
    }

    .box-body {
      padding: 20px 0;
    }
  }
}
.my-btn {
  width: 228px;
  height: 50px;
  border: 1px solid #e4e4e4;
  text-align: center;
  line-height: 48px;
  margin-right: 25px;
  color: #666666;
  display: inline-block;

  &.active,
  &:hover {
    border-color: $xtxColor;
  }
}
</style>
