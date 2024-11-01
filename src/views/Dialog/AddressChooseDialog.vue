<script setup>
import { ref } from 'vue'

defineProps({
  userAddresses: {
    type: Object,
    default: () => {}
  }
})
const emit = defineEmits(['update'])
const activeAddress = ref({})
const toggleFlag = ref(false)
const updateAddress = () => {
  emit('update', activeAddress)
  toggleDialog(false)
}
const selectAddress = (address) => {
  activeAddress.value = address
}
const toggleDialog = (visiable) => {
  toggleFlag.value = visiable
}
defineExpose({
  toggleDialog
})
</script>

<template>
  <div class="addressDialog">
    <el-dialog v-model="toggleFlag" title="切换收货地址" width="30%" center>
      <div class="addressWrapper">
        <div
          class="text item"
          :class="{ active: activeAddress.id === item.id }"
          @click="selectAddress(item)"
          v-for="item in userAddresses"
          :key="item.id"
        >
          <ul>
            <li>
              <span>收<i />货<i />人：</span>{{ item.receiver }}
            </li>
            <li><span>联系方式：</span>{{ item.contact }}</li>
            <li><span>收货地址：</span>{{ item.fullLocation + item.address }}</li>
          </ul>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="toggleDialog(false)">取消</el-button>
          <el-button type="primary" @click="updateAddress">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.addressWrapper {
  max-height: 500px;
  overflow-y: auto;
}
.text {
  flex: 1;
  min-height: 90px;
  display: flex;
  align-items: center;

  &.item {
    border: 1px solid #f5f5f5;
    margin-bottom: 10px;
    cursor: pointer;

    &.active,
    &:hover {
      border-color: $xtxColor;
      background: lighten($xtxColor, 50%);
    }

    > ul {
      padding: 10px;
      font-size: 14px;
      line-height: 30px;
    }
  }
}
</style>
