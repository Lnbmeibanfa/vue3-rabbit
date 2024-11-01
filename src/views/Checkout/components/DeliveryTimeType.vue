<script setup>
const deliveryTime = [
  {
    id: 'ANYTIME',
    content: '不限送货时间：周一至周日'
  },
  {
    id: 'WEEKDAYS',
    content: '工作日送货：周一至周五'
  },
  {
    id: 'WEEKENDS',
    content: '双休日、假日送货：周六至周日'
  }
]
import { ref } from 'vue'
// 选择送货时间
const curDeliveryTime = ref('ANYTIME')
const changeDeliveryTime = (time) => {
  curDeliveryTime.value = time.id
}
defineExpose({
  curDeliveryTime
})
</script>

<template>
  <h3 class="box-title">配送时间</h3>
  <div class="box-body">
    <a
      v-for="item in deliveryTime"
      :class="{ active: item.id === curDeliveryTime }"
      class="my-btn"
      href="javascript:;"
      @click="changeDeliveryTime(item)"
      >{{ item.content }}</a
    >
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
