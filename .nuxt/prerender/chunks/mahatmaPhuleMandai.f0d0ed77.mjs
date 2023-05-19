import { useSSRContext, mergeProps } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './icons8-back-50.75999c69.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _imports_1 = "" + globalThis.__buildAssetsURL("Mahatma_Phule_Mandal.cd9312bb.jpg");
const _imports_2 = "" + globalThis.__buildAssetsURL("Audio.e279a54f.mp3");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-yellow-100" }, _attrs))}><div class="bg-red-800 flex p-2 justify-between"><div class="hover:scale-110 hover:bg-red-600 py-1 px-2 rounded duration-300"><a href="/Map"><img class="h-5"${ssrRenderAttr("src", _imports_0)} alt=""></a></div><div class="text-lg text-white px-4">Mahatma Phule Mandai</div><div></div></div><div class="px-5 py-3 flex items-center"><img class="md:w-3/5 w-4/5 items-center mx-auto rounded-lg shadow-lg shadow-neutral-900"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="flex flex-col md:flex-row md:space-x-8 p-4"><div class="p-8"><div class="md:w-auto w-3/4 mx-auto text-center rounded-lg shadow-lg shadow-neutral-600 bg-white p-4"><div class="text-2xl p-4 text-black font-semibold"> Mahatma Phule Mandai </div><div class="space-x-4 p-4 justify-center text-black flex flex-row text-lg"><div>Category:</div><div>Heritage Walk</div></div></div></div><div class="p-8 md:border-l c-border border-black text-xl m-auto md:text-left text-center font-quick text-black"> In the early years of the British rule an open air vegetable market used to be held outside the Shaniwar Wada. This shifted to an indoor place built by the Poona Municipality. The construction of the Gothic style building started in 1882 and took 4 years for completion. It was designed and built by Walter Ducat and Vasudeo Kanitkar with significant input from engineer Narso Ramchandra Godbole.[1] The Market at opening was named after the then Governor of Bombay, Lord Reay, and served as a retail and wholesale market in addition to being the Municipal office. There was also an older market district called Tulshi Baug close to the vegetable market that sold a variety of household items.[2] [3] The wholesale market was moved to the outskirts of the city in the late 1970s to the newly built Shri Chhatrapati Shivaji Market Yard at Gultekdi. The Municipal offices moved to a purpose built new building in the Shivajinagar area of the city many decades ag </div></div><div class="sticky bottom-5 pb-10"><div class="mx-auto bg-black rounded-full md:w-3/4"><audio controls class="mx-auto w-full"><source${ssrRenderAttr("src", _imports_2)}></audio></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mahatmaPhuleMandai.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mahatmaPhuleMandai = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { mahatmaPhuleMandai as default };
//# sourceMappingURL=mahatmaPhuleMandai.f0d0ed77.mjs.map
