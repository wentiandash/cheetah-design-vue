import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VirtualListItem',
  setup(_, { slots }) {
    return () => (
        <div class='ch-virtual-list-item'>
          {slots.default?.()}
        </div>
    )
  },
})
