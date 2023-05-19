import { _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/index.mjs';
import { ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/server-renderer/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/ofetch/dist/node.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/hookable/dist/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/unctx/dist/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/ufo/dist/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/h3/dist/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/@unhead/vue/dist/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/@unhead/dom/dist/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/defu/dist/defu.mjs';
import './nitro-prerenderer.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/destr/dist/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/scule/dist/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/ohash/dist/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/unstorage/dist/index.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/unstorage/drivers/fs.mjs';
import 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/radix3/dist/index.mjs';

const _imports_0 = "" + globalThis.__buildAssetsURL("bgimg.7730ae1e.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><div class="bg-yellow-100" style="${ssrRenderStyle({ "height": "96vh" })}"><div><div class="bg-red-500 text-white py-2 text-center"><p>Local Audio Guides</p></div><div class="mx-3 text-sm py-2 px-3 underline bg-slate-400 mb-5 rounded-b-md text-white"><span class="text-center pl-8">Powered by Sapttrini Software Solution pvt</span></div></div><div><div class="mx-5"><img${ssrRenderAttr("src", _imports_0)} alt=""></div></div><br><br><div class="px-2"><div class="flex justify-between pt-4"><div><p>Audio Guide Language</p></div><div class=""><select name="" id="" style="${ssrRenderStyle({ "outline": "none" })}"><option value="">Marathi</option><option value="">Hindi</option><option value="">English</option></select></div></div><hr><br><form><input type="text" placeholder=" Enter your Name" class="w-full border-b-2 mb-3 outline-none"><br><input placeholder="Enter you Mobile Number" oninput="javascript: if (this.value.length &gt; this.maxLength) this.value = this.value.slice(0, this.maxLength);" type="number" maxlength="10" class="w-full border-b-2 mb-3 outline-none"></form></div><br><div class="text-center"><div><button class="bg-red-600 text-white text-xl px-4 py-2 rounded-full"><i class="fa fa-ticket" style="${ssrRenderStyle({ "font-size": "20px" })}"></i>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/secondpage" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Enter`);
          } else {
            return [
              createTextVNode("Enter")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><br><hr></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.53dd76dc.mjs.map
