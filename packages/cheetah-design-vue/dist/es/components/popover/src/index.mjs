import { defineComponent, ref, computed, watchEffect, watch, createVNode, mergeProps, Transition, Fragment } from "vue";
import { useFloating, inline, offset, flip, shift, arrow, autoUpdate } from "@floating-ui/vue";
import { animation } from "../../../utils/index.mjs";
import { useOutside } from "../../../composables/useOutside.mjs";
import { isBoolean } from "../../../utils/is.mjs";
const popoverProps = {
  title: String,
  content: String,
  placement: {
    type: String,
    default: "right"
  },
  trigger: {
    type: [String, Boolean],
    default: "hover"
  }
};
const Popover = /* @__PURE__ */ defineComponent({
  name: "Popover",
  props: popoverProps,
  setup(props, {
    slots
  }) {
    let flag = true;
    let timer;
    const popperPlacement = ref("");
    const visible = ref(false);
    const reference = ref();
    const popover = ref();
    const popoverArrow = ref();
    const popoverContainer = ref();
    const {
      floatingStyles,
      middlewareData,
      placement
    } = useFloating(reference, popover, {
      placement: props.placement,
      middleware: [inline(), offset(8), flip(), shift({
        crossAxis: true
      }), arrow({
        element: popoverArrow
      })],
      whileElementsMounted(...args) {
        const cleanup = autoUpdate(...args, {
          animationFrame: true
        });
        return cleanup;
      }
    });
    const style = computed(() => {
      return Object.assign(floatingStyles.value, {
        width: "100%",
        zIndex: 999
      });
    });
    watchEffect(() => {
      if (isBoolean(props.trigger))
        visible.value = props.trigger;
    });
    watch(middlewareData, () => {
      if (middlewareData.value.arrow && popoverContainer.value && popoverArrow.value) {
        const {
          x,
          y
        } = middlewareData.value.arrow;
        let arrowPlacement = {};
        switch (placement.value) {
          case "top":
            popperPlacement.value = placement.value;
            arrowPlacement = {
              bottom: "-4px"
            };
            break;
          case "bottom":
            popperPlacement.value = placement.value;
            arrowPlacement = {
              top: "-4px"
            };
            break;
          case "left":
            popperPlacement.value = placement.value;
            arrowPlacement = {
              right: "-4px"
            };
            break;
          case "right":
            popperPlacement.value = placement.value;
            arrowPlacement = {
              left: "-4px"
            };
            break;
        }
        Object.assign(popoverArrow.value.style, {
          left: x != null ? `${x}px` : "",
          top: y != null ? `${y}px` : "",
          ...arrowPlacement
        });
      }
    });
    const onClick = () => {
      if (!isBoolean(props.trigger) && !visible.value)
        visible.value = true;
    };
    const onMouseenter = () => {
      flag = false;
      visible.value = true;
    };
    const onMouseleave = () => {
      flag = true;
      timer = setTimeout(() => {
        clearTimeout(timer);
        visible.value = !flag;
      }, 300);
    };
    const onReferenceClick = (evt) => {
      if (props.trigger === "click") {
        evt.stopPropagation();
        visible.value = !visible.value;
      }
    };
    const eventProps = computed(() => {
      if (props.trigger === "hover") {
        return {
          onMouseenter,
          onMouseleave
        };
      }
      const {
        isOutside
      } = useOutside(popoverContainer, visible);
      watchEffect(() => isOutside.value && (visible.value = false));
      return {
        onClick
      };
    });
    const renderPopover = () => createVNode(Fragment, null, [createVNode("div", null, [props.title]), createVNode("div", null, [props.content])]);
    return () => {
      var _a;
      return createVNode("div", mergeProps({
        "style": "position: relative",
        "ref": popoverContainer
      }, eventProps.value), [createVNode(Transition, {
        "enter-active-class": animation("fadeIn"),
        "leave-active-class": animation("fadeOut"),
        "appear": true
      }, {
        default: () => {
          var _a2, _b;
          return [visible.value && createVNode("div", {
            "id": "ch-popover",
            "ref": popover,
            "style": style.value,
            "data-popper-placement": popperPlacement.value,
            "class": !slots.headless && "ch-popover-content"
          }, [((_a2 = slots.headless) == null ? void 0 : _a2.call(slots)) || ((_b = slots.default) == null ? void 0 : _b.call(slots)) || renderPopover(), slots.headless ? null : createVNode("div", {
            "id": "ch-popover-arrow",
            "ref": popoverArrow,
            "data-popper-arrow": true
          }, null)])];
        }
      }), createVNode("div", {
        "class": "ch-popover-reference",
        "ref": reference,
        "onClick": onReferenceClick
      }, [(_a = slots.reference) == null ? void 0 : _a.call(slots)])]);
    };
  }
});
export {
  Popover as default
};
//# sourceMappingURL=index.mjs.map
