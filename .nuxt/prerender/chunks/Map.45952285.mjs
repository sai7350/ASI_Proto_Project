import { ssrRenderStyle } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://H:/Saapttrini%20Software%20Solution/Test_Project/SampleCode/node_modules/vue/index.mjs';

const _sfc_main = {
  __name: "Map",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div><head><link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin=""></head></div><div class="z-0" id="map" style="${ssrRenderStyle({ "height": "80vh" })}"></div><div class="w-full z-20 fixed mb-3 bottom-16"><div class="w-6/12 py-2 text-center mx-auto bg-white text-black text-lg font-bold"> Click on the Blue tag to Start Tour </div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Map.45952285.mjs.map
