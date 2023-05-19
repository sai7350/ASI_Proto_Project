import { useSSRContext, mergeProps } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './icons8-back-50.75999c69.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _imports_1 = "" + globalThis.__buildAssetsURL("LalMahal.1d397fd7.jpg");
const _imports_2 = "" + globalThis.__buildAssetsURL("Audio.a0cd8328.mp3");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-yellow-100" }, _attrs))}><div class="bg-red-800 flex p-2 justify-between"><div class="hover:scale-110 hover:bg-red-600 py-1 px-2 rounded duration-300"><a href="/Map"><img class="h-5"${ssrRenderAttr("src", _imports_0)} alt=""></a></div><div class="text-lg text-white px-4">Lal Mahal</div><div></div></div><div class="px-5 py-3 flex items-center"><img class="md:w-3/5 w-4/5 items-center mx-auto rounded-lg shadow-lg shadow-neutral-900"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="flex flex-col md:flex-row md:space-x-8 p-4"><div class="p-8"><div class="md:w-auto w-3/4 mx-auto text-center rounded-lg shadow-lg shadow-neutral-600 bg-white p-4"><div class="text-2xl p-4 text-black font-semibold"> Lal Mahal </div><div class="space-x-4 p-4 justify-center text-black flex flex-row text-lg"><div>Category:</div><div>Heritage Walk</div></div></div></div><div class="p-8 md:border-l c-border border-black text-xl m-auto md:text-left text-center font-quick text-black"> In the year 1630 AD, Shivaji Maharaj&#39;s Father Shahaji Raje Bhosale, established the Lal Mahal for his wife Jijabai and son. Shivaji Maharaj stayed here for several years until he captured his first fort. The current Lal Mahal is a reconstruction of the original and located in the center of the Pune city. The original Lal Mahal was built with the idea of rejuvenating the recently razed city of Pune when Shahaji Raje entered the city along with Shivaji and his mother, Maasaheb Jijabai. Young Shivaji Maharaj grew up here, and stayed in the Lal Mahal till he captured the Torna fort in 1645. Chhatrapati Shivaji Maharaj&#39;s marriage with his first wife, Saibai took place in Lal Mahal on 16 May 1640 </div></div><div class="sticky bottom-5 pb-10"><div class="mx-auto bg-black rounded-full md:w-3/4"><audio controls class="mx-auto w-full"><source${ssrRenderAttr("src", _imports_2)}></audio></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lalMahal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lalMahal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { lalMahal as default };
//# sourceMappingURL=lalMahal.35a96977.mjs.map
