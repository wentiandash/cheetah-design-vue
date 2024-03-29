import { computed, defineComponent, ref, watchEffect } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import { useExpose } from '../../../composables'

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>
export interface ScrollbarInstance extends HTMLElement {
  scrollto(options: ScrollToOptions): void
}

const scrollbarProps = {
  height: Number,
  minThumbSize: {
    type: Number,
    default: 20,
  },
  behavior: {
    type: String as PropType<ScrollBehavior>,
    default: 'auto',
  },
}
export default defineComponent({
  name: 'Scrollbar',
  props: scrollbarProps,
  emits: ['scroll'],
  setup(props, { slots, emit }) {
    let beforeScrollTop = 0
    let beforeScrollLeft = 0
    const translateX = ref(0)
    const translateY = ref(0)
    const thumbWidth = ref(0)
    const thumbHeight = ref(0)
    const isShowBar = ref(false)
    const isShowBarX = ref(false)
    const isShowBarY = ref(false)
    const wrpperEl = ref<HTMLElement>()
    const thumbXEl = ref<HTMLElement>()
    const thumbYEl = ref<HTMLElement>()

    useExpose({
      scrollto(options: ScrollToOptions) {
        wrpperEl.value?.scrollTo(options)
      },
    })

    const scrollbarHeight = computed(() => {
      if (props.height) {
        return {
          height: `${props.height}px`,
        }
      }
      return {
        height: '100%',
      }
    })

    const updateThumb = () => {
      if (!wrpperEl?.value)
        return

      thumbHeight.value = Math.max(
        wrpperEl.value.offsetHeight ** 2 / wrpperEl.value.scrollHeight,
        props.minThumbSize,
      )
      thumbWidth.value = Math.max(
        wrpperEl.value.offsetWidth ** 2 / wrpperEl.value.scrollWidth,
        props.minThumbSize,
      )
    }

    const scrollX = () => {
      wrpperEl.value?.scrollTo({
        left: wrpperEl.value.scrollWidth * (translateX.value / wrpperEl.value.offsetWidth),
        behavior: props.behavior,
      })
    }

    const scrollY = () => {
      wrpperEl.value?.scrollTo({
        top: wrpperEl.value.scrollHeight * (translateY.value / wrpperEl.value.offsetHeight) - 20,
        behavior: props.behavior,
      })
    }

    watchEffect(() => {
      if (!wrpperEl?.value)
        return

      isShowBarY.value
        = wrpperEl.value.offsetHeight < wrpperEl.value.scrollHeight
      isShowBarX.value
        = wrpperEl.value.offsetWidth < wrpperEl.value.scrollWidth
      updateThumb()
    })

    const onMousedown = (isAxisY: boolean) => {
      return (evt: MouseEvent) => {
        if (!wrpperEl.value)
          return

        let moveStart = 0
        let currentTranslate = 0
        const isTrackEl = evt.target !== thumbXEl.value && evt.target !== thumbYEl.value

        if (isAxisY) {
          currentTranslate = translateY.value
          moveStart = evt.screenY
        }
        else {
          currentTranslate = translateX.value
          moveStart = evt.screenX
        }

        if (isTrackEl) {
          if (isAxisY) {
            translateY.value = evt.offsetY - thumbHeight.value / 2
            return scrollY()
          }
          translateX.value = evt.offsetX - thumbWidth.value / 2
          return scrollX()
        }

        const movelistener = (evt: MouseEvent) => {
          if (!wrpperEl.value)
            return

          const moveEnd = isAxisY ? evt.screenY : evt.screenX
          if (isAxisY) {
            translateY.value = Math.max(
              Math.min(
                currentTranslate + moveEnd - moveStart,
                wrpperEl.value.offsetHeight - thumbHeight.value,
              ),
              0,
            )
            return scrollY()
          }
          translateX.value = Math.max(
            Math.min(
              currentTranslate + moveEnd - moveStart,
              wrpperEl.value.offsetWidth - thumbWidth.value,
            ),
            0,
          )
          return scrollX()
        }

        const defaultSelectstart = document.onselectstart
        const clean = () => {
          document.removeEventListener('mousemove', movelistener)
          document.removeEventListener('mouseup', clean)
          document.onselectstart = defaultSelectstart
        }
        document.addEventListener('mousemove', movelistener)
        document.addEventListener('mouseup', clean)
        document.onselectstart = () => false
      }
    }

    const onScroll = (evt: UIEvent) => {
      const target = evt.target as HTMLElement
      if (beforeScrollTop !== target.scrollTop) {
        translateY.value
          = (target.scrollTop * target.offsetHeight) / target.scrollHeight
        beforeScrollTop = target.scrollTop
      }
      if (beforeScrollLeft !== target.scrollLeft) {
        translateX.value
          = (target.scrollLeft * target.offsetWidth) / target.scrollWidth
        beforeScrollLeft = target.scrollLeft
      }
      updateThumb()
      emit('scroll', evt)
    }

    const onMouseenter = () => {
      isShowBar.value = true
    }

    const onMouseleave = () => {
      isShowBar.value = false
    }

    return () => (
      <div
        class="ch-scrollbar"
        style={scrollbarHeight.value}
        onMouseenter={onMouseenter}
        onMouseleave={onMouseleave}
      >
        <div ref={wrpperEl} class="ch-scrollbar-wrpper" onScroll={onScroll}>
          {slots.default?.()}
        </div>
        <div
          class="ch-scrollbar-bar ch-scrollbar-bar--x"
          onMousedown={onMousedown(false)}
        >
          <div
            ref={thumbXEl}
            v-show={isShowBar.value && isShowBarX.value}
            class="ch-scrollbar-bar-thumb ch-scrollbar-bar-thumb--x"
            style={`width: ${thumbWidth.value}px; transform: translateX(${translateX.value}px)`}
          />
        </div>
        <div
          class="ch-scrollbar-bar ch-scrollbar-bar--y"
          onMousedown={onMousedown(true)}
        >
          <div
            ref={thumbYEl}
            v-show={isShowBar.value && isShowBarY.value}
            class="ch-scrollbar-bar-thumb ch-scrollbar-bar-thumb--y"
            style={`height: ${thumbHeight.value}px; transform: translateY(${translateY.value}px)`}
          />
        </div>
      </div>
    )
  },
})
