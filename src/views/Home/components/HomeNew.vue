<script setup>
import { onMounted, ref } from 'vue'
import { getNewAPI } from '@/apis/Home/new.js'
import HomePanel from './HomePanel.vue'
const newList = ref([])
onMounted(async () => {
  const res = await getNewAPI()
  newList.value = res.result
})
</script>

<template>
  <HomePanel title="新鲜好物" subTitle="超级新鲜" />
  <slot name="main">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink :to='`/detail/${item.id}`'>
          <img v-img-lazy="item.picture" :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </slot>
</template>

<style scoped lang="scss">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all 0.5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>
