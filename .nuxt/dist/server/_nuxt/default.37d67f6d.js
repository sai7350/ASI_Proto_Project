import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.a1a6add7.js";
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqklEQVR4nO3ZPQrCQBSF0WCny/cHs0q10faKaKVgmIE8A56zgClu8ab4hgEAAAAAAACA30mySXJIcglTzkn2SdY9Q4+Tz/NubB15leT28QxTro/tDL20oZ2Obse2A/08H+sku9eh57tTkm3XZwgAAAAA8OfE2SbibDFxtog4W0ScLSLOzkycBQAAAADoJM42EWeLibNFxNki4mwRcXZm4iwAAAAAAADAsAB337XoqI2Y7e8AAAAASUVORK5CYII=";
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABlUlEQVR4nO3VMUhVURzH8VORCWFDoIKTQjS5hItrLeLoJrS5i5O4OrY2twVtjpJDNLpEU1MNOok2NBgKIpGfuPIeSJ179d13j++a5wt3euf8/7//Pee+bwiZTCYZeFk84SaCFfzGGdbDTQF38Mq/vMbd0GYwhHfK2cBwaCN4iC2X8xGPQpvAOD5Hwu53nr8p1o6HNoApfIuE3METTOJr5PddPB10+Bl8j4T7hLEL6x5jO7LuB2YHFf4FfkZCfcBIyTeyGVl/jPlBCOo0EuYt7lfsu4c3kX2/sHTdgqr1P9/xxHpk/1lS4VUIqmi8WqPecj8voilBFddosY+6CzgpEd6DpsIXH9/7SJMjzDVQ/zkOkwivQlAHeNZv+C6Yxl6kzxdMhBSCqlW0ut9kY8KrEFTBaNPhuxS1S3oWWWZCn4I6JyRGOZcLr0JQbRigWngVgmrTAF3vrNUumDR9SNDv1gygR/IAVyWfQAmtP4GQqE7P5AE65BOoS75CHfIVqst/d4WuSqo6PdNU4zzArT2BTCaTCSn5A75aWqtp8pFQAAAAAElFTkSuQmCC";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACc0lEQVR4nO2aMWsVQRSFrxiTWCpEDSH2dhELCWmt0lsKNqYSLO2DgZRa2gpBtLW0FZskpso/UNAX7DVEPhkzgefMbnZ2Z+4Oyv3avHPPzNndITBHxDAMwzAM4z8EuFB7AXPATAXfeeARcDi29x+AJeAZ8A04Al4At2U83wkebc+/AO4Ar4BjmjkEngLXZCTfkj6NALPAfeAj6ZwA773ukij6DpmdBHDDP80v5PEdeJn6iUz5fk4ZLqUB1oA357zmbaT8fg94DFxt8F0FXvf1LXmaPwT2O/x+AjvA3Ya/LQBPgIOEdf8A3gLrwANgd6hvic1vTZ+qLbjTfhNYnNK1LgRYAZ4nzKWk79AAzuMTsAFc7tK1zL4I3PNP2z3FVLJ8cwP4BbxzC++jS/C54jf1oWXTKr6dNCxkuVuVtxD/iYzuW3Rg7kJq+UZYAAGirKsdfIQFECDKutrBR1gAAaKsqx18hAUQIMq62sFHWAABoqyrHXyEBRAgyrrawUdYAAGirKsdfIQFECDKutrBR1gAAaKsqx18hAUQIMq62sFHWAABoqyrHXyEBRCQGNpyqHOXHTV8+3g20mdgj4bI9bF8JRc6BhZoiMxq+qoFACz6q2l3RZ3DxF+VrxT2dXO3igfAaQlhJ+E6e9eXG9b99bcrPXRx4EsUCxm++77MMZe9eQf9OPY1llUJcLUXX3/ZS5zT19fVdtakNKThXsftHlfYt/zvv5LHxM+5WXzjZwxtaqSg0RApDs0neGdTY4DPWUOk7RNR8e0keN1cDXVJlHGdQV+vPfKf1yi+jfh/XlzxeF5GxhWti53m/2zl3DAMwzAMQ3T4DZZ4Avlj0c7pAAAAAElFTkSuQmCC";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="drawer"><input id="my-drawer-3" type="checkbox" class="drawer-toggle"><div class="flex flex-col drawer-content"><div class="sticky top-0 w-full navbar md:justify-between bg-red-500 text-white"><div class="p-2"><label for="my-drawer-3" class="hover:bg-red-300 p-1 rounded hover:scale-110 duration-500"><img class="h-8 drawer-content"${ssrRenderAttr("src", _imports_0)} alt=""></label></div><div class="md:text-xl p-2"> Pune Audio Guides </div><div class="md:flex hidden"></div></div><div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><div class="sticky bottom-0 flex p-3 bg-cyan-800"><div class="flex w-1/2 border-r mx-auto"><div class="flex mx-auto space-x-2 items-center"><a href="/" class="space-x-2 flex"><img${ssrRenderAttr("src", _imports_1)} class="h-8" alt="Home"><span class="md:flex hidden font-sans text-white text-lg">Home</span></a></div></div><div class="w-1/2 flex border-l mx-auto"><div class="flex mx-auto items-center"><a href="/Map" class="space-x-2 flex"><img${ssrRenderAttr("src", _imports_2)} class="h-8" alt="Map"><span class="md:flex hidden font-sans text-white text-lg">Map</span></a></div></div></div></div><div class="drawer-side"><label for="my-drawer-3" class="drawer-overlay"></label><div class="p-4 menu bg-black font-bold text-white w-1/2"><div class="flex flex-col items-center space-y-8 md:text-2xl pt-14 font-sans"><a class="hover:text-gray-200 hover:scale-110 duration-300" href="/">Home</a><a class="hover:text-gray-200 hover:scale-110 duration-300" href="#">Settings</a><a class="hover:text-gray-200 hover:scale-110 duration-300" href="https://www.saapttrini.com/">Saapttrini</a></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default.37d67f6d.js.map
