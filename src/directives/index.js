import { useIntersectionObserver } from '@vueuse/core'
// 定义懒加载插件
export const LazyPlugin = {
  install(app) {
    // 自定义全局指令
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el: 指令绑定的那个dom元素,这里也就是img
        // binding: binding.value 指令等于后面绑定的表达式的值, 图片的url
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}
