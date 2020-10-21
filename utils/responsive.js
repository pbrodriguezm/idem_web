export const isExtraSmall = width => width < 320
export const isMobileLargeOrLarger = width => width >= 425
export const isTabletOrLarger = width => width >= 768
export const isDesktopOrLarger = width => width >= 1024
export const getInnerWidth = _ => window.innerWidth

export const responsiveMixin = {
  data() {
    return {
      isExtraSmall: false,
      isMobileLargeOrLarger: false,
      isTabletOrLarger: false,
      isDesktopOrLarger: false
    }
  },
  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      const innerWidth = getInnerWidth()
      this.isExtraSmall = isExtraSmall(innerWidth)
      this.isMobileLargeOrLarger = isMobileLargeOrLarger(innerWidth)
      this.isTabletOrLarger = isTabletOrLarger(innerWidth)
      this.isDesktopOrLarger = isDesktopOrLarger(innerWidth)
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
