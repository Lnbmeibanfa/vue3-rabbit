import { ref } from 'vue'
import { dayjs } from 'element-plus'
import { computed } from 'vue'
import { onUnmounted } from 'vue'

export function useCountDowm() {
  let timer = null
  const time = ref(0)
  // 格式化时间
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  const start = (curTime) => {
    time.value = curTime
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }
  onUnmounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}
