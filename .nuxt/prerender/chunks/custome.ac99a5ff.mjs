import { ssrRenderAttrs, ssrRenderSlot } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/custome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const custome = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { custome as default };
//# sourceMappingURL=custome.ac99a5ff.mjs.map
