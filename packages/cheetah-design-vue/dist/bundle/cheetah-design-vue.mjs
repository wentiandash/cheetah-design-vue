import { defineComponent as L, openBlock as E, createElementBlock as B, normalizeClass as X, provide as pt, renderSlot as ee, ref as w, inject as qe, unref as D, createBlock as Z, createCommentVNode as F, Transition as be, withCtx as Ft, createElementVNode as oe, toDisplayString as ve, computed as _, normalizeStyle as Ge, Fragment as Y, renderList as Be, watchEffect as re, onMounted as Ae, toRaw as jt, createVNode as f, useSlots as Xt, mergeProps as Ee, shallowRef as Yt, watch as ae, getCurrentScope as Ut, onScopeDispose as qt, shallowReadonly as fe, getCurrentInstance as gt, watchPostEffect as Gt, toValue as z, onUnmounted as Kt, withDirectives as U, vShow as q, createTextVNode as Re, Teleport as yt, isVNode as We, render as bt, nextTick as Jt, onUpdated as Qt } from "vue";
const Zt = "Ch";
function R(e) {
  return e.install = (t) => {
    t.component(`${Zt}${e.name}`, e);
  }, e;
}
const ot = (e) => typeof e == "boolean", rt = (e) => typeof e == "number";
function en(e) {
  const t = setTimeout(() => {
    clearTimeout(t), e();
  }, 0);
}
function je(e) {
  return e && e.toLowerCase().replace(/[a-z]{1}/, (t) => t.toUpperCase());
}
function wt(e, t, n) {
  return Array.from(
    { length: (t - e) / n + 1 },
    (l, r) => e + r * n
  );
}
function j(e, t = "faster", n = 1) {
  return `  animate__animated animate__${e}   animate__${t}   animate__${n === "infinite" ? "infinite" : `__repeat-${n}`}`;
}
function tn(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const l of e)
    n.set(l[t], l);
  return Array.from(n.values());
}
const Oe = /* @__PURE__ */ L({
  name: "Icon",
  __name: "index",
  props: {
    name: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = (l) => t("click", l);
    return (l, r) => (E(), B("i", {
      class: X(["bi", `bi-${l.name}`]),
      onClick: n
    }, null, 2));
  }
}), nn = /* @__PURE__ */ L({
  name: "ButtonGroup",
  __name: "index",
  props: {
    mode: { default: "solid" },
    state: { default: "primary" },
    size: { default: "medium" },
    shape: { default: "rounded" },
    vertical: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(e) {
    return pt(xt, e), (n, l) => (E(), B("div", {
      class: X(["ch-button-group", { "is-vertical": n.vertical }])
    }, [
      ee(n.$slots, "default")
    ], 2));
  }
}), xt = Symbol("ch-button-group"), Al = R(nn), St = {
  mode: {
    type: String,
    default: "solid"
  },
  type: {
    type: String,
    default: "button"
  },
  state: {
    type: String,
    default: "primary"
  },
  size: {
    type: String,
    default: "medium"
  },
  shape: {
    type: String,
    default: "rounded"
  },
  iconLeft: String,
  iconRight: String,
  disabled: Boolean
}, ln = ["type"], Ce = /* @__PURE__ */ L({
  name: "Button",
  __name: "index",
  props: St,
  emits: ["click"],
  setup(e) {
    const t = w(), n = qe(xt, null);
    return (l, r) => {
      var o, a, s, i, c;
      return E(), B("button", {
        ref_key: "buttonEl",
        ref: t,
        type: l.type,
        class: X(["ch-button", [
          `ch-button--${((o = D(n)) == null ? void 0 : o.mode) || l.mode}`,
          `ch-button--${((a = D(n)) == null ? void 0 : a.state) || l.state}`,
          `ch-button--${((s = D(n)) == null ? void 0 : s.shape) || l.shape}`,
          `ch-button--${((i = D(n)) == null ? void 0 : i.size) || l.size}`,
          (((c = D(n)) == null ? void 0 : c.disabled) || l.disabled) && "is-disabled"
        ]]),
        onClick: r[0] || (r[0] = (h) => l.$emit("click", h))
      }, [
        l.iconLeft ? (E(), Z(Oe, {
          key: 0,
          class: X({ "icon-left": l.$slots.default }),
          name: l.iconLeft
        }, null, 8, ["class", "name"])) : F("", !0),
        ee(l.$slots, "default"),
        l.iconRight ? (E(), Z(Oe, {
          key: 1,
          class: X({ "icon-right": l.$slots.default }),
          name: l.iconRight
        }, null, 8, ["class", "name"])) : F("", !0)
      ], 10, ln);
    };
  }
}), an = {
  mode: {
    type: String,
    default: "solid"
  },
  state: {
    type: String,
    default: "primary"
  },
  title: String,
  description: String,
  icon: String,
  closable: Boolean
}, on = {
  key: 0,
  class: "ch-alert--title"
}, rn = {
  key: 1,
  class: "ch-alert--description"
}, cn = /* @__PURE__ */ L({
  name: "Alert",
  __name: "index",
  props: an,
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = w(!0), l = w(), r = (o) => {
      n.value = !1, t("close", o);
    };
    return (o, a) => (E(), Z(be, {
      "leave-active-class": D(j)("fadeOut")
    }, {
      default: Ft(() => [
        n.value ? (E(), B("div", {
          key: 0,
          ref_key: "alertEl",
          ref: l,
          class: X(["ch-alert", [`ch-alert--${o.mode}`, `ch-alert--${o.state}`]])
        }, [
          o.icon ? (E(), Z(Oe, {
            key: 0,
            name: o.icon
          }, null, 8, ["name"])) : F("", !0),
          oe("div", null, [
            ee(o.$slots, "title"),
            !o.$slots.title && o.title ? (E(), B("span", on, ve(o.title), 1)) : F("", !0),
            ee(o.$slots, "default"),
            !o.$slots.default && o.description ? (E(), B("div", rn, ve(o.description), 1)) : F("", !0)
          ]),
          o.closable ? (E(), Z(Ce, {
            key: 1,
            mode: "link",
            state: "info",
            "icon-left": "x-lg",
            onClick: r
          })) : F("", !0)
        ], 2)) : F("", !0)
      ]),
      _: 3
    }, 8, ["leave-active-class"]));
  }
}), sn = R(cn), un = {
  state: {
    type: String,
    default: "primary"
  },
  max: {
    type: Number,
    default: 99
  },
  dot: Boolean,
  hidden: Boolean,
  value: [String, Number]
}, dn = { class: "ch-badge-container" }, fn = /* @__PURE__ */ L({
  name: "Badge",
  __name: "index",
  props: un,
  setup(e) {
    const t = e, n = _(() => Number(t.value) >= t.max ? `${t.max}+` : t.value);
    return (l, r) => (E(), B("div", dn, [
      ee(l.$slots, "default"),
      oe("div", {
        class: X(["ch-badge", [
          {
            "is-position": l.$slots.default,
            "is-dot": !l.value || l.dot,
            "is-hidden": l.hidden
          },
          `ch-badge--${l.state}`
        ]])
      }, ve(l.dot ? "" : n.value), 3)
    ]));
  }
}), mn = R(fn), N = R(Ce), $e = R(Oe), hn = {
  key: 0,
  class: "is-indicator"
}, vn = /* @__PURE__ */ L({
  name: "Tag",
  __name: "index",
  props: {
    mode: { default: "solid" },
    shape: { default: "rounded" },
    state: { default: "primary" },
    closable: {},
    indicator: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const n = (l) => {
      t("close", l);
    };
    return (l, r) => (E(), B("div", {
      class: X(["ch-tag", [`ch-tag--${l.mode}`, `ch-tag--${l.shape}`, `ch-tag--${l.state}`]])
    }, [
      l.indicator ? (E(), B("i", hn)) : F("", !0),
      ee(l.$slots, "default"),
      l.closable ? (E(), Z(D($e), {
        key: 1,
        class: "is-closable",
        name: "x-lg",
        onClick: n
      })) : F("", !0)
    ], 2));
  }
}), pn = R(vn), gn = { class: "ch-table-cell" }, yn = {
  key: 0,
  class: "ch-table-header-cell-children"
}, Ct = /* @__PURE__ */ L({
  name: "HeaderCell",
  __name: "header-cell",
  props: {
    data: {}
  },
  setup(e) {
    const t = e, n = _(() => t.data.children ? "" : `width: var(--ch-table-column-${t.data.index}-width);`);
    return (l, r) => (E(), B("div", {
      class: "ch-table-header-cell",
      style: Ge(n.value)
    }, [
      oe("div", gn, ve(l.data.name), 1),
      l.data.children ? (E(), B("div", yn, [
        (E(!0), B(Y, null, Be(l.data.children, (o) => (E(), Z(Ct, {
          key: o.name,
          data: o
        }, null, 8, ["data"]))), 128))
      ])) : F("", !0)
    ], 4));
  }
}), K = w({
  striped: !1,
  width: 0,
  columns: [],
  data: []
}), bn = (e, t) => {
  let n = 0, l = 0;
  re(() => {
    K.value.width = e.width ?? 180, K.value.striped = e.striped ?? !1, K.value.data = e.data;
  }), K.value.columns.length = 0, r(e.header), Ae(() => {
    K.value.columns.forEach((a, s, i) => {
      var c, h, m, u;
      s === i.length - 1 ? (m = t.value) == null || m.style.setProperty(
        `--ch-table-column-${a.index}-width`,
        `${l > ((c = t.value) == null ? void 0 : c.clientWidth) ? K.value.width : ((h = t.value) == null ? void 0 : h.clientWidth) - l - 7}px`
      ) : (l += a.width ?? K.value.width, (u = t.value) == null || u.style.setProperty(`--ch-table-column-${a.index}-width`, `${a.width ?? K.value.width}px`));
    });
  });
  function r(o) {
    o.forEach((a) => {
      a.children ? r(a.children) : (a.index = n++, K.value.columns.push({ index: n, ...a }));
    });
  }
}, wn = (e, t, n) => {
  jt(e);
}, xn = { class: "ch-table-cell" }, Sn = /* @__PURE__ */ L({
  __name: "cell",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (E(), B("div", xn, ve(t.data), 1));
  }
}), kt = /* @__PURE__ */ L({
  name: "Row",
  __name: "row",
  props: {
    data: {}
  },
  setup(e) {
    return (t, n) => (E(!0), B(Y, null, Be(t.data, (l) => (E(), B(Y, {
      key: l[t.key]
    }, [
      oe("div", {
        class: X(["ch-table-row", { "ch-table-row--striped": D(K).striped }])
      }, [
        (E(!0), B(Y, null, Be(D(K).columns, (r, o) => (E(), Z(Sn, {
          key: o,
          data: l[r.key],
          style: Ge(`width: var(--ch-table-column-${o}-width);`),
          onContextmenu: (a) => D(wn)(l, r.key, l[r.key])
        }, null, 8, ["data", "style", "onContextmenu"]))), 128))
      ], 2),
      l.children ? (E(), Z(kt, {
        key: 0,
        data: l.children
      }, null, 8, ["data"])) : F("", !0)
    ], 64))), 128));
  }
}), Cn = { class: "ch-table-body" }, kn = /* @__PURE__ */ L({
  name: "Tables",
  __name: "index",
  props: {
    width: {},
    header: {},
    data: {},
    fixedHeader: { type: Boolean },
    striped: { type: Boolean },
    border: { type: Boolean }
  },
  setup(e) {
    const t = e, n = w();
    return bn(t, n), (l, r) => (E(), B("div", {
      ref_key: "tableEl",
      ref: n,
      class: X(["ch-table", { "ch-table--border": !l.border }])
    }, [
      oe("div", {
        class: X(["ch-table-header", { "ch-table-header--fixed": l.fixedHeader }])
      }, [
        (E(!0), B(Y, null, Be(l.header, (o, a) => (E(), Z(Ct, {
          key: a,
          data: o
        }, null, 8, ["data"]))), 128))
      ], 2),
      oe("div", Cn, [
        f(kt, { data: l.data }, null, 8, ["data"])
      ])
    ], 2));
  }
}), Wl = R(kn), $n = {
  modelValue: {
    type: [String, Number],
    default: ""
  },
  mode: {
    type: String,
    default: "bordered"
  },
  type: {
    type: String,
    default: "text"
  },
  size: {
    type: String,
    default: "medium"
  },
  errorTip: String,
  successTip: String,
  infoTip: String,
  prefixIcon: String,
  suffixIcon: String,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  pattern: RegExp
}, Tn = {
  key: 0,
  class: "__prepend"
}, En = {
  key: 0,
  class: "__prefix"
}, _n = ["type", "value", "placeholder", "disabled"], Ln = { class: "ch-input-tip" }, Pn = {
  key: 1,
  class: "__append"
}, Bn = /* @__PURE__ */ L({
  name: "Input",
  __name: "index",
  props: $n,
  emits: ["update:modelValue", "blur"],
  setup(e, { emit: t }) {
    const n = e, l = Xt(), r = w(!1), o = w("primary"), a = w(n.infoTip), s = w(!1), i = w(), c = _(() => ({
      borderTopLeftRadius: l.prepend && 0,
      borderBottomLeftRadius: l.prepend && 0,
      borderTopRightRadius: l.append && 0,
      borderBottomRightRadius: l.append && 0
    }));
    re(() => {
      const d = n.modelValue.toString();
      d && n.pattern ? (r.value = n.pattern.test(d), r.value ? (o.value = "success", a.value = n.successTip) : r.value || (o.value = "error", a.value = n.errorTip)) : (o.value = "primary", a.value = n.infoTip);
    });
    const h = () => {
      s.value = !0;
    }, m = (d) => {
      var g;
      n.modelValue && d.stopPropagation(), n.clearable && ((g = i.value) == null || g.focus(), t("update:modelValue", ""));
    }, u = () => {
      var d;
      t("update:modelValue", (d = i.value) == null ? void 0 : d.value);
    }, v = (d) => {
      t("blur", d), s.value = !1;
    };
    return (d, g) => (E(), B("div", {
      class: X(["ch-input-container", `ch-input--${d.size}`])
    }, [
      d.$slots.prepend ? (E(), B("div", Tn, [
        ee(d.$slots, "prepend")
      ])) : F("", !0),
      oe("div", {
        class: X(["ch-input-wrapper", [
          `ch-input--${d.mode}`,
          `ch-input--${o.value}`,
          s.value && "is-focus"
        ]]),
        style: Ge(c.value),
        tabindex: "0"
      }, [
        d.prefixIcon ? (E(), B("div", En, [
          f(D($e), { name: d.prefixIcon }, null, 8, ["name"])
        ])) : F("", !0),
        d.$slots.selectWrapper ? ee(d.$slots, "selectWrapper", { key: 2 }) : (E(), B("input", Ee({
          key: 1,
          ref_key: "inputEl",
          ref: i,
          class: "ch-input",
          type: d.type,
          value: d.modelValue,
          placeholder: d.placeholder,
          disabled: d.disabled
        }, d.$attrs, {
          onFocus: h,
          onBlur: v,
          onInput: u
        }), null, 16, _n)),
        d.suffixIcon || d.clearable ? (E(), B("div", {
          key: 3,
          class: "__suffix",
          onClick: m
        }, [
          f(D($e), {
            name: d.modelValue ? "x-circle" : d.suffixIcon ?? ""
          }, null, 8, ["name"])
        ])) : F("", !0)
      ], 6),
      oe("div", Ln, ve(a.value), 1),
      d.$slots.append ? (E(), B("div", Pn, [
        ee(d.$slots, "append")
      ])) : F("", !0)
    ], 2));
  }
}), $t = R(Bn);
function _e(e) {
  return e.split("-")[1];
}
function Ke(e) {
  return e === "y" ? "height" : "width";
}
function te(e) {
  return e.split("-")[0];
}
function we(e) {
  return ["top", "bottom"].includes(te(e)) ? "x" : "y";
}
function it(e, t, n) {
  let { reference: l, floating: r } = e;
  const o = l.x + l.width / 2 - r.width / 2, a = l.y + l.height / 2 - r.height / 2, s = we(t), i = Ke(s), c = l[i] / 2 - r[i] / 2, h = s === "x";
  let m;
  switch (te(t)) {
    case "top":
      m = { x: o, y: l.y - r.height };
      break;
    case "bottom":
      m = { x: o, y: l.y + l.height };
      break;
    case "right":
      m = { x: l.x + l.width, y: a };
      break;
    case "left":
      m = { x: l.x - r.width, y: a };
      break;
    default:
      m = { x: l.x, y: l.y };
  }
  switch (_e(t)) {
    case "start":
      m[s] -= c * (n && h ? -1 : 1);
      break;
    case "end":
      m[s] += c * (n && h ? -1 : 1);
  }
  return m;
}
const Rn = async (e, t, n) => {
  const { placement: l = "bottom", strategy: r = "absolute", middleware: o = [], platform: a } = n, s = o.filter(Boolean), i = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({ reference: e, floating: t, strategy: r }), { x: h, y: m } = it(c, l, i), u = l, v = {}, d = 0;
  for (let g = 0; g < s.length; g++) {
    const { name: p, fn: y } = s[g], { x: b, y: S, data: k, reset: C } = await y({ x: h, y: m, initialPlacement: l, placement: u, strategy: r, middlewareData: v, rects: c, platform: a, elements: { reference: e, floating: t } });
    h = b ?? h, m = S ?? m, v = { ...v, [p]: { ...v[p], ...k } }, C && d <= 50 && (d++, typeof C == "object" && (C.placement && (u = C.placement), C.rects && (c = C.rects === !0 ? await a.getElementRects({ reference: e, floating: t, strategy: r }) : C.rects), { x: h, y: m } = it(c, u, i)), g = -1);
  }
  return { x: h, y: m, placement: u, strategy: r, middlewareData: v };
};
function xe(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Je(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function pe(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Tt(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: l, y: r, platform: o, rects: a, elements: s, strategy: i } = e, { boundary: c = "clippingAncestors", rootBoundary: h = "viewport", elementContext: m = "floating", altBoundary: u = !1, padding: v = 0 } = xe(t, e), d = Je(v), g = s[u ? m === "floating" ? "reference" : "floating" : m], p = pe(await o.getClippingRect({ element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)), boundary: c, rootBoundary: h, strategy: i })), y = m === "floating" ? { ...a.floating, x: l, y: r } : a.reference, b = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), S = await (o.isElement == null ? void 0 : o.isElement(b)) && await (o.getScale == null ? void 0 : o.getScale(b)) || { x: 1, y: 1 }, k = pe(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: y, offsetParent: b, strategy: i }) : y);
  return { top: (p.top - k.top + d.top) / S.y, bottom: (k.bottom - p.bottom + d.bottom) / S.y, left: (p.left - k.left + d.left) / S.x, right: (k.right - p.right + d.right) / S.x };
}
const ge = Math.min, Ve = Math.max;
function Xe(e, t, n) {
  return Ve(e, ge(t, n));
}
const On = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: l, placement: r, rects: o, platform: a, elements: s } = t, { element: i, padding: c = 0 } = xe(e, t) || {};
  if (i == null)
    return {};
  const h = Je(c), m = { x: n, y: l }, u = we(r), v = Ke(u), d = await a.getDimensions(i), g = u === "y", p = g ? "top" : "left", y = g ? "bottom" : "right", b = g ? "clientHeight" : "clientWidth", S = o.reference[v] + o.reference[u] - m[u] - o.floating[v], k = m[u] - o.reference[u], C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i));
  let $ = C ? C[b] : 0;
  $ && await (a.isElement == null ? void 0 : a.isElement(C)) || ($ = s.floating[b] || o.floating[v]);
  const x = S / 2 - k / 2, T = $ / 2 - d[v] / 2 - 1, O = ge(h[p], T), H = ge(h[y], T), P = O, I = $ - d[v] - H, V = $ / 2 - d[v] / 2 + x, A = Xe(P, V, I), W = _e(r) != null && V != A && o.reference[v] / 2 - (V < P ? O : H) - d[v] / 2 < 0 ? V < P ? P - V : I - V : 0;
  return { [u]: m[u] - W, data: { [u]: A, centerOffset: V - A + W } };
} }), Vn = ["top", "right", "bottom", "left"];
Vn.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const Mn = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Me(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Mn[t]);
}
function Dn(e, t, n) {
  n === void 0 && (n = !1);
  const l = _e(e), r = we(e), o = Ke(r);
  let a = r === "x" ? l === (n ? "end" : "start") ? "right" : "left" : l === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (a = Me(a)), { main: a, cross: Me(a) };
}
const Hn = { start: "end", end: "start" };
function Fe(e) {
  return e.replace(/start|end/g, (t) => Hn[t]);
}
const In = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: l, middlewareData: r, rects: o, initialPlacement: a, platform: s, elements: i } = t, { mainAxis: c = !0, crossAxis: h = !0, fallbackPlacements: m, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: v = "none", flipAlignment: d = !0, ...g } = xe(e, t), p = te(l), y = te(a) === a, b = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), S = m || (y || !d ? [Me(a)] : function(P) {
      const I = Me(P);
      return [Fe(P), I, Fe(I)];
    }(a));
    m || v === "none" || S.push(...function(P, I, V, A) {
      const W = _e(P);
      let M = function(ce, se, Wt) {
        const lt = ["left", "right"], at = ["right", "left"], zt = ["top", "bottom"], Nt = ["bottom", "top"];
        switch (ce) {
          case "top":
          case "bottom":
            return Wt ? se ? at : lt : se ? lt : at;
          case "left":
          case "right":
            return se ? zt : Nt;
          default:
            return [];
        }
      }(te(P), V === "start", A);
      return W && (M = M.map((ce) => ce + "-" + W), I && (M = M.concat(M.map(Fe)))), M;
    }(a, d, v, b));
    const k = [a, ...S], C = await Tt(t, g), $ = [];
    let x = ((n = r.flip) == null ? void 0 : n.overflows) || [];
    if (c && $.push(C[p]), h) {
      const { main: P, cross: I } = Dn(l, o, b);
      $.push(C[P], C[I]);
    }
    if (x = [...x, { placement: l, overflows: $ }], !$.every((P) => P <= 0)) {
      var T, O;
      const P = (((T = r.flip) == null ? void 0 : T.index) || 0) + 1, I = k[P];
      if (I)
        return { data: { index: P, overflows: x }, reset: { placement: I } };
      let V = (O = x.filter((A) => A.overflows[0] <= 0).sort((A, W) => A.overflows[1] - W.overflows[1])[0]) == null ? void 0 : O.placement;
      if (!V)
        switch (u) {
          case "bestFit": {
            var H;
            const A = (H = x.map((W) => [W.placement, W.overflows.filter((M) => M > 0).reduce((M, ce) => M + ce, 0)]).sort((W, M) => W[1] - M[1])[0]) == null ? void 0 : H[0];
            A && (V = A);
            break;
          }
          case "initialPlacement":
            V = a;
        }
      if (l !== V)
        return { reset: { placement: V } };
    }
    return {};
  } };
};
function ct(e) {
  const t = ge(...e.map((l) => l.left)), n = ge(...e.map((l) => l.top));
  return { x: t, y: n, width: Ve(...e.map((l) => l.right)) - t, height: Ve(...e.map((l) => l.bottom)) - n };
}
const An = function(e) {
  return e === void 0 && (e = {}), { name: "inline", options: e, async fn(t) {
    const { placement: n, elements: l, rects: r, platform: o, strategy: a } = t, { padding: s = 2, x: i, y: c } = xe(e, t), h = Array.from(await (o.getClientRects == null ? void 0 : o.getClientRects(l.reference)) || []), m = function(g) {
      const p = g.slice().sort((S, k) => S.y - k.y), y = [];
      let b = null;
      for (let S = 0; S < p.length; S++) {
        const k = p[S];
        !b || k.y - b.y > b.height / 2 ? y.push([k]) : y[y.length - 1].push(k), b = k;
      }
      return y.map((S) => pe(ct(S)));
    }(h), u = pe(ct(h)), v = Je(s), d = await o.getElementRects({ reference: { getBoundingClientRect: function() {
      if (m.length === 2 && m[0].left > m[1].right && i != null && c != null)
        return m.find((g) => i > g.left - v.left && i < g.right + v.right && c > g.top - v.top && c < g.bottom + v.bottom) || u;
      if (m.length >= 2) {
        if (we(n) === "x") {
          const C = m[0], $ = m[m.length - 1], x = te(n) === "top", T = C.top, O = $.bottom, H = x ? C.left : $.left, P = x ? C.right : $.right;
          return { top: T, bottom: O, left: H, right: P, width: P - H, height: O - T, x: H, y: T };
        }
        const g = te(n) === "left", p = Ve(...m.map((C) => C.right)), y = ge(...m.map((C) => C.left)), b = m.filter((C) => g ? C.left === y : C.right === p), S = b[0].top, k = b[b.length - 1].bottom;
        return { top: S, bottom: k, left: y, right: p, width: p - y, height: k - S, x: y, y: S };
      }
      return u;
    } }, floating: l.floating, strategy: a });
    return r.reference.x !== d.reference.x || r.reference.y !== d.reference.y || r.reference.width !== d.reference.width || r.reference.height !== d.reference.height ? { reset: { rects: d } } : {};
  } };
}, Wn = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: l } = t, r = await async function(o, a) {
      const { placement: s, platform: i, elements: c } = o, h = await (i.isRTL == null ? void 0 : i.isRTL(c.floating)), m = te(s), u = _e(s), v = we(s) === "x", d = ["left", "top"].includes(m) ? -1 : 1, g = h && v ? -1 : 1, p = xe(a, o);
      let { mainAxis: y, crossAxis: b, alignmentAxis: S } = typeof p == "number" ? { mainAxis: p, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
      return u && typeof S == "number" && (b = u === "end" ? -1 * S : S), v ? { x: b * g, y: y * d } : { x: y * d, y: b * g };
    }(t, e);
    return { x: n + r.x, y: l + r.y, data: r };
  } };
};
function zn(e) {
  return e === "x" ? "y" : "x";
}
const Nn = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: l, placement: r } = t, { mainAxis: o = !0, crossAxis: a = !1, limiter: s = { fn: (p) => {
      let { x: y, y: b } = p;
      return { x: y, y: b };
    } }, ...i } = xe(e, t), c = { x: n, y: l }, h = await Tt(t, i), m = we(te(r)), u = zn(m);
    let v = c[m], d = c[u];
    if (o) {
      const p = m === "y" ? "bottom" : "right";
      v = Xe(v + h[m === "y" ? "top" : "left"], v, v - h[p]);
    }
    if (a) {
      const p = u === "y" ? "bottom" : "right";
      d = Xe(d + h[u === "y" ? "top" : "left"], d, d - h[p]);
    }
    const g = s.fn({ ...t, [m]: v, [u]: d });
    return { ...g, data: { x: g.x - n, y: g.y - l } };
  } };
};
function G(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function J(e) {
  return G(e).getComputedStyle(e);
}
function Et(e) {
  return e instanceof G(e).Node;
}
function ie(e) {
  return Et(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Q(e) {
  return e instanceof G(e).HTMLElement;
}
function ne(e) {
  return e instanceof G(e).Element;
}
function st(e) {
  return typeof ShadowRoot < "u" && (e instanceof G(e).ShadowRoot || e instanceof ShadowRoot);
}
function Te(e) {
  const { overflow: t, overflowX: n, overflowY: l, display: r } = J(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + l + n) && !["inline", "contents"].includes(r);
}
function Fn(e) {
  return ["table", "td", "th"].includes(ie(e));
}
function Ye(e) {
  const t = Qe(), n = J(e);
  return n.transform !== "none" || n.perspective !== "none" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((l) => (n.willChange || "").includes(l)) || ["paint", "layout", "strict", "content"].some((l) => (n.contain || "").includes(l));
}
function Qe() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function ze(e) {
  return ["html", "body", "#document"].includes(ie(e));
}
const ut = Math.min, ke = Math.max, De = Math.round, Pe = Math.floor, ue = (e) => ({ x: e, y: e });
function _t(e) {
  const t = J(e);
  let n = parseFloat(t.width) || 0, l = parseFloat(t.height) || 0;
  const r = Q(e), o = r ? e.offsetWidth : n, a = r ? e.offsetHeight : l, s = De(n) !== o || De(l) !== a;
  return s && (n = o, l = a), { width: n, height: l, $: s };
}
function Ze(e) {
  return ne(e) ? e : e.contextElement;
}
function he(e) {
  const t = Ze(e);
  if (!Q(t))
    return ue(1);
  const n = t.getBoundingClientRect(), { width: l, height: r, $: o } = _t(t);
  let a = (o ? De(n.width) : n.width) / l, s = (o ? De(n.height) : n.height) / r;
  return a && Number.isFinite(a) || (a = 1), s && Number.isFinite(s) || (s = 1), { x: a, y: s };
}
const dt = ue(0);
function Lt(e, t, n) {
  var l, r;
  if (t === void 0 && (t = !0), !Qe())
    return dt;
  const o = e ? G(e) : window;
  return !n || t && n !== o ? dt : { x: ((l = o.visualViewport) == null ? void 0 : l.offsetLeft) || 0, y: ((r = o.visualViewport) == null ? void 0 : r.offsetTop) || 0 };
}
function de(e, t, n, l) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = Ze(e);
  let a = ue(1);
  t && (l ? ne(l) && (a = he(l)) : a = he(e));
  const s = Lt(o, n, l);
  let i = (r.left + s.x) / a.x, c = (r.top + s.y) / a.y, h = r.width / a.x, m = r.height / a.y;
  if (o) {
    const u = G(o), v = l && ne(l) ? G(l) : l;
    let d = u.frameElement;
    for (; d && l && v !== u; ) {
      const g = he(d), p = d.getBoundingClientRect(), y = getComputedStyle(d), b = p.left + (d.clientLeft + parseFloat(y.paddingLeft)) * g.x, S = p.top + (d.clientTop + parseFloat(y.paddingTop)) * g.y;
      i *= g.x, c *= g.y, h *= g.x, m *= g.y, i += b, c += S, d = G(d).frameElement;
    }
  }
  return pe({ width: h, height: m, x: i, y: c });
}
function le(e) {
  return ((Et(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Ne(e) {
  return ne(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Pt(e) {
  return de(le(e)).left + Ne(e).scrollLeft;
}
function ye(e) {
  if (ie(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || st(e) && e.host || le(e);
  return st(t) ? t.host : t;
}
function Bt(e) {
  const t = ye(e);
  return ze(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Q(t) && Te(t) ? t : Bt(t);
}
function He(e, t) {
  var n;
  t === void 0 && (t = []);
  const l = Bt(e), r = l === ((n = e.ownerDocument) == null ? void 0 : n.body), o = G(l);
  return r ? t.concat(o, o.visualViewport || [], Te(l) ? l : []) : t.concat(l, He(l));
}
function ft(e, t, n) {
  let l;
  if (t === "viewport")
    l = function(r, o) {
      const a = G(r), s = le(r), i = a.visualViewport;
      let c = s.clientWidth, h = s.clientHeight, m = 0, u = 0;
      if (i) {
        c = i.width, h = i.height;
        const v = Qe();
        (!v || v && o === "fixed") && (m = i.offsetLeft, u = i.offsetTop);
      }
      return { width: c, height: h, x: m, y: u };
    }(e, n);
  else if (t === "document")
    l = function(r) {
      const o = le(r), a = Ne(r), s = r.ownerDocument.body, i = ke(o.scrollWidth, o.clientWidth, s.scrollWidth, s.clientWidth), c = ke(o.scrollHeight, o.clientHeight, s.scrollHeight, s.clientHeight);
      let h = -a.scrollLeft + Pt(r);
      const m = -a.scrollTop;
      return J(s).direction === "rtl" && (h += ke(o.clientWidth, s.clientWidth) - i), { width: i, height: c, x: h, y: m };
    }(le(e));
  else if (ne(t))
    l = function(r, o) {
      const a = de(r, !0, o === "fixed"), s = a.top + r.clientTop, i = a.left + r.clientLeft, c = Q(r) ? he(r) : ue(1);
      return { width: r.clientWidth * c.x, height: r.clientHeight * c.y, x: i * c.x, y: s * c.y };
    }(t, n);
  else {
    const r = Lt(e);
    l = { ...t, x: t.x - r.x, y: t.y - r.y };
  }
  return pe(l);
}
function Rt(e, t) {
  const n = ye(e);
  return !(n === t || !ne(n) || ze(n)) && (J(n).position === "fixed" || Rt(n, t));
}
function mt(e, t) {
  return Q(e) && J(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function ht(e, t) {
  const n = G(e);
  if (!Q(e))
    return n;
  let l = mt(e, t);
  for (; l && Fn(l) && J(l).position === "static"; )
    l = mt(l, t);
  return l && (ie(l) === "html" || ie(l) === "body" && J(l).position === "static" && !Ye(l)) ? n : l || function(r) {
    let o = ye(r);
    for (; Q(o) && !ze(o); ) {
      if (Ye(o))
        return o;
      o = ye(o);
    }
    return null;
  }(e) || n;
}
function jn(e, t, n) {
  const l = Q(t), r = le(t), o = n === "fixed", a = de(e, !0, o, t);
  let s = { scrollLeft: 0, scrollTop: 0 };
  const i = ue(0);
  if (l || !l && !o)
    if ((ie(t) !== "body" || Te(r)) && (s = Ne(t)), Q(t)) {
      const c = de(t, !0, o, t);
      i.x = c.x + t.clientLeft, i.y = c.y + t.clientTop;
    } else
      r && (i.x = Pt(r));
  return { x: a.left + s.scrollLeft - i.x, y: a.top + s.scrollTop - i.y, width: a.width, height: a.height };
}
const Xn = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: l, strategy: r } = e;
  const o = n === "clippingAncestors" ? function(c, h) {
    const m = h.get(c);
    if (m)
      return m;
    let u = He(c).filter((p) => ne(p) && ie(p) !== "body"), v = null;
    const d = J(c).position === "fixed";
    let g = d ? ye(c) : c;
    for (; ne(g) && !ze(g); ) {
      const p = J(g), y = Ye(g);
      y || p.position !== "fixed" || (v = null), (d ? !y && !v : !y && p.position === "static" && v && ["absolute", "fixed"].includes(v.position) || Te(g) && !y && Rt(c, g)) ? u = u.filter((b) => b !== g) : v = p, g = ye(g);
    }
    return h.set(c, u), u;
  }(t, this._c) : [].concat(n), a = [...o, l], s = a[0], i = a.reduce((c, h) => {
    const m = ft(t, h, r);
    return c.top = ke(m.top, c.top), c.right = ut(m.right, c.right), c.bottom = ut(m.bottom, c.bottom), c.left = ke(m.left, c.left), c;
  }, ft(t, s, r));
  return { width: i.right - i.left, height: i.bottom - i.top, x: i.left, y: i.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: l } = e;
  const r = Q(n), o = le(n);
  if (n === o)
    return t;
  let a = { scrollLeft: 0, scrollTop: 0 }, s = ue(1);
  const i = ue(0);
  if ((r || !r && l !== "fixed") && ((ie(n) !== "body" || Te(o)) && (a = Ne(n)), Q(n))) {
    const c = de(n);
    s = he(n), i.x = c.x + n.clientLeft, i.y = c.y + n.clientTop;
  }
  return { width: t.width * s.x, height: t.height * s.y, x: t.x * s.x - a.scrollLeft * s.x + i.x, y: t.y * s.y - a.scrollTop * s.y + i.y };
}, isElement: ne, getDimensions: function(e) {
  return _t(e);
}, getOffsetParent: ht, getDocumentElement: le, getScale: he, async getElementRects(e) {
  let { reference: t, floating: n, strategy: l } = e;
  const r = this.getOffsetParent || ht, o = this.getDimensions;
  return { reference: jn(t, await r(n), l), floating: { x: 0, y: 0, ...await o(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => J(e).direction === "rtl" };
function Yn(e, t, n, l) {
  l === void 0 && (l = {});
  const { ancestorScroll: r = !0, ancestorResize: o = !0, elementResize: a = !0, layoutShift: s = typeof IntersectionObserver == "function", animationFrame: i = !1 } = l, c = Ze(e), h = r || o ? [...c ? He(c) : [], ...He(t)] : [];
  h.forEach((g) => {
    r && g.addEventListener("scroll", n, { passive: !0 }), o && g.addEventListener("resize", n);
  });
  const m = c && s ? function(g, p) {
    let y, b = null;
    const S = le(g);
    function k() {
      clearTimeout(y), b && b.disconnect(), b = null;
    }
    return function C($, x) {
      $ === void 0 && ($ = !1), x === void 0 && (x = 1), k();
      const { left: T, top: O, width: H, height: P } = g.getBoundingClientRect();
      if ($ || p(), !H || !P)
        return;
      const I = Pe(O), V = Pe(S.clientWidth - (T + H)), A = Pe(S.clientHeight - (O + P)), W = Pe(T);
      let M = !0;
      b = new IntersectionObserver((ce) => {
        const se = ce[0].intersectionRatio;
        if (se !== x) {
          if (!M)
            return C();
          se === 0 ? y = setTimeout(() => {
            C(!1, 1e-7);
          }, 100) : C(!1, se);
        }
        M = !1;
      }, { rootMargin: -I + "px " + -V + "px " + -A + "px " + -W + "px", threshold: x }), b.observe(g);
    }(!0), k;
  }(c, n) : null;
  let u, v = null;
  a && (v = new ResizeObserver(n), c && !i && v.observe(c), v.observe(t));
  let d = i ? de(e) : null;
  return i && function g() {
    const p = de(e);
    !d || p.x === d.x && p.y === d.y && p.width === d.width && p.height === d.height || n(), d = p, u = requestAnimationFrame(g);
  }(), n(), () => {
    h.forEach((g) => {
      r && g.removeEventListener("scroll", n), o && g.removeEventListener("resize", n);
    }), m && m(), v && v.disconnect(), v = null, i && cancelAnimationFrame(u);
  };
}
const Un = (e, t, n) => {
  const l = /* @__PURE__ */ new Map(), r = { platform: Xn, ...n }, o = { ...r.platform, _c: l };
  return Rn(e, t, { ...r, platform: o });
};
function Ue(e) {
  var t;
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
function qn(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const n = Ue(D(e.element));
      return n == null ? {} : On({
        element: n,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Ot(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function vt(e, t) {
  const n = Ot(e);
  return Math.round(t * n) / n;
}
function Gn(e, t, n) {
  n === void 0 && (n = {});
  const l = n.whileElementsMounted, r = _(() => {
    var x;
    return (x = D(n.open)) != null ? x : !0;
  }), o = _(() => D(n.middleware)), a = _(() => {
    var x;
    return (x = D(n.placement)) != null ? x : "bottom";
  }), s = _(() => {
    var x;
    return (x = D(n.strategy)) != null ? x : "absolute";
  }), i = _(() => {
    var x;
    return (x = D(n.transform)) != null ? x : !0;
  }), c = _(() => Ue(e.value)), h = _(() => Ue(t.value)), m = w(0), u = w(0), v = w(s.value), d = w(a.value), g = Yt({}), p = w(!1), y = _(() => {
    const x = {
      position: v.value,
      left: "0",
      top: "0"
    };
    if (!h.value)
      return x;
    const T = vt(h.value, m.value), O = vt(h.value, u.value);
    return i.value ? {
      ...x,
      transform: "translate(" + T + "px, " + O + "px)",
      ...Ot(h.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: v.value,
      left: T + "px",
      top: O + "px"
    };
  });
  let b;
  function S() {
    c.value == null || h.value == null || Un(c.value, h.value, {
      middleware: o.value,
      placement: a.value,
      strategy: s.value
    }).then((x) => {
      m.value = x.x, u.value = x.y, v.value = x.strategy, d.value = x.placement, g.value = x.middlewareData, p.value = !0;
    });
  }
  function k() {
    typeof b == "function" && (b(), b = void 0);
  }
  function C() {
    if (k(), l === void 0) {
      S();
      return;
    }
    if (c.value != null && h.value != null) {
      b = l(c.value, h.value, S);
      return;
    }
  }
  function $() {
    r.value || (p.value = !1);
  }
  return ae([o, a, s], S, {
    flush: "sync"
  }), ae([c, h], C, {
    flush: "sync"
  }), ae(r, $, {
    flush: "sync"
  }), Ut() && qt(k), {
    x: fe(m),
    y: fe(u),
    strategy: fe(v),
    placement: fe(d),
    middlewareData: fe(g),
    isPositioned: fe(p),
    floatingStyles: y,
    update: S
  };
}
function et() {
  const e = w(!1);
  return {
    state: e,
    toggle: () => e.value = !e.value,
    open: () => e.value = !0,
    close: (a) => {
      a != null && a.delay ? setTimeout(() => e.value = !1, a.delay) : e.value = !1;
    },
    onOpen: (a) => ae(e, () => e.value && (a == null ? void 0 : a())),
    onClose: (a) => ae(e, () => e.value || (a == null ? void 0 : a()))
  };
}
function Le(e) {
  const t = gt();
  t && Object.assign(t.proxy, e);
}
function tt(e, t) {
  const n = w(!1), l = (r) => {
    n.value = !1, e.value && (n.value = !e.value.contains(r.target));
  };
  return Gt(() => {
    t.value ? en(() => document.addEventListener("click", l)) : document.removeEventListener("click", l);
  }), {
    isOutside: n
  };
}
function Vt(e) {
  const t = w(), n = et(), { isOutside: l } = tt(t, n.state);
  return ae(n.state, (r) => e(r ? "open" : "close")), re(() => l.value && (n.state.value = !1)), Le(n), {
    modal: Object.assign(t, n)
  };
}
function Mt(e = {}) {
  const {
    min: t = -1 / 0,
    max: n = 1 / 0,
    initial: l = 0
  } = e, r = w(l);
  return {
    count: r,
    add: (i = 1) => {
      if (rt(z(n)) && r.value < z(n)) {
        if (r.value + i > z(n))
          return r.value = z(n);
        r.value += i;
      }
    },
    sub: (i = 1) => {
      if (rt(z(t)) && r.value > z(t)) {
        if (r.value - i < z(t))
          return r.value = z(t);
        r.value -= i;
      }
    },
    update: (i) => {
      i >= z(t) && i <= z(n) && (r.value = i);
    }
  };
}
function Dt(e, t) {
  const n = _({
    get() {
      return e;
    },
    set(c) {
      t("update:modelValue", c);
    }
  }), {
    count: l,
    add: r,
    sub: o,
    update: a
  } = Mt({
    min: 0,
    max: _(() => n.value.length - 1)
  });
  return {
    steps: n,
    current: l,
    next: r,
    prev: o,
    toggle: a,
    add: (c) => {
      var h;
      (h = n.value) == null || h.push(c);
    },
    sub: (c) => {
      var h;
      (h = n.value) == null || h.splice(c, 1);
    }
  };
}
function Kn(e, t = {}) {
  const {
    target: n = document.documentElement,
    translateX: l = 0,
    translateY: r = 0
  } = t;
  let o, a;
  const s = w(), i = w({ x: 0, y: 0 });
  Ae(() => {
    o = z(e), a = z(n), !(!o || !a) && (o.addEventListener("dragstart", c), a.addEventListener("dragenter", h), a.addEventListener("dragover", m), a.addEventListener("dragleave", u), a.addEventListener("drop", v));
  }), Kt(() => {
    !o || !a || (o.removeEventListener("dragstart", c), a.removeEventListener("dragenter", h), a.removeEventListener("dragover", m), a.removeEventListener("dragleave", u), a.removeEventListener("drop", v));
  });
  function c(d) {
    s.value = o == null ? void 0 : o.getBoundingClientRect(), i.value.x = d.clientX, i.value.y = d.clientY;
  }
  function h(d) {
    d.dataTransfer.dropEffect = "move";
  }
  function m(d) {
    d.preventDefault();
  }
  function u(d) {
    d.dataTransfer.dropEffect = "none";
  }
  function v(d) {
    !s.value || !o || (console.log(z(l)), o.style.position = "absolute", o.style.top = `${s.value.y + z(r) + d.clientY - i.value.y}px`, o.style.left = `${s.value.x + z(l) + d.clientX - i.value.x}px`);
  }
}
const Jn = {
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
}, Qn = /* @__PURE__ */ L({
  name: "Popover",
  props: Jn,
  setup(e, {
    slots: t
  }) {
    let n = !0, l;
    const r = w(""), o = w(!1), a = w(), s = w(), i = w(), c = w(), {
      floatingStyles: h,
      middlewareData: m,
      placement: u
    } = Gn(a, s, {
      placement: e.placement,
      middleware: [An(), Wn(8), In(), Nn({
        crossAxis: !0
      }), qn({
        element: i
      })],
      whileElementsMounted(...k) {
        return Yn(...k, {
          animationFrame: !0
        });
      }
    }), v = _(() => Object.assign(h.value, {
      width: "100%",
      zIndex: 999
    }));
    re(() => {
      ot(e.trigger) && (o.value = e.trigger);
    }), ae(m, () => {
      if (m.value.arrow && c.value && i.value) {
        const {
          x: k,
          y: C
        } = m.value.arrow;
        let $ = {};
        switch (u.value) {
          case "top":
            r.value = u.value, $ = {
              bottom: "-4px"
            };
            break;
          case "bottom":
            r.value = u.value, $ = {
              top: "-4px"
            };
            break;
          case "left":
            r.value = u.value, $ = {
              right: "-4px"
            };
            break;
          case "right":
            r.value = u.value, $ = {
              left: "-4px"
            };
            break;
        }
        Object.assign(i.value.style, {
          left: k != null ? `${k}px` : "",
          top: C != null ? `${C}px` : "",
          ...$
        });
      }
    });
    const d = () => {
      !ot(e.trigger) && !o.value && (o.value = !0);
    }, g = () => {
      n = !1, o.value = !0;
    }, p = () => {
      n = !0, l = setTimeout(() => {
        clearTimeout(l), o.value = !n;
      }, 300);
    }, y = (k) => {
      e.trigger === "click" && (k.stopPropagation(), o.value = !o.value);
    }, b = _(() => {
      if (e.trigger === "hover")
        return {
          onMouseenter: g,
          onMouseleave: p
        };
      const {
        isOutside: k
      } = tt(c, o);
      return re(() => k.value && (o.value = !1)), {
        onClick: d
      };
    }), S = () => f(Y, null, [f("div", null, [e.title]), f("div", null, [e.content])]);
    return () => {
      var k;
      return f("div", Ee({
        style: "position: relative",
        ref: c
      }, b.value), [f(be, {
        "enter-active-class": j("fadeIn"),
        "leave-active-class": j("fadeOut"),
        appear: !0
      }, {
        default: () => {
          var C, $;
          return [o.value && f("div", {
            id: "ch-popover",
            ref: s,
            style: v.value,
            "data-popper-placement": r.value,
            class: !t.headless && "ch-popover-content"
          }, [((C = t.headless) == null ? void 0 : C.call(t)) || (($ = t.default) == null ? void 0 : $.call(t)) || S(), t.headless ? null : f("div", {
            id: "ch-popover-arrow",
            ref: i,
            "data-popper-arrow": !0
          }, null)])];
        }
      }), f("div", {
        class: "ch-popover-reference",
        ref: a,
        onClick: y
      }, [(k = t.reference) == null ? void 0 : k.call(t)])]);
    };
  }
}), Ht = R(Qn), Zn = {
  placement: {
    type: String,
    default: "bottom"
  },
  trigger: {
    type: [String, Boolean],
    default: "hover"
  },
  data: {
    type: Array,
    default: () => []
  }
}, el = /* @__PURE__ */ L({
  name: "Dropdown",
  props: Zn,
  emits: ["click"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const l = (a) => (s) => {
      n("click", a), a.callback && a.callback(), a.children || (s.stopPropagation(), document.documentElement.click());
    }, r = (a) => f(Y, null, [a.title && f("div", {
      class: "ch-dropdown-title"
    }, [a.title]), f(N, Ee({
      mode: "ghost",
      size: "small",
      state: "info",
      disabled: a.disabled,
      onClick: l(a)
    }, a.button), {
      default: () => {
        var s;
        return [f("div", {
          class: "ch-dropdown-button"
        }, [a.name, ((s = a.button) == null ? void 0 : s.badge) && f(mn, a.button.badge, null)])];
      }
    }), a.divider && f("div", {
      class: "ch-dropdown-divider"
    }, null)]), o = () => f(Y, null, [U(f("div", {
      class: "ch-dropdown-menu"
    }, [e.data.map((a) => a.children ? f(It, {
      class: "ch-dropdown-child",
      data: a.children,
      trigger: e.trigger,
      placement: "right-start"
    }, {
      reference: () => r(a)
    }) : r(a))]), [[q, e.data.length]]), U(f("div", {
      class: "ch-dropdown-menu"
    }, [Re("No Data")]), [[q, !e.data.length]])]);
    return () => f(Ht, e, {
      reference: t.reference,
      headless: t.headless || o
    });
  }
}), It = R(el), tl = {
  modelValue: {
    type: Object,
    default: () => ({})
  },
  options: {
    type: Array,
    default: []
  },
  mode: {
    type: String,
    default: "bordered"
  },
  size: {
    type: String,
    default: "medium"
  },
  infoTip: {
    type: String,
    default: ""
  },
  prefixIcon: String,
  suffixIcon: String,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  multiple: Boolean
}, nl = /* @__PURE__ */ L({
  name: "Select",
  props: tl,
  emits: ["update:modelValue"],
  setup(e, {
    slots: t
  }) {
    const n = w(!1), l = w(""), r = w(), o = w(), a = w([]);
    Le({
      selectValue: a
    });
    const {
      isOutside: s
    } = tt(r, n);
    re(() => s.value && (n.value = !1)), ae(l, (v) => {
      v || (a.value.length = 0);
    });
    const i = () => {
      n.value = !0;
    }, c = (v) => {
      e.multiple ? (a.value.push(v), a.value = tn(a.value, "name"), l.value = a.value.map((d) => d.name).join()) : (a.value = [v], l.value = v.name);
    }, h = (v) => (d) => {
      d.stopPropagation(), a.value.splice(v, 1), l.value = a.value.map((g) => g.name).join();
    }, m = w({
      mode: e.mode,
      size: e.size,
      infoTip: e.infoTip,
      prefixIcon: e.prefixIcon,
      suffixIcon: e.suffixIcon,
      placeholder: e.placeholder,
      disabled: e.disabled,
      clearable: e.clearable
    }), u = _(() => {
      if (!e.multiple)
        return t;
      const v = {
        display: "inline-flex",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "5px 10px",
        gap: "5px",
        width: "100%",
        height: "100%",
        cursor: "pointer"
      }, d = {
        color: "var(--ch-input-ph-text-color)"
      };
      return {
        ...t,
        selectWrapper() {
          return f("div", {
            style: v
          }, [U(f("div", {
            style: d
          }, [e.placeholder]), [[q, !a.value.length && e.placeholder]]), a.value.map((g, p) => f(pn, {
            mode: "outline",
            state: "info",
            closable: !0,
            onClose: h(p)
          }, {
            default: () => [g.name]
          }))]);
        }
      };
    });
    return () => f(It, {
      trigger: n.value,
      data: e.options,
      modelValue: o.value,
      "onUpdate:modelValue": (v) => o.value = v,
      onClick: c
    }, {
      reference() {
        return f("div", {
          ref: r,
          onClick: i
        }, [f($t, Ee(m.value, {
          modelValue: l.value,
          "onUpdate:modelValue": (v) => l.value = v,
          "suffix-icon": "chevron-down"
        }), u.value)]);
      }
    });
  }
}), zl = R(nl), ll = {
  title: String,
  cancelButtonText: String,
  confirmButtonText: String,
  draggable: Boolean,
  shakeOff: {
    type: Array,
    default: () => []
  }
}, al = /* @__PURE__ */ L({
  name: "Modal",
  props: ll,
  emits: ["open", "close", "cancel", "confirm"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const {
      modal: l
    } = Vt(n);
    Kn(l, {
      translateX: _(() => l.state.value ? l.value.clientWidth / 2 : 0)
    });
    const r = (u) => e.shakeOff.includes(u), o = () => l.close() && n("cancel"), a = () => n("confirm"), s = () => l.close(), i = () => {
      if (!r("header") && e.title)
        return f("header", null, [f("h3", null, [e.title])]);
    }, c = () => {
      if (r("footer"))
        return;
      const u = [];
      return !r("cancel-button") && e.cancelButtonText && u.push(f(Ce, {
        mode: "outline",
        onClick: o
      }, {
        default: () => [e.cancelButtonText]
      })), !r("confirm-button") && e.confirmButtonText && u.push(f(Ce, {
        mode: "solid",
        onClick: a
      }, {
        default: () => [e.confirmButtonText]
      })), f("footer", null, [f("div", {
        class: "ch-modal-button"
      }, [u])]);
    }, h = () => {
      var d;
      const u = () => {
        if (!r("mask"))
          return f("div", {
            class: "ch-mask"
          }, null);
      }, v = () => {
        if (!r("x-button"))
          return f(Ce, {
            class: "ch-modal-x",
            mode: "link",
            state: "info",
            "icon-left": "x-lg",
            onClick: s
          }, null);
      };
      return f(Y, null, [u(), f("div", {
        ref: l,
        class: "ch-modal",
        draggable: e.draggable
      }, [v(), i(), f("section", null, [(d = t.default) == null ? void 0 : d.call(t)]), c()])]);
    }, m = () => {
      var u;
      return f("div", {
        ref: l
      }, [(u = t.headless) == null ? void 0 : u.call(t)]);
    };
    return () => f(yt, {
      to: "body"
    }, {
      default: () => [f(be, {
        "enter-active-class": j("fadeIn"),
        "leave-active-class": j("fadeOut"),
        appear: !0
      }, {
        default: () => [U(f("div", {
          class: "ch-modal-container"
        }, [t.headless ? m() : h()]), [[q, l.state.value]])]
      })]
    });
  }
}), Nl = R(al), ol = {
  shakeOff: {
    type: Array,
    default: () => []
  },
  placement: {
    type: String,
    default: "left"
  },
  fullscreen: Boolean
}, rl = /* @__PURE__ */ L({
  name: "Drawer",
  props: ol,
  emits: ["open", "close"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const {
      modal: l
    } = Vt(n), r = _(() => e.placement === "left" || e.placement === "right" ? {
      minWidth: e.fullscreen ? "100%" : "350px",
      top: 0,
      bottom: 0,
      [e.placement]: 0
    } : e.placement === "top" || e.placement === "bottom" ? {
      height: e.fullscreen ? "100%" : 0,
      minHeight: "350px",
      left: 0,
      right: 0,
      [e.placement]: 0
    } : {}), o = _(() => {
      const c = je(e.placement === "top" ? "down" : e.placement === "bottom" ? "up" : e.placement), h = je(e.placement === "top" ? "up" : e.placement === "bottom" ? "down" : e.placement);
      return {
        enter: j(`slideIn${c}`),
        leave: j(`slideOut${h}`)
      };
    }), a = (c) => e.shakeOff.includes(c), s = () => {
      if (!a("mask"))
        return U(f("div", {
          class: "ch-mask"
        }, null), [[q, l.state.value]]);
    }, i = () => {
      var h;
      return f("div", {
        class: "ch-drawer-default"
      }, [(() => {
        if (a("header"))
          return;
        const m = () => {
          if (!a("x-button"))
            return f(N, {
              mode: "link",
              state: "info",
              "icon-left": "x-lg",
              onClick: l.close
            }, null);
        };
        return f("header", null, [f("h3", null, [Re("Darwer header")]), m()]);
      })(), f("section", null, [(h = t.default) == null ? void 0 : h.call(t)])]);
    };
    return () => f(yt, {
      to: "body"
    }, {
      default: () => [s(), f(be, {
        "enter-active-class": j(o.value.enter),
        "leave-active-class": j(o.value.leave),
        appear: !0
      }, {
        default: () => {
          var c;
          return [U(f("div", {
            ref: l,
            class: "ch-drawer",
            style: r.value
          }, [((c = t.headless) == null ? void 0 : c.call(t)) || i()]), [[q, l.state.value]])];
        }
      })]
    });
  }
}), Fl = R(rl), il = {
  content: String,
  placement: {
    type: String,
    default: "right"
  },
  trigger: {
    type: String,
    default: "hover"
  }
}, cl = /* @__PURE__ */ L({
  name: "Tooltip",
  props: il,
  setup(e, {
    slots: t
  }) {
    const n = () => f("div", {
      class: "ch-tooltip"
    }, [e.content]);
    return () => f(Ht, e, {
      headless: t.headless || n,
      reference: t.reference
    });
  }
}), jl = R(cl);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Ie = (e) => typeof e == "function", At = (e) => e !== null && typeof e == "object", sl = {
  title: String,
  content: String,
  cancelButtonText: String,
  confirmButtonText: String,
  onCancel: Function,
  onConfirm: Function,
  shakeOff: {
    type: Array,
    default: () => []
  },
  autoClose: {
    type: Boolean,
    default: !0
  },
  placement: {
    type: String,
    default: "left"
  }
}, ul = /* @__PURE__ */ L({
  name: "Notification",
  props: sl,
  setup(e, {
    slots: t
  }) {
    const n = et();
    n.open(), e.autoClose && n.close({
      delay: 3e3
    });
    const l = _(() => je(e.placement)), r = (i) => e.shakeOff.includes(i), o = () => {
      var i;
      return (i = e.onCancel) == null ? void 0 : i.call(e, n);
    }, a = () => {
      var i;
      return (i = e.onConfirm) == null ? void 0 : i.call(e, n);
    }, s = () => {
      const i = () => {
        if (!r("icon"))
          return f($e, {
            name: "bell"
          }, null);
      }, c = () => {
        const u = [f("div", {
          class: "ch-notification-content"
        }, [e.content])];
        return r("title") || u.unshift(f("h3", {
          class: "ch-notification-title"
        }, [e.title])), u;
      }, h = () => {
        if (!r("x-button"))
          return f(N, {
            class: "ch-notification-close",
            mode: "link",
            state: "info",
            "icon-left": "x-lg",
            onClick: n.close
          }, null);
      }, m = () => {
        const u = [];
        return !r("cancel-button") && e.cancelButtonText && u.push(f(N, {
          mode: "link",
          onClick: o
        }, {
          default: () => [e.cancelButtonText]
        })), !r("confirm-button") && e.confirmButtonText && u.push(f(N, {
          mode: "link",
          onClick: a
        }, {
          default: () => [e.confirmButtonText]
        })), u;
      };
      return f("div", {
        class: "ch-notification"
      }, [i(), f("main", null, [h(), c(), m()])]);
    };
    return () => f(be, {
      "enter-active-class": j(`slideIn${l.value}`),
      "leave-active-class": j(`zoomOut${l.value}`),
      appear: !0
    }, {
      default: () => {
        var i;
        return [n.state.value ? ((i = t.headless) == null ? void 0 : i.call(t)[0]) ?? s() : null];
      }
    });
  }
});
let me = null;
const dl = (e) => {
  me || (me = document.createElement("div"), me.className = "ch-notification-container", document.body.appendChild(me));
  const t = At(e) ? {
    ...e
  } : null, n = Ie(e) || We(e) ? {
    headless: Ie(e) ? e : () => e
  } : null, l = document.createElement("div"), r = f(ul, t, n);
  bt(r, l), me.classList.add(`__${(e == null ? void 0 : e.placement) || "left"}`), me.appendChild(l.firstChild);
}, Xl = dl, fl = {
  content: String,
  state: {
    type: String,
    default: "info"
  },
  closable: {
    type: Boolean,
    default: !0
  },
  autoClose: {
    type: Boolean,
    default: !0
  }
}, ml = /* @__PURE__ */ L({
  name: "Message",
  props: fl,
  setup(e, {
    slots: t
  }) {
    const n = et();
    n.open(), e.autoClose && n.close({
      delay: 3e3
    });
    const l = _(() => ({
      info: "info-circle",
      success: "check-circle",
      warning: "exclamation-triangle",
      danger: "x-circle"
    })[e.state]), r = () => f(sn, {
      mode: "solid",
      icon: l.value,
      state: e.state,
      description: e.content,
      closable: e.closable
    }, null);
    return () => f(be, {
      "enter-active-class": j("slideInDown"),
      "leave-active-class": j("slideOutUp"),
      appear: !0
    }, {
      default: () => {
        var o;
        return [n.state.value ? ((o = t.headless) == null ? void 0 : o.call(t)[0]) ?? r() : null];
      }
    });
  }
});
let Se = null;
const hl = (e) => {
  Se || (Se = document.createElement("div"), Se.className = "ch-message-container", document.body.appendChild(Se));
  const t = f(ml, At(e) ? {
    ...e
  } : null, Ie(e) || We(e) ? {
    headless: Ie(e) ? e : () => e
  } : null), n = document.createElement("div");
  bt(t, n), Se.appendChild(n.firstChild);
}, Yl = hl, vl = {
  height: Number,
  minThumbSize: {
    type: Number,
    default: 20
  },
  behavior: {
    type: String,
    default: "auto"
  }
}, pl = /* @__PURE__ */ L({
  name: "Scrollbar",
  props: vl,
  emits: ["scroll"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    let l = 0, r = 0;
    const o = w(0), a = w(0), s = w(0), i = w(0), c = w(!1), h = w(!1), m = w(!1), u = w(), v = w(), d = w();
    Le({
      scrollto(x) {
        var T;
        (T = u.value) == null || T.scrollTo(x);
      }
    });
    const g = _(() => e.height ? {
      height: `${e.height}px`
    } : {
      height: "100%"
    }), p = () => {
      u != null && u.value && (i.value = Math.max(u.value.offsetHeight ** 2 / u.value.scrollHeight, e.minThumbSize), s.value = Math.max(u.value.offsetWidth ** 2 / u.value.scrollWidth, e.minThumbSize));
    }, y = () => {
      var x;
      (x = u.value) == null || x.scrollTo({
        left: u.value.scrollWidth * (o.value / u.value.offsetWidth),
        behavior: e.behavior
      });
    }, b = () => {
      var x;
      (x = u.value) == null || x.scrollTo({
        top: u.value.scrollHeight * (a.value / u.value.offsetHeight) - 20,
        behavior: e.behavior
      });
    };
    re(() => {
      u != null && u.value && (m.value = u.value.offsetHeight < u.value.scrollHeight, h.value = u.value.offsetWidth < u.value.scrollWidth, p());
    });
    const S = (x) => (T) => {
      if (!u.value)
        return;
      let O = 0, H = 0;
      const P = T.target !== v.value && T.target !== d.value;
      if (x ? (H = a.value, O = T.screenY) : (H = o.value, O = T.screenX), P)
        return x ? (a.value = T.offsetY - i.value / 2, b()) : (o.value = T.offsetX - s.value / 2, y());
      const I = (W) => {
        if (!u.value)
          return;
        const M = x ? W.screenY : W.screenX;
        return x ? (a.value = Math.max(Math.min(H + M - O, u.value.offsetHeight - i.value), 0), b()) : (o.value = Math.max(Math.min(H + M - O, u.value.offsetWidth - s.value), 0), y());
      }, V = document.onselectstart, A = () => {
        document.removeEventListener("mousemove", I), document.removeEventListener("mouseup", A), document.onselectstart = V;
      };
      document.addEventListener("mousemove", I), document.addEventListener("mouseup", A), document.onselectstart = () => !1;
    }, k = (x) => {
      const T = x.target;
      l !== T.scrollTop && (a.value = T.scrollTop * T.offsetHeight / T.scrollHeight, l = T.scrollTop), r !== T.scrollLeft && (o.value = T.scrollLeft * T.offsetWidth / T.scrollWidth, r = T.scrollLeft), p(), n("scroll", x);
    }, C = () => {
      c.value = !0;
    }, $ = () => {
      c.value = !1;
    };
    return () => {
      var x;
      return f("div", {
        class: "ch-scrollbar",
        style: g.value,
        onMouseenter: C,
        onMouseleave: $
      }, [f("div", {
        ref: u,
        class: "ch-scrollbar-wrpper",
        onScroll: k
      }, [(x = t.default) == null ? void 0 : x.call(t)]), f("div", {
        class: "ch-scrollbar-bar ch-scrollbar-bar--x",
        onMousedown: S(!1)
      }, [U(f("div", {
        ref: v,
        class: "ch-scrollbar-bar-thumb ch-scrollbar-bar-thumb--x",
        style: `width: ${s.value}px; transform: translateX(${o.value}px)`
      }, null), [[q, c.value && h.value]])]), f("div", {
        class: "ch-scrollbar-bar ch-scrollbar-bar--y",
        onMousedown: S(!0)
      }, [U(f("div", {
        ref: d,
        class: "ch-scrollbar-bar-thumb ch-scrollbar-bar-thumb--y",
        style: `height: ${i.value}px; transform: translateY(${a.value}px)`
      }, null), [[q, c.value && m.value]])])]);
    };
  }
}), gl = R(pl), yl = /* @__PURE__ */ L({
  setup() {
    const {
      currentPaneId: e,
      headers: t,
      placement: n
    } = qe(nt), l = w(), r = w(), o = _(() => {
      if (!r.value)
        return;
      if (n.value === "top") {
        const h = `${r.value[e.value].clientWidth}px`, m = `translateX(${r.value[e.value].offsetLeft}px)`;
        return {
          width: h,
          transform: m
        };
      }
      const i = `${r.value[e.value].clientHeight}px`, c = `translateY(${r.value[e.value].offsetTop}px)`;
      return {
        height: i,
        transform: c
      };
    });
    Ae(() => {
      Jt(() => {
        r.value = Array.from(l.value.children);
      });
    });
    const a = (i) => () => e.value = i, s = (i) => f(N, Ee(i, {
      mode: "link",
      state: e.value === i.id ? "primary" : "info",
      onClick: a(i.id)
    }), {
      default: () => [i.name]
    });
    return () => f("div", {
      class: ["ch-tabs-header", n.value]
    }, [f("div", {
      ref: l,
      class: ["ch-tabs-button", n.value]
    }, [t.value.map((i) => s(i))]), f("div", {
      class: ["ch-tabs-slideway", n.value]
    }, [f("div", {
      class: "ch-tabs-thumb",
      style: o.value
    }, null)])]);
  }
}), nt = Symbol("ch-tabs"), bl = {
  defaultTab: String,
  placement: String
}, wl = /* @__PURE__ */ L({
  name: "Tabs",
  props: bl,
  setup(e, {
    slots: t
  }) {
    var o;
    const n = w(0), l = w(0), r = w([]);
    return (o = t.default) != null && o.call(t) || console.log("Warn: Tabs missing default slot."), pt(nt, {
      headers: r,
      paneId: n,
      currentPaneId: l,
      placement: _(() => e.placement || "top")
    }), () => {
      var a;
      return f("div", {
        class: ["ch-tabs", `${e.placement}`]
      }, [f(yl, null, null), (a = t.default) == null ? void 0 : a.call(t)]);
    };
  }
}), xl = Object.assign({
  name: String
}, St), Sl = /* @__PURE__ */ L({
  name: "TabPane",
  props: xl,
  setup(e, {
    slots: t
  }) {
    const {
      paneId: n,
      currentPaneId: l,
      headers: r
    } = qe(nt), o = n.value++;
    return r.value.push({
      id: o,
      ...e
    }), () => {
      var a;
      return U(f("div", null, [(a = t.default) == null ? void 0 : a.call(t)]), [[q, l.value === o]]);
    };
  }
}), Cl = R(wl), kl = R(Sl);
Cl.ChTabPane = kl;
const $l = {
  modelValue: {
    type: Array,
    require: !0
  },
  vertical: Boolean
}, Tl = /* @__PURE__ */ L({
  name: "Steps",
  props: $l,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const {
      steps: n,
      current: l,
      toggle: r
    } = Dt(e.modelValue, t);
    return Le({
      current: l,
      toggle: (a, s) => {
        n.value[a] = Object.assign(n.value[a], s), n.value[a].state !== "pending" && (n.value[a - 1].state = "done", n.value[a - 1].result = "success"), (n.value[a].result === "success" || !n.value[a].result) && (n.value[a + 1].state = "processing"), r(a);
      }
    }), () => {
      var a;
      return f("div", {
        class: ["ch-steps", e.vertical && "__vertical"]
      }, [(a = n.value) == null ? void 0 : a.map((s, i) => {
        var c;
        return f(Y, null, [f("div", {
          class: ["ch-steps-item", e.vertical && "__vertical"]
        }, [f(N, {
          mode: s.state === "processing" ? "outline" : s.state === "done" ? "solid" : "white",
          state: s.state === "done" ? s.result === "exception" ? "warning" : s.result === "fail" ? "danger" : "success" : "primary",
          size: "small",
          shape: "circle"
        }, {
          default: () => [s.icon ? f($e, {
            name: s.icon
          }, null) : i + 1]
        }), f("div", {
          class: ["ch-steps-content", e.vertical && "__vertical"]
        }, [f("div", {
          class: "ch-steps-item-name"
        }, [s.name]), f("div", {
          class: "ch-steps-item-description"
        }, [s.description])])]), i + 1 !== ((c = n.value) == null ? void 0 : c.length) && f("div", {
          class: ["ch-steps-item-pipe", e.vertical && "__vertical"]
        }, null)]);
      })]);
    };
  }
}), Ul = R(Tl);
function El(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !We(e);
}
const _l = {
  count: {
    type: Number,
    default: 0
  },
  showCount: {
    type: Number,
    default: 7
  },
  mode: {
    type: String,
    default: "ghost"
  },
  shape: {
    type: String,
    default: "rounded"
  }
}, Ll = /* @__PURE__ */ L({
  name: "Pagination",
  props: _l,
  setup(e) {
    const t = _(() => wt(2, e.count - 1, 1)), n = _(() => t.value.length + 2), {
      count: l,
      add: r,
      sub: o,
      update: a
    } = Mt({
      initial: 1,
      min: 1,
      max: n
    });
    Le({
      current: l,
      next: r,
      prev: o,
      toggle: a
    });
    const s = w(0), i = w(e.showCount - 3), c = _(() => l.value * 2 - 1 > e.showCount), h = _(() => (e.count - l.value) * 2 - 1 >= e.showCount), m = () => o(), u = () => r(), v = () => o(i.value - s.value - 1), d = () => r(i.value - s.value), g = (y) => () => l.value = y, p = (y) => {
      a(parseInt(y.target.value));
    };
    return re(() => {
      if (c.value && h.value) {
        const y = t.value.findIndex((S) => S === l.value), b = (e.showCount - 3) / 2;
        s.value = y - b, i.value = y + b + 1;
      } else
        c.value ? (s.value = t.value.length - e.showCount + 1, i.value = t.value.length) : h.value && (s.value = 0, i.value = e.showCount - 2);
    }), () => {
      var y;
      return U(f("div", {
        class: "ch-pagination"
      }, [f(N, {
        size: "mini",
        state: "info",
        iconLeft: "chevron-left",
        mode: e.mode,
        shape: e.shape,
        onClick: m
      }, null), f(N, {
        size: "mini",
        mode: e.mode,
        shape: e.shape,
        state: l.value === 1 ? "primary" : "info",
        onClick: g(1)
      }, {
        default: () => [Re("1")]
      }), U(f(N, {
        size: "mini",
        state: "info",
        iconLeft: "three-dots",
        mode: e.mode,
        shape: e.shape,
        onClick: v
      }, null), [[q, c.value]]), (y = t.value) == null ? void 0 : y.slice(s.value, i.value).map((b) => f(N, {
        size: "mini",
        mode: e.mode,
        shape: e.shape,
        state: l.value === b ? "primary" : "info",
        onClick: g(b)
      }, El(b) ? b : {
        default: () => [b]
      })), U(f(N, {
        size: "mini",
        state: "info",
        iconLeft: "three-dots",
        mode: e.mode,
        shape: e.shape,
        onClick: d
      }, null), [[q, h.value]]), f(N, {
        size: "mini",
        mode: e.mode,
        shape: e.shape,
        state: l.value === e.count ? "primary" : "info",
        onClick: g(e.count)
      }, {
        default: () => [e.count]
      }), f(N, {
        size: "mini",
        state: "info",
        iconLeft: "chevron-right",
        mode: e.mode,
        shape: e.shape,
        onClick: u
      }, null), Re("to "), f($t, {
        style: "width: 56px",
        type: "number",
        size: "small",
        onBlur: p
      }, null)]), [[q, e.count > 1]]);
    };
  }
}), ql = R(Ll), Pl = {
  modelValue: Array,
  replace: Boolean,
  separator: {
    type: String,
    default: "/"
  }
}, Bl = /* @__PURE__ */ L({
  name: "Breadcrumb",
  props: Pl,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const {
      steps: n,
      current: l,
      toggle: r
    } = Dt(e.modelValue, t), o = gt(), a = o == null ? void 0 : o.appContext.config.globalProperties.$router, s = (i, c) => () => {
      r(i), !(!c.to || !a) && (e.replace ? a.replace(c.to) : a.push(c.to));
    };
    return () => {
      var i;
      return f(Y, null, [(i = n.value) == null ? void 0 : i.map((c, h) => f(Y, null, [U(f("span", null, [e.separator]), [[q, h !== 0]]), f(N, {
        size: "mini",
        mode: "link",
        iconLeft: c.icon,
        state: l.value === h ? "primary" : "info",
        onClick: s(h, c)
      }, {
        default: () => [c.name]
      })]))]);
    };
  }
}), Gl = R(Bl);
function Rl(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !We(e);
}
const Ol = {
  listHeight: Number,
  listItemCount: {
    type: Number,
    default: 0
  },
  estimatedListItemHeight: {
    type: Number,
    required: !0
  }
}, Vl = /* @__PURE__ */ L({
  name: "VirtualList",
  props: Ol,
  setup(e, {
    slots: t
  }) {
    const n = w(0), l = w(0), r = _(() => n.value + l.value), o = w(0), a = w(e.estimatedListItemHeight * e.listItemCount), s = w(), i = w(), c = _(() => wt(1, e.listItemCount, 1).map((p, y) => ({
      index: y,
      height: e.estimatedListItemHeight,
      top: e.estimatedListItemHeight * y,
      bottom: e.estimatedListItemHeight * (y + 1)
    }))), h = () => {
      o.value = n.value >= 1 ? c.value[n.value - 1].bottom : 0;
    }, m = (p = 0) => {
      var y;
      return (y = c.value.find((b) => b.bottom > p)) == null ? void 0 : y.index;
    }, u = _(() => ({
      height: `${a.value}px`
    })), v = _(() => ({
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      transform: `translateY(${o.value}px)`
    }));
    Ae(() => {
      if (!s.value)
        return;
      const p = e.listHeight ? e.listHeight : s.value.$el.offsetHeight;
      l.value = Math.ceil(p / e.estimatedListItemHeight);
    }), Qt(() => {
      let p = n.value;
      [...i.value.children].forEach((b) => {
        const k = b.getBoundingClientRect().height, C = c.value[p].height - k;
        if (C) {
          c.value[p].height = k, c.value[p].bottom = c.value[p].bottom - C;
          for (let $ = p + 1; $ < c.value.length; $++)
            c.value[$].top = c.value[$ - 1].bottom, c.value[$].bottom = c.value[$].bottom - C;
        }
        p < c.value.length - 1 && p++;
      }), a.value = c.value[c.value.length - 1].bottom, h();
    });
    const d = (p) => {
      const y = p.target.scrollTop;
      n.value = m(y);
    }, g = () => {
      var p, y;
      return f(Y, null, [f("div", {
        style: u.value
      }, null), f("div", {
        ref: i,
        style: v.value
      }, [(y = (p = t.default) == null ? void 0 : p.call(t)[0].children) == null ? void 0 : y.slice(n.value, r.value)])]);
    };
    return () => {
      let p;
      return f(gl, {
        ref: s,
        height: e.listHeight,
        onScroll: d
      }, Rl(p = g()) ? p : {
        default: () => [p]
      });
    };
  }
}), Ml = /* @__PURE__ */ L({
  name: "VirtualListItem",
  setup(e, {
    slots: t
  }) {
    return () => {
      var n;
      return f("div", {
        class: "ch-virtual-list-item"
      }, [(n = t.default) == null ? void 0 : n.call(t)]);
    };
  }
}), Dl = R(Vl), Hl = R(Ml);
Dl.ChVirtualListItem = Hl;
export {
  sn as ChAlert,
  mn as ChBadge,
  Gl as ChBreadcrumb,
  N as ChButton,
  Al as ChButtonGroup,
  Fl as ChDrawer,
  It as ChDropdown,
  $e as ChIcon,
  $t as ChInput,
  Nl as ChModal,
  ql as ChPagination,
  Ht as ChPopover,
  gl as ChScrollbar,
  zl as ChSelect,
  Ul as ChSteps,
  kl as ChTabPane,
  Cl as ChTabs,
  pn as ChTag,
  jl as ChTooltip,
  Dl as ChVirtualList,
  Hl as ChVirtualListItem,
  xt as GROUP_BUTTON_KEY,
  ml as MessageConstructor,
  ul as NotificationConstructor,
  nt as PL_TAB_KEY,
  Yl as PlMessage,
  Xl as PlNotification,
  Wl as PlTable,
  un as badgeProps,
  St as buttonProps
};
