import { defineComponent, ref, computed, onMounted, onUpdated, createVNode, isVNode, Fragment } from "vue";
import { ChScrollbar } from "../../scrollbar/index.mjs";
import { range } from "../../../utils/index.mjs";
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const virtualListProps = {
  listHeight: Number,
  listItemCount: {
    type: Number,
    default: 0
  },
  estimatedListItemHeight: {
    type: Number,
    required: true
  }
};
const VirtualList = /* @__PURE__ */ defineComponent({
  name: "VirtualList",
  props: virtualListProps,
  setup(props, {
    slots
  }) {
    const start = ref(0);
    const step = ref(0);
    const end = computed(() => start.value + step.value);
    const translate = ref(0);
    const listHeight = ref(props.estimatedListItemHeight * props.listItemCount);
    const scrollbarEl = ref();
    const realAreaEl = ref();
    const itemInfos = computed(() => range(1, props.listItemCount, 1).map((_, index) => ({
      index,
      height: props.estimatedListItemHeight,
      top: props.estimatedListItemHeight * index,
      bottom: props.estimatedListItemHeight * (index + 1)
    })));
    const updateTranslate = () => {
      translate.value = start.value >= 1 ? itemInfos.value[start.value - 1].bottom : 0;
    };
    const getStart = (scrollTop = 0) => {
      var _a;
      return (_a = itemInfos.value.find((item) => item.bottom > scrollTop)) == null ? void 0 : _a.index;
    };
    const virtualAreaStyle = computed(() => ({
      height: `${listHeight.value}px`
    }));
    const realAreaStyle = computed(() => ({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transform: `translateY(${translate.value}px)`
    }));
    onMounted(() => {
      if (!scrollbarEl.value)
        return;
      const height = props.listHeight ? props.listHeight : scrollbarEl.value.$el.offsetHeight;
      step.value = Math.ceil(height / props.estimatedListItemHeight);
    });
    onUpdated(() => {
      let index = start.value;
      const items = [...realAreaEl.value.children];
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const height = rect.height;
        const diff = itemInfos.value[index].height - height;
        if (diff) {
          itemInfos.value[index].height = height;
          itemInfos.value[index].bottom = itemInfos.value[index].bottom - diff;
          for (let j = index + 1; j < itemInfos.value.length; j++) {
            itemInfos.value[j].top = itemInfos.value[j - 1].bottom;
            itemInfos.value[j].bottom = itemInfos.value[j].bottom - diff;
          }
        }
        if (index < itemInfos.value.length - 1)
          index++;
      });
      listHeight.value = itemInfos.value[itemInfos.value.length - 1].bottom;
      updateTranslate();
    });
    const onScroll = (evt) => {
      const scrollTop = evt.target.scrollTop;
      start.value = getStart(scrollTop);
    };
    const renderVirtualList = () => {
      var _a, _b;
      return createVNode(Fragment, null, [createVNode("div", {
        "style": virtualAreaStyle.value
      }, null), createVNode("div", {
        "ref": realAreaEl,
        "style": realAreaStyle.value
      }, [(_b = (_a = slots.default) == null ? void 0 : _a.call(slots)[0].children) == null ? void 0 : _b.slice(start.value, end.value)])]);
    };
    return () => {
      let _slot;
      return createVNode(ChScrollbar, {
        "ref": scrollbarEl,
        "height": props.listHeight,
        "onScroll": onScroll
      }, _isSlot(_slot = renderVirtualList()) ? _slot : {
        default: () => [_slot]
      });
    };
  }
});
export {
  VirtualList as default
};
//# sourceMappingURL=index.mjs.map
