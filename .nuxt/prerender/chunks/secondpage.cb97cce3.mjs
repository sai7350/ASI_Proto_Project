import { ssrRenderAttrs } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper.a1a6add7.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="bg bg-yellow-100 bg-no-repeat"><div class="h-full"><div class="hidden md:block space-y-17 h-full bg-gradient-to-r from-yellow-100/5 via-yellow-200/60 to-yellow-300/50 text-black"><div class="lg:w-3/4 ml-auto"><div class="md:text-6xl text-3xl text-right py-10 px-10"> Welcome </div><div class="text-2xl w-2/3 ml-auto px-10 text-right"><div>Shaniwar Wada is a historical fortification in the city of Pune, India. Built in 1732, it was the great seat of the Peshwas of the Maratha Empire until 1818. Following the rise of the Maratha Empire, the palace became the center of Indian politics in the 18th century. The fort itself was largely destroyed in 1828 by an unexplained fire, but the surviving structures are now maintained as a tourist site. </div></div></div><div class="md:flex hidden"><button class="bg-red-500 hover:bg-red-400 hover:scale-110 duration-300 text-white rounded mx-auto p-3 m-4"><a href="/Map"> Start Tour </a></button></div></div></div></div><div class="block md:hidden py-4 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 text-black"><div class="text-4xl font-bold font-quick text-center py-10 px-10"> Welcome </div><div class="font-quick text-2xl ml-auto px-10 text-center"><div>Shaniwar Wada is a historical fortification in the city of Pune, India. Built in 1732, it was the great seat of the Peshwas of the Maratha Empire until 1818. Following the rise of the Maratha Empire, the palace became the center of Indian politics in the 18th century. The fort itself was largely destroyed in 1828 by an unexplained fire, but the surviving structures are now maintained as a tourist site. </div></div></div><div class="flex md:hidden bg-yellow-100 py-4 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100"><button class="bg-red-500 hover:bg-red-400 hover:scale-110 duration-300 text-white rounded mx-auto p-3 m-4"><a href="/Map"> Start Tour </a></button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/secondpage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const secondpage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { secondpage as default };
//# sourceMappingURL=secondpage.cb97cce3.mjs.map
