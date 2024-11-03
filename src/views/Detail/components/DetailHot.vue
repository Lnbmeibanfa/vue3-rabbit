<script setup>
import { useRoute } from 'vue-router'
import { getHotGoodsAPI } from '@/apis/detail'
import { computed, onMounted, ref } from 'vue'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'
// 获取数据
const props = defineProps({
  type: {
    type: Number,
    default: 1
  }
})
const route = useRoute()
const hotGoods = ref([])
const getHotGoods = async () => {
  const res = await getHotGoodsAPI({
    id: route.params.id,
    type: 1
  })
  hotGoods.value = res.result
}
onMounted(() => getHotGoods())
// title
const TITLEMAP = {
  1: '24小时热榜',
  2: '周热榜'
}
const title = computed(() => TITLEMAP[props.type])
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotGoods" :key="item.id">
      <goods-item :good="item" />
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
