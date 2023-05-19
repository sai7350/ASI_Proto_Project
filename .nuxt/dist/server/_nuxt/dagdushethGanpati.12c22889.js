import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./icons8-back-50.75999c69.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.a1a6add7.js";
const _imports_1 = "" + globalThis.__buildAssetsURL("Dagusheth_Ganpati.aaffa24b.jpg");
const _imports_2 = "" + globalThis.__buildAssetsURL("Audio.e354013b.mp3");
const dagdushethGanpati_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-yellow-100" }, _attrs))}><div class="bg-red-800 flex p-2 justify-between"><div class="hover:scale-110 hover:bg-red-600 py-1 px-2 rounded duration-300"><a href="/Map"><img class="h-5"${ssrRenderAttr("src", _imports_0)} alt=""></a></div><div class="text-lg text-white px-4">Dagusheth Ganpti</div><div></div></div><div class="px-5 py-3 flex items-center"><img class="md:w-3/5 w-4/5 items-center mx-auto rounded-lg shadow-lg shadow-neutral-900"${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="flex flex-col md:flex-row md:space-x-8 p-4"><div class="p-8"><div class="md:w-auto w-3/4 mx-auto text-center rounded-lg shadow-lg shadow-neutral-600 bg-white p-4"><div class="text-2xl p-4 text-black font-semibold"> Dagusheth Ganpti </div><div class="space-x-4 p-4 justify-center text-black flex flex-row text-lg"><div>Category:</div><div>Heritage Walk</div></div></div></div><div class="p-8 md:border-l c-border border-black text-xl m-auto md:text-left text-center font-quick text-black"> Shrimant Dagadusheth Halwai and his wife Laxmibai was a trader and sweet maker settled in Pune. His original halwai shop still exists under the name &quot;Dagdusheth Halwai Sweets&quot; near Datta Mandir in Pune. Eventually he became a successful sweet seller and a rich businessman. In the later 1800s, they lost their only son in a plague epidemic. They were approached by a compassionate sage who advised them to build a Ganesha temple in Pune </div></div><div class="sticky bottom-5 pb-10"><div class="mx-auto bg-black rounded-full md:w-3/4"><audio controls class="mx-auto w-full"><source${ssrRenderAttr("src", _imports_2)}></audio></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dagdushethGanpati.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dagdushethGanpati = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  dagdushethGanpati as default
};
//# sourceMappingURL=dagdushethGanpati.12c22889.js.map
