export default {
  mounted: (el: HTMLElement, binding: any) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('section-enter-active')
          observer.unobserve(el)
        }
      },
      {
        threshold: binding.value?.threshold || 0.2
      }
    )

    observer.observe(el)
  }
} 