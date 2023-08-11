const isSSR = Boolean(
  {}.SSR || {}.SSG || {}.VITE_SSR || {}.VITE_SSG
);
function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, " $1").trim();
  return result.split(" ").join("-").toLowerCase();
}
function getSideEffects(dirName, options) {
  const { importStyle = true } = options;
  if (!importStyle || isSSR)
    return;
  const noStyleComps = [
    "select",
    "tab-pane",
    "pagination",
    "breadcrumb",
    "virtual-list",
    "virtual-list-item"
  ];
  if (noStyleComps.includes(dirName))
    return;
  if (importStyle === "less") {
    return [
      "cheetah-design-vue/src/styles/base.less",
      `cheetah-design-vue/src/components/${dirName}/src/index.less`
    ];
  }
  return [`cheetah-design-vue/dist/styles/${dirName}/src/index.js`];
}
function PlayResolver(options = {}) {
  const { from = "cheetah-design-vue" } = options;
  return {
    type: "component",
    resolve: (name) => {
      if (name.startsWith("Ch")) {
        const partialName = name.slice(2);
        return {
          name,
          from,
          sideEffects: getSideEffects(kebabCase(partialName), options)
        };
      }
    }
  };
}
export {
  PlayResolver,
  isSSR,
  kebabCase
};
//# sourceMappingURL=resolver.mjs.map
